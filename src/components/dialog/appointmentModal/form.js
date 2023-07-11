import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Box } from "@mui/material";
import * as React from "react";

export const DialogForm = ({ formik }) => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }} />

      <TextBox
        size="small"
        startIcon={<Iconify icon="material-symbols:mail" color={"#ff7534"} />}
        fullWidth
        start
        // label="Email"
        name={`email`}
        placeholder="Enter your Registered Email"
        value={formik?.values?.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextBox
        size="small"
        fullWidth
        startIcon={<Iconify icon="ic:round-call" color="#ff7534" />}
        // label="Mobile No."
        // required
        name={`mobile`}
        placeholder="Enter your Registered Contact No"
        value={formik?.values?.mobile}
        onChange={formik.handleChange}
        error={formik.touched.mobile && formik.errors.mobile}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />
    </React.Fragment>
  );
};
