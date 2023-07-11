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

const DialogBox = ({ keepMounted, onClose, open, title }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      email: "",
      mobile: "",
      description: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name  is required";
      }

      if (!values.date) {
        errors.date = "Date  is required";
      }

      if (!values.mobile) {
        errors.mobile = "Mobile number  is required";
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
      >
        {/* <Box component="form" onSubmit={formik.handleSubmit}> */}
        <DialogHeader onClose={onClose} title={title} />
        <DialogContent dividers={"paper"}>
          <Stack textAlign={"center"} mt={2}>
            <Box m={"auto"} component="img" src={forgotimg} width={"6em"} />
            <Typography
              variant="h4"
              fontWeight={300}
              sx={{ cursor: "pointer" }}
            >
              Forget Password
            </Typography>
            <Typography>
              Enter Your Registerd Email or Contact no & Well Send you a link to
              reset your Password
            </Typography>
          </Stack>
          <DialogForm formik={formik} />
          <Box>
            <Typography>
              Didn{"'"}t receive OTP ?{" "}
              <Typography
                color="primary"
                component="span"
                fontWeight={700}
                sx={{ cursor: "pointer" }}
              >
                Resend OTP
              </Typography>
            </Typography>
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              onClose();
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => formik.handleSubmit()}
            variant="contained"
            color="primary"
            type="submit"
          >
            Verify
          </Button>
        </DialogActions>
        {/* </Box> */}
      </Dialog>
    </div>
  );
};
export default DialogBox;
