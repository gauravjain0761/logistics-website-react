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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const forgotimg = "/assets/images/auth/forgot.png";

const OTPDialogBox = ({ keepMounted, onClose, open, title }) => {
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.otp) {
        errors.otp = "OTP  is required";
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log("Appointment", values);
    },
  });

  const handleClose = () => {
    formik.resetForm();
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        components="form"
        scroll="paper"
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-rounded": {
            borderRadius: "0px",
          },
        }}
        maxWidth="xs"
      >
        {/* <Box component="form" onSubmit={formik.handleSubmit}> */}
        <DialogHeader onClose={onClose} title={title} />
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
              >
                Resend OTP..
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
