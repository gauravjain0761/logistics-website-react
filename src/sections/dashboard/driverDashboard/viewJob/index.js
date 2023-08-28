import Iconify from "@/components/iconify/Iconify";
import SkeletonLoader from "@/components/skeleton";
import ApplyJobModal from "@/module/dashboard/driverCard/applyJob";
import MapModal from "@/module/dashboard/driverCard/mapModel";
import axiosInstance from "@/utils/axios";
import { Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
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
import JobDialog from "./dialog";

const ViewJobDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [addressOpen, setAddressopen] = React.useState(false);

  const getData = async () => {
    setLoader(true);
    await axiosInstance
      .get(`api/auth/master/jobs/view/${id}`)
      .then((response) => {
        setLoader(false);
        if (response?.status === 200) {
          setData(response?.data?.view_data);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("DriverJob", error);
      });
  };

  React.useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

 
  return (
    <React.Fragment>
      <Box mt={10} pb={12}>
        <Container>
          {loader ? (
            <SkeletonLoader />
          ) : (
            <Box my={4}>
              <Button
                variant="outlined"
                sx={{ my: 2 }}
                onClick={() => router.push("/dashboard/driver/job_request")}
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
                            <Typography fontWeight={500}>Job Name :</Typography>
                          </Grid>
                          <Grid item md={9.5}>
                            <Typography>{data?.name}</Typography>
                          </Grid>
                          <Grid item md={2.5}>
                            <Typography fontWeight={500}>
                              Vehicle Name :
                            </Typography>
                          </Grid>
                          <Grid item md={9.5}>
                            <Typography>{data?.vehicle}</Typography>
                          </Grid>
                          <Grid item md={12} mt={2}>
                            <Typography fontWeight={500}>
                              Pick Up Address :-
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
                                    <TableCell align="center">
                                      Pickup Data
                                    </TableCell>
                                    <TableCell align="center">
                                      Pickup Time
                                    </TableCell>
                                    <TableCell align="center">
                                      Drop Data
                                    </TableCell>
                                    <TableCell align="center">
                                      Drop Time
                                    </TableCell>
                                    <TableCell align="center">Image</TableCell>
                                    <TableCell align="center">
                                      Material
                                    </TableCell>
                                    <TableCell align="center">
                                      Address
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {data?.items &&
                                    data?.items?.length > 0 &&
                                    data?.items.map((item, index) => {
                                      return (
                                        <TableRow
                                          key={`Pickup-${index}`}
                                          sx={{
                                            "&:last-child td, &:last-child th":
                                              {
                                                border: 0,
                                              },
                                          }}
                                        >
                                          <TableCell component="th" scope="row">
                                            <Typography>
                                              {item?.product?.job_id}
                                            </Typography>
                                          </TableCell>
                                          <TableCell align="center">
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
                                          <TableCell align="center">
                                            <IconButton
                                              onClick={() =>
                                                setAddressopen(item)
                                              }
                                            >
                                              <Visibility />
                                            </IconButton>
                                          </TableCell>
                                        </TableRow>
                                      );
                                    })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                
                </CardContent>
                <Box sx={{ position: "absolute", right: "30px", top: "150px" }}>
                  <Stack spacing={1}>
                    <MapModal />
                    <ApplyJobModal />
                  </Stack>
                </Box>
              </Card>
            </Box>
          )}

          <JobDialog addressOpen={addressOpen} onClose={setAddressopen} />
        </Container>
      </Box>{" "}
    </React.Fragment>
  );
};

export default ViewJobDetail;
