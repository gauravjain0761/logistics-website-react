import Map from "@/module/map";
import { Box, Container, Grid } from "@mui/material";
import React from "react";

const StartJob = () => {
  return (
    <React.Fragment>
      <Box mt={8}>
        <Container><Grid container>
            <Grid item sm={12} md={6}>
                
            </Grid>
            <Grid item sm={12} md={6}>
                <Map/>
            </Grid>
        </Grid></Container>
      </Box>
    </React.Fragment>
  );
};

export default StartJob;
