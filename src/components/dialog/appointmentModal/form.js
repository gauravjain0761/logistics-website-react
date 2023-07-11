import { TextBox } from "@/components/form";
import { Box } from "@mui/material";
import * as React from "react";

export const DialogForm = ({ formik }) => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }} />

      <TextBox
        fullWidth
        label="Email"
        name={`email`}
        value={formik?.values?.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextBox
        fullWidth
        label="Mobile No."
        // required
        name={`mobile`}
        value={formik?.values?.mobile}
        onChange={formik.handleChange}
        error={formik.touched.mobile && formik.errors.mobile}
        helperText={formik.touched.mobile && formik.errors.mobile}
      />
    </React.Fragment>
  );
};
