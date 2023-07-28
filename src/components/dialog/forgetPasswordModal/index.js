import * as React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const forgotimg = "/assets/images/auth/forgot.png";

const ForgetPasswordDialogBox = ({ keepMounted, onClose, open, title }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [showResend, setShowResend] = React.useState(false);
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
    </>
  );
};
export default ForgetPasswordDialogBox;
