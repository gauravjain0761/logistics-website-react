import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const ViewJobDetail = () => {
  return (
    <React.Fragment>
      <Box mt={10}>
        <Container>
          <Box my={4}>
            <Card>
              <CardContent>
                <Typography textAlign="center" variant="h4" my={2}>
                  Job Detail
                </Typography>
                <Box>
                  <Grid container justifyContent="center">
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={2.5}>
                          <Typography fontWeight={500}>Job Title :</Typography>
                        </Grid>
                        <Grid item md={9.5}>
                          <Typography>Title</Typography>
                        </Grid>
                        <Grid item md={2.5}>
                          <Typography fontWeight={500}>Size :</Typography>
                        </Grid>
                        <Grid item md={9.5}>
                          <Typography>Size</Typography>
                        </Grid>
                        <Grid item md={2.5}>
                          <Typography fontWeight={500}>
                            Vehicle Requirement :
                          </Typography>
                        </Grid>
                        <Grid item md={9.5}>
                          <Typography>Truck</Typography>
                        </Grid>
                        <Grid item md={12} mt={2}>
                          <Typography fontWeight={500}>Pick-Up </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <TableContainer>
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Address</TableCell>
                                  <TableCell align="center">Date</TableCell>
                                  <TableCell align="center">Time</TableCell>
                                  <TableCell align="center">Quantity</TableCell>
                                  <TableCell align="center">Image</TableCell>
                                  <TableCell align="center">Material</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <Typography>
                                      Xyz,Address ,city,12122
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>06/02/2000</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>10:00 A.M.</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>6</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Box>
                                      <Box
                                        component="img"
                                        src="/serviceblog.jpg"
                                        width={80}
                                      />
                                    </Box>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>Material</Typography>
                                  </TableCell>
                                </TableRow>
                                <TableRow
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <Typography>
                                      Xyz,Address ,city,12122
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>06/02/2000</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>10:00 A.M.</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>6</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Box>
                                      <Box
                                        component="img"
                                        src="/serviceblog.jpg"
                                        width={80}
                                      />
                                    </Box>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>Material</Typography>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        <Grid item md={12} mt={2}>
                          <Typography fontWeight={500}>Delivery </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <TableContainer>
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell>Address</TableCell>
                                  <TableCell align="center">Date</TableCell>
                                  <TableCell align="center">Time</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <Typography>
                                      Xyz,Address ,city,12122
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>06/02/2000</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>10:00 A.M.</Typography>
                                  </TableCell>
                                </TableRow>
                                <TableRow
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    <Typography>
                                      Xyz,Address ,city,12122
                                    </Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>06/02/2000</Typography>
                                  </TableCell>
                                  <TableCell align="center">
                                    <Typography>10:00 A.M.</Typography>
                                  </TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>{" "}
    </React.Fragment>
  );
};

export default ViewJobDetail;
