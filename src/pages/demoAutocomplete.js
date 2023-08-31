import { GoogleAutocomplete, TextBox } from "@/components/form";
import { Close, Grade } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useFormik } from "formik";
import React from "react";

const DemoAutocomplete = () => {
  const formik = useFormik({
    initialValues: {
      address: "",
      latitude: "",
      longitude: "",
    },
    onSubmit: async (values) => {
      console.log("getGeoLocation", values);
    },
  });

  return (
    <>
      <Grid container>
        <Grid item md={6}>
          <GoogleAutocomplete
            fullWidth
            value={formik.values.address}
            onSelect={(address, lat, long) => {
              formik.setFieldValue("address", address);
              formik.setFieldValue("latitude", lat);
              formik.setFieldValue("longitude", long);
            }}
            onChange={(e) => {
              formik.setFieldValue("address", e);
            }}
            name="address"
            endIcon={
              formik.values.address && (
                <IconButton
                  size="small"
                  inputEndAdornmentPosition="end"
                  onClick={() => {
                    formik.setFieldValue("address", "");
                    formik.setFieldValue("latitude", "");
                    formik.setFieldValue("longitude", "");
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
              )
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DemoAutocomplete;
