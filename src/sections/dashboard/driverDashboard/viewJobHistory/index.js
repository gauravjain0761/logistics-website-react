import Iconify from "@/components/iconify/Iconify";
import ApplyJobModal from "@/module/dashboard/driverCard/applyJob";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  List,
  Rating,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ViewJobHistory = () => {
  const router = useRouter();
  const { id } = router.query;
  const [jobDetail, setJobDetail] = useState([]);
  const [ratings, setRatings] = useState([]);

  // Rating list api
  const getJobDetail = async () => {
    // setLoader(true);
    await axiosInstance
      .get(`api/auth/master/jobs/view/${id}`)
      .then((response) => {
        if (response?.status === 200) {
          setJobDetail(response?.data?.view_data);
          setRatings(response?.data?.view_data?.ratings)
        }
      })
      .catch((error) => {
        console.log("RatignList", error);
      });
  };
  // End
  React.useEffect(() => {
    if (id) {
      getJobDetail();
    }
  }, [id]);



  console.log("jobDetail", jobDetail, ratings);
  return (
    <React.Fragment>
      <Box mt={10}>
        <Container>
          <Box my={4}>
            <Button
              variant="outlined"
              sx={{ my: 2 }}
              onClick={() => router.push("/dashboard/driver/job_history")}
            >
              <Iconify icon="ion:play-back" sx={{ mr: "7px" }} width={14} />
              Back
            </Button>
            <Card sx={{ position: "relative" }}>
              <CardContent>
                <Typography
                  textAlign="center"
                  variant="h3"
                  color={(theme) => theme.palette.grey[700]}
                  my={2}
                >
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
                          <Typography>{jobDetail?.name}</Typography>
                        </Grid>
                        <Grid item md={2.5}>
                          <Typography fontWeight={500}>
                            Vehicle Requirement :
                          </Typography>
                        </Grid>
                        <Grid item md={9.5}>
                          <Typography>{jobDetail?.vehicle}</Typography>
                        </Grid>
                        <Grid item md={12} mt={2}>
                          <Typography fontWeight={500}>
                            Pick Up Address 
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <TableContainer
                            sx={{
                              borderRadius: "10px",
                              border: "1px solid",
                              borderColor: (theme) =>
                                theme.palette.primary.main,
                            }}
                          >
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Pickup Date
                                  </TableCell>
                                  <TableCell align="center">
                                    Pickup Time
                                  </TableCell>
                                  <TableCell align="center">
                                    Drop Date
                                  </TableCell>
                                  <TableCell align="center">
                                    Drop Time
                                  </TableCell>
                                  <TableCell align="center">L*W*H</TableCell>
                                  <TableCell align="center">Quantity</TableCell>
                                  <TableCell align="center">Image</TableCell>
                                  <TableCell align="center">Material</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {jobDetail?.items &&
                                  jobDetail?.items?.length > 0 &&
                                  jobDetail?.items.map((item, index) => {
                                    return (
                                      <TableRow
                                        key={`jobDetail${index}`}
                                        sx={{
                                          "&:last-child td, &:last-child th": {
                                            border: 0,
                                          },
                                        }}
                                      >
                                        <TableCell component="th" scope="row">
                                          <Typography>
                                            {item?.product?.pickup_date}
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>
                                            {item?.product?.pickup_time}
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>
                                            {item?.product?.drop_date}
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>
                                            {item?.product?.drop_time}
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>{`${item?.product?.length} * ${item?.product?.width} * ${item?.product?.height}`}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>
                                            {item?.product?.quantity}
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Box>
                                            <Box
                                              component="img"
                                              m="auto"
                                              src={`${item?.product?.base_url}${item?.product?.image}`}
                                              width={80}
                                            />
                                          </Box>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography>
                                            {item?.product?.material}
                                          </Typography>
                                        </TableCell>
                                      </TableRow>
                                    );
                                  })}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </Grid>
                        {/* <Grid item md={12} mt={2}>
                          <Typography fontWeight={500}>
                            Delivery Address :-
                          </Typography>
                        </Grid>
                        <Grid item md={12}>
                          <TableContainer
                            sx={{
                              borderRadius: "10px",
                              border: "1px solid",
                              borderColor: (theme) =>
                                theme.palette.primary.main,
                            }}
                          >
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
                                        m="auto"
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
                                        m="auto"
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
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Box my={4}>
                  <Divider />
                  <Box my={3}>
                    <Typography textAlign="center" variant="h4">
                      Rating & Reviews
                    </Typography>
                  </Box>

                  {ratings &&
                    ratings?.length > 0 &&
                    ratings.map((item, index) => {
                      return (
                        <React.Fragment key={`jobDetail-${index}`}>
                          <Stack spacing={3} direction="row" mt={3}>
                            <Box
                              component="img"
                              src={`${item?.base_url}${item?.image}`}
                              width={60}
                              height={60}
                            />
                            <Stack direction="column" spacing={1}>
                             
                              <Box>
                                <Rating
                                  value={item?.rating}
                                  readOnly
                                  size="small"
                                />
                              </Box>
                              <Box>
                                <Typography fontSize={14}>
                                  {item?.review}
                                </Typography>
                              </Box>
                            </Stack>
                          </Stack>
                          <Box sx={{ my: 3 }}>
                            <Divider />
                          </Box>
                        </React.Fragment>
                      );
                    })}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>{" "}
    </React.Fragment>
  );
};

export default ViewJobHistory;
