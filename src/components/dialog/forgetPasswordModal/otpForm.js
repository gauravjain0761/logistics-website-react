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

export const OTPForm = ({ formik }) => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }} />
      <Box sx={{ my: 2 }}>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <OTPInput
            name={`otp`}
            containerStyle={{ justifyContent: "center" }}
            inputStyle={{
              width: "50px",
              height: "56px",
              borderRadius: "10px",
            }}
            value={formik?.values?.otp}
            onChange={(e) => formik.setFieldValue("otp", e)}
            error={formik.touched.otp && formik.errors.otp}
            helperText={formik.touched.otp && formik.errors.otp}
            numInputs={4}
            renderSeparator={<span style={{ marginRight: "5px" }}></span>}
            renderInput={(props) => <input {...props} />}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
