import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Close } from "@mui/icons-material";
import { Box } from "@mui/material";
import * as React from "react";

export const DialogForm = ({ formik }) => {
  const OTPSelect = [
    {
      label: "Choose Option for Get OTP",
      value: 0,
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Contact No.",
      value: "phone",
    },
  ];
  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }} />

      <SelectBox
        size="small"
        startIcon={<Iconify icon="material-symbols:mail" color={"#ff7534"} />}
        fullWidth
        start
        options={OTPSelect}
        placeholder="Choose Option for Get OTP"
        name={`otp`}
        value={formik?.values?.otp}
        onChange={formik.handleChange}
        error={formik.touched.otp && formik.errors.otp}
        helperText={formik.touched.otp && formik.errors.otp}
      />

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
