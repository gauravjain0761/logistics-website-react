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
} from "@mui/material";
import { DialogHeader } from "./header";
import { DialogForm } from "./form";
import { useFormik } from "formik";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ModalBox = ({ keepMounted, onClose, open, title }) => {
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

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        components="form"
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box component="form" onSubmit={formik.handleSubmit}>
          <DialogHeader onClose={onClose} title={title} />
          <DialogContent sx={{ mt: 1, mb: 0 }}>
            <DialogForm formik={formik} />
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button variant="outlined" color="primary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};
export default ModalBox;
