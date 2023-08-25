import { SelectBox, TextBox } from "@/components/form";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const VehicleSelect = [
  {
    label: "Choose Vehicle",
    value: 0,
  },
  {
    label: "Bike",
    value: "Bike",
  },
  {
    label: "Van",
    value: "Van",
  },
  {
    label: "Truck",
    value: "Truck",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const StepThree = ({ formik }) => {
  return (
    <>
      <Box mb={2}>
        <Typography fontSize={16} fontWeight={500}>
          Vehicle Requirement
        </Typography>
      </Box>

      <Grid container>
        <Grid item md={12}>
          <SelectBox
            fullWidth
            label="Vehicle"
            value={formik.values?.vehicle}
            name={`vehicle`}
            options={VehicleSelect}
            onChange={formik.handleChange}
            helperText={formik.touched.vehicle && formik.errors.vehicle}
            size="small"
            vehicle="small"
          />
        </Grid>
        <Grid item md={12}>
          <Box>
            <TextBox
              fullWidth
              placeholder="Important Note:"
              name={`description`}
              value={formik?.values?.description}
              onChange={formik.handleChange}
              size={"small"}
              multiline={true}
              rows={7}
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StepThree;
