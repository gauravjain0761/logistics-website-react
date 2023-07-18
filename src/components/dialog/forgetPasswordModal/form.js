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
      <Box sx={{ mt: 4 }} />

      <Stack direction="row" mb={1.3}>
        <Box
          sx={{
            ml: 0,
            background: (theme) => theme.palette.grey[100],
            border: "1px solid",
            borderColor: (theme) => alpha(theme.palette.grey[500], 0.32),
            padding: ".375rem .75rem",
            borderRadius: ".25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowDropDownCircleIcon color="primary" fontSize="small" />
        </Box>
        <Autocomplete
          sx={{ mb: 0 }}
          size="small"
          fullWidth
          options={OTPSelect}
          name={`type`}
          value={formik?.values?.type}
          onChange={(e, newValue) => {
            formik.setFieldValue("type", newValue);
          }}
          error={formik.touched.type && formik.errors.type}
          helperText={formik.touched.type && formik.errors.type}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Choose Option for Get OTP"
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
        />
      </Stack>
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
