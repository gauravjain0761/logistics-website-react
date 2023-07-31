import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import Map from "@/module/map";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const StartJob = ({ formik }) => {
  return (
    <React.Fragment>
      <Box mt={8}>
        <Container>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Box p={3}>
                <TextBox
                  fullWidth
                  placeholder={"Enter Your Location"}
                  startIcon={<Iconify icon="mdi:location" color="#ff7534" />}
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  helperText={formik?.errors?.email}
                />
                <TextBox
                  fullWidth
                  placeholder={"Enter Your Destination"}
                  startIcon={<Iconify icon="mdi:location" color="#ff7534" />}
                  size="small"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  helperText={formik?.errors?.email}
                />
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Map />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default StartJob;
