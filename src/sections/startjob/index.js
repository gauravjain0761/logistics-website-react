import Map from "@/module/map";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const StartJob = ({ formik }) => {
  return (
    <React.Fragment>
      <Box mt={12}>
        <Container>
          <Grid container spacing={6}>
            <Grid item md={12}>
              <Grid
                container
                spacing={2}
                justifyContent="space-around"
              >
                <Grid item sm={12} md={4}>
                  <Card
                    sx={{
                      border: "1px solid ",
                      borderColor: (theme) => theme.palette.primary.main,
                    }}
                  >
                    <CardContent>
                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">
                              Pick-Up Date
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              09/06/2023
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">
                              Pick-Up Time
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              10:10 AM
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">
                              Material
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              Plastic Box
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={4}>
                  <Card
                    sx={{
                      border: "1px solid ",
                      borderColor: (theme) => theme.palette.primary.main,
                    }}
                  >
                    <CardContent>
                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">
                              Drop-Out Date
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              09/06/2025.5
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">
                              Drop-Out Time
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              10:10 AM
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography variant="subtitle1">Size</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Typography variant="subtitle1">:</Typography>
                        </Grid>
                        <Grid item md={5.5}>
                          <Box>
                            <Typography color="primary" variant="subtitle1">
                              5 x 2 x 3 inch
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={12} md={12}>
              <Map />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default StartJob;
