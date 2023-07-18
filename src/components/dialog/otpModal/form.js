import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Close } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  InputAdornment,
  Stack,
  TextField,
  alpha,
} from "@mui/material";
import * as React from "react";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import OTPInput from "react-otp-input";

export const DialogForm = ({ formik }) => {
  const OTPSelect = [
    // {
    //   label: "Choose Option for Get OTP",
    //   value: 0,
    // },
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
      <Box sx={{ my: 2 }}>
        <OTPInput
          name={`otp`}
          inputStyle={{
            width: "50px",
            height: "56px",
            borderRadius: "10px",
          }}
          value={formik?.values?.otp}
          onChange={formik.handleChange}
          error={formik.touched.otp && formik.errors.otp}
          helperText={formik.touched.otp && formik.errors.otp}
          numInputs={6}
          renderSeparator={<span style={{ marginRight: "5px" }}></span>}
          renderInput={(props) => <input {...props} />}
        />
      </Box>
    </React.Fragment>
  );
};
