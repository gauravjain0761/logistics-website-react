import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";

const Shipment = () => {
  return (
    <React.Fragment>
      <StyledBox py={8}>
        <Container>
          <Grid container spacing={0}>
          <Grid item lg={1} md={0}>

          </Grid>
            <Grid item lg={6} >
              <Box>
                <Box>
                  <Button variant="contained">For Clients</Button>
                </Box>
                <Box py={5}>
                  <Box>
                    <Typography variant="h4">ShipMent Manager</Typography>
                  </Box>
                  <Box>
                    <Typography >
                      The personal account where user can manage, track and
                      order parcels, check order details and history
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button variant="contained">Login to Ship Manager</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} md={6} justifyContent="center" alignContent="center">
              <Box>
                <Box margin="auto" component="img" src="/shipment.jpg" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </React.Fragment>
  );
};

export default Shipment;
