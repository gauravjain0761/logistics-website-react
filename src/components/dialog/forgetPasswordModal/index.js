import * as React from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  Modal,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { DialogHeader } from "./header";
import { ForgetForm } from "./forgetForm";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { OTPForm } from "./otpForm";
import axiosInstance from "@/utils/axios";
import { PasswordBox } from "@/components/form";
import { Close } from "@mui/icons-material";
import Iconify from "@/components/iconify/Iconify";
import { useRouter } from "next/router";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const forgotimg = "/assets/images/auth/forgot.png";

const ForgetPasswordDialogBox = ({ keepMounted, onClose, open, title }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [showResend, setShowResend] = React.useState(false);

  const [openPassword, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handlePasswordClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      otp: "",
      type: "email",
    },
    validate: (values) => {
      const errors = {};
      if (values.type === "mobile" && !values.email) {
        errors.email = "Mobile no. is required";
      } else if (
        values.type === "mobile" &&
        !/^[0-9]{10}$/.test(values.email)
      ) {
        errors.email = "Please enter valid number";
      }

      if (values.type === "email" && !values.email) {
        errors.email = "Email is required";
      } else if (
        values.type === "email" &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (showResend && !values.otp) {
        errors.otp = "OTP is Required";
      }

      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      let url, formData;
      if (!showResend) {
        url = "/api/user/send-otp";
        formData = {
          email: values?.email,
          mobile: values?.mobile,
          type: values?.type,
        };
      } else {
        url = "/api/user/validate-otp";
        formData = {
          email: values?.email,
          otp: values?.otp,
        };
      }

      await axiosInstance
        .post(url, formData, { setErrors })
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            setShowResend(true);
            formik.setFieldValue("otp", response?.data?.verification_code);
            setOpen(true);
            if (showResend) {
              handleClose();
              onClose();
            }
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
            setShowResend(false);
          }
        })
        .catch((error) => {
          const { response } = error;
          let status = [406, 404];
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.error[key]) {
                setErrors({ [key]: response.data.error[key][0] });
              }
            }
          }
          if (status.includes(response?.status)) {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        });
    },
  });

  const handleClose = () => {
    formik.resetForm();
    setShowResend(false);
  };

  const resendOtp = async () => {
    let formData;

    formData = {
      email: formik?.values?.email,
      type: formik?.values?.type,
    };

    await axiosInstance
      .post("api/user/resend-otp", formData)
      .then((response) => {
        if (response?.status === 200) {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });

          formik.setFieldValue("otp", response?.data?.verification_code);
        } else {
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        const { response } = error;
        let status = [406, 404];
        if (status.includes(response?.status)) {
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        }
      });
  };
  const router = useRouter();
  const formData = useFormik({
    initialValues: {
      email:formik.values.email,
      otp:"",
      new_password: "",
      new_password_confirmation: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.new_password) {
        errors.new_password = "New password is required";
      }

      if (!values.new_password_confirmation) {
        errors.new_password_confirmation = "Confirm password is required";
      }
      if (
        values.new_password_confirmation &&
        values.new_password &&
        values.new_password_confirmation !== values.new_password
      ) {
        errors.new_password_confirmation =
          "Confirm password didn't match with new password";
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      await axiosInstance
        .post("api/user/reset-password", values)
        .then((response) => {
          if (response.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            handleClose();
            clearToken();
            router.push("/auth/login");
          }
        })
        .catch((error) => {
          const { response } = error;
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.error[key]) {
                setErrors({ [key]: response.data.error[key][0] });
              }
            }
          }
          if (response?.data?.status === 406) {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        });
    },
  });
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        components="form"
        scroll="paper"
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="xs"
        sx={{
          "& .MuiPaper-rounded": {
            borderRadius: "0px",
          },
        }}
      >
        {/* <Box component="form" onSubmit={formik.handleSubmit}> */}
        <DialogHeader
          onClose={onClose}
          title={`${!showResend ? title : "OTP Verification"}`}
          showResend={showResend}
          handleClose={handleClose}
        />
        <DialogContent dividers={"paper"}>
          <Stack textAlign={"center"} mt={2}>
            {!showResend && (
              <Box m={"auto"} component="img" src={forgotimg} width={"6em"} />
            )}
            <Typography
              variant="h4"
              fontWeight={300}
              sx={{ cursor: "pointer", fontSize: "16px", fontWeight: 500 }}
            >
              {!showResend
                ? "Forget Password"
                : "Please Enter One Time OTP for Reset Your Password"}
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              {!showResend
                ? "Enter Your Registerd Email or Contact no & Well Send you a link to reset your Password"
                : `A Code has Been Sent To Your ${
                    formik.values.type == "email" ? "Email" : "Mobile"
                  }`}
            </Typography>
          </Stack>
          {showResend ? (
            <OTPForm formik={formik} />
          ) : (
            <ForgetForm formik={formik} />
          )}
          {showResend && (
            <Box>
              <Typography sx={{ fontSize: "16px" }}>
                Didn{"'"}t receive OTP ?{" "}
                <Typography
                  color="primary"
                  component="span"
                  fontWeight={500}
                  sx={{ cursor: "pointer", fontSize: "15px" }}
                  onClick={resendOtp}
                >
                  Resend OTP
                </Typography>
              </Typography>
            </Box>
          )}
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            onClick={() => formik.handleSubmit()}
            variant="contained"
            color="primary"
          >
            Verify
          </Button>
          <Button
            variant="contained"
            color="dark"
            onClick={() => {
              onClose();
              handleClose();
            }}
          >
            Close
          </Button>
        </DialogActions>
        {/* </Box> */}
      </Dialog>
      {/* --------------------- */}
      <Box>
        {/* <Button
        // color="dark"
        fullWidth
        variant="outlined"
        startIcon={<Iconify icon="carbon:password" />}
        onClick={handleOpen}
        sx={{
          fontWeight: 500,
        }}
      >
        Change Password
      </Button> */}
        <Modal
          open={openPassword}
          onClose={handlePasswordClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              borderRadius:"10px",
              bgcolor: "background.paper",
              border: "1px solid #f5f5f5",
              boxShadow: 24,
              p: 4,
            }}
            component="form"
            noValidate
            onSubmit={formData.handleSubmit}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography component="h5" variant="h5">
                Change Password
              </Typography>
              <Box>
                <Card sx={{ borderRadius: "50%" }}>
                  <IconButton
                    size="small"
                    onClick={() => {
                      handlePasswordClose();
                      formData.resetForm();
                    }}
                  >
                    <Close fontSize="small" />
                  </IconButton>
                </Card>
              </Box>
            </Stack>
            <Stack spacing={1}>
              {/* <Box>
                <PasswordBox
                  fullWidth
                  size="small"
                  name="password"
                  value={formData.values.password}
                  onChange={formData.handleChange}
                  placeholder="Enter Current Password"
                  helperText={formData?.errors?.password}
                />
              </Box> */}
              <Box>
                <PasswordBox
                  fullWidth
                  size="small"
                  name="new_password"
                  value={formData.values.new_password}
                  onChange={formData.handleChange}
                  placeholder="Enter New Password"
                  helperText={formData?.errors?.new_password}
                />
              </Box>
              <Box>
                <PasswordBox
                  fullWidth
                  size="small"
                  name="new_password_confirmation"
                  value={formData.values.new_password_confirmation}
                  onChange={formData.handleChange}
                  placeholder="Enter Confirm Password"
                  helperText={formData?.errors?.new_password_confirmation}
                />
              </Box>
            </Stack>
            <Stack direction="row" mt={2}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                // onClick={handlePasswordClose}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Modal>
      </Box>
    </>
  );
};
export default ForgetPasswordDialogBox;
