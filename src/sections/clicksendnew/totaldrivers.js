import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const TotalDrivers = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "#fff",
        }}
      >
        <Container>
          <Grid container spacing={0} textAlign="center" py={3}>
            <Grid item lg={2}></Grid>
            <Grid item lg={2}>
              <Typography variant="h3">1211 +</Typography>
              <Typography>Total User</Typography>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h3">5999 +</Typography>
              <Typography>Total Drivers</Typography>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h3">25987 +</Typography>
              <Typography>Total Jobs</Typography>
            </Grid>
            <Grid item lg={2}>
              <Typography variant="h3">1211 +</Typography>
              <Typography>Total User</Typography>
            </Grid>
            <Grid item lg={2}></Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalDrivers;
