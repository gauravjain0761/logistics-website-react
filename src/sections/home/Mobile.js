import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Mobile = () => {
  return (
    <React.Fragment>
      <Box py={8}>
        <Container>
          <Grid container spacing={0}>
            <Grid item lg={6}>
              <Box>
                <Box component={"img"} src={"./mobile.png"} />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Button variant="contained">For Driver</Button>
                  </Box>
                  <Box py={5}>
                    <Box>
                      <Typography variant="h3">Join Our Fleet ____</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        The personal account where user can manage, track and
                        order parcels, check order details and history
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Button variant="contained">Sign Up as a Driver</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Mobile;
