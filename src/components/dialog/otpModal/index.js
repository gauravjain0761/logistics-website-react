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
import { DialogForm } from "./form";
import { useFormik } from "formik";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const forgotimg = "/assets/images/auth/forgot.png";

const OTPDialogBox = ({
  keepMounted,
  onClose,
  open,
  title,
  email,
  registerFormik,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.otp) {
        errors.otp = "OTP  is required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      let formData;
      formData = {
        email: email,
        otp: values.otp,
      };
      await axiosInstance
        .post("api/user/validate-otp", formData, { setErrors })
        .then((response) => {
          if (response?.status === 200) {
            onClose();
            formik.resetForm();
            registerFormik.resetForm();
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
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

  const resendOtp = async () => {
    let formData;

    formData = {
      email: registerFormik?.values?.email,
      type: registerFormik?.values?.user_type,
    };

    await axiosInstance
      .post("api/user/resend-otp", formData)
      .then((response) => {
        if (response?.status === 200) {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
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

  const handleClose = () => {
    formik.resetForm();
    registerFormik.resetForm();
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        components="form"
        scroll="paper"
        onClose={() => {
          onClose();
          handleClose();
        }}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-rounded": {
            borderRadius: "0px",
          },
        }}
        maxWidth="xs"
      >
        {/* <Box component="form" onSubmit={formik.handleSubmit}> */}
        <DialogHeader
          onClose={() => {
            onClose();
            handleClose();
          }}
          title={title}
        />
        <DialogContent dividers={"paper"}>
          <Stack textAlign={"left"} mt={2}>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ cursor: "pointer", fontSize: "16px", fontWeight: 500 }}
            >
              Please Enter One Time Password to Verify your Account
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>
              A Code has Been Sent To Your Email-id
            </Typography>
          </Stack>
          <DialogForm formik={formik} />
          <Box>
            <Typography sx={{ fontSize: "16px" }}>
              Didn{"'"}t receive OTP ?{" "}
              <Typography
                color="primary"
                component="span"
                fontWeight={700}
                sx={{ cursor: "pointer", fontSize: "15px" }}
                onClick={resendOtp}
              >
                Resend OTP
              </Typography>
            </Typography>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            onClick={() => formik.handleSubmit()}
            variant="contained"
            color="primary"
            type="submit"
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
    </div>
  );
};
export default OTPDialogBox;
