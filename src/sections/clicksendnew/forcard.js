import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ForCard = () => {
  return (
    <React.Fragment>
      <Box py={4}>
        <Container>
          <Grid container>
            <Grid item lg={7}>
              <Typography variant="h2">Picture</Typography>
            </Grid>
            <Grid item lg={5}>
              <Card variant="outlined" sx={{ my: 3 }}>
                <CardContent>
                  <Stack spacing={1}>
                    <Typography color="primary">For Driver</Typography>
                    <Typography variant="h5">Join Our Fleet</Typography>
                    <Typography color="grey">
                      The personal account where user can manage,track and order
                      parcels,check order details and history
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#000",
                          ":hover": {
                            backgroundColor: "#000",
                          },
                        }}
                      >
                        Signup as a Driver
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ my: 3 }}>
                <CardContent>
                  <Stack spacing={1}>
                    <Typography color="primary">For Clients</Typography>
                    <Typography variant="h5">Shipment Manager</Typography>
                    <Typography color="grey">
                      The personal account where user can manage,track and order
                      parcels,check order details and history
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#000",
                          ":hover": {
                            backgroundColor: "#000",
                          },
                        }}
                      >
                        Login to ship Manager
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ my: 3 }}>
                <CardContent>
                  <Stack spacing={1}>
                    <Typography color="primary">For Clients</Typography>
                    <Typography variant="h5">Mobile Application</Typography>
                    <Typography color="grey">
                      The personal account where user can manage,track and order
                      parcels,check order details and history
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#000",
                          ":hover": {
                            backgroundColor: "#000",
                          },
                        }}
                      >
                        Login to Driver
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default ForCard;
