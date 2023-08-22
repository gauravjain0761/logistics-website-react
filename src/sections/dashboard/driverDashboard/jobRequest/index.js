import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CountUp from "react-countup";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import ApplyJobModal from "@/module/dashboard/driverCard/applyJob";
import axiosInstance from "@/utils/axios";
import SkeletonLoader from "@/components/skeleton";
import { JobSekelton } from "@/components/not-found";
import { useFormik } from "formik";
import { useAuthContext } from "@/auth/useAuthContext";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "@/redux/store";
import { getJobAlert } from "@/redux/slices/job/driver";
import { includes, some } from "lodash";
const DashboardJobRequest = () => {
  const dispatch = useDispatch();
  const {
    jobAlert: { pageCount, data },
  } = useSelector((state) => state.driverJob);

  const router = useRouter();
  const { user } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  // const [pageCount, setPageCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});

  const [applyOpen, setApplyopen] = React.useState(false);
  const [startOpen, setStartopen] = React.useState(false);
  const handleStartOpen = (id) => setStartopen(id);
  const handleStartClose = () => setStartopen(false);
  const handleOpen = (id) => setApplyopen(id);
  const handleClose = () => setApplyopen(false);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const [loader, setLoader] = React.useState(false);
  // const [data, setData] = React.useState([]);

  React.useEffect(() => {
    dispatch(getJobAlert({ page: page, pageSize: pageSize, userId: user?.id }));
  }, [page]);

  const getData = async () => {
    // setLoader(true);
    // await axiosInstance
    //   .get("api/auth/jobs/list", {
    //     params: { status: "pending", page: Number(page), pageSize: pageSize },
    //   })
    //   .then((response) => {
    //     setLoader(false);
    //     if (response?.status === 200) {
    //       setData(response?.data?.view_data?.data);
    //       setPageCount(response?.data?.view_data?.meta?.last_page);
    //     }
    //   })
    //   .catch((error) => {
    //     setLoader(false);
    //     console.log("DriverJob", error);
    //   });
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  const formik = useFormik({
    initialValues: {
      id: "",
      driver_id: "",
    },
  });

  const startJobApi = async () => {
    await axiosInstance
      .post("api/auth/jobs/start-job", formik.values)
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
          getData();
          handleClose(true);
        }
      })
      .catch((error) => {
        const { response } = error;

        enqueueSnackbar(response.data.error, {
          variant: "error",
        });
        console.log(error);
      });
  };
  useEffect(() => {
    formik.setFieldValue("id", startOpen);
  }, [startOpen]);

  useEffect(() => {
    formik.setFieldValue("driver_id", user?.id);
  }, [user, user?.id]);

  return (
    <React.Fragment>
      <Box py={3}>
        <Container>
          <Box py={5}>
            <DashboardCard jobalert={data?.length} />
          </Box>
          <Box py={2}>
            {loader ? (
              <SkeletonLoader />
            ) : (
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      fontSize="1.75rem"
                      fontWeight={500}
                      color="primary"
                    >
                      Jobs For You
                    </Typography>

                    <Box
                      borderRadius="50%"
                      border="1px solid"
                      borderColor={(theme) => theme.palette.primary.main}
                      color={(theme) => theme.palette.primary.main}
                      py={0.6}
                      px={1.8}
                    >
                      <Typography
                        fontSize="1.3rem"
                        fontWeight={500}
                        color="primary"
                      >
                        <CountUp
                          start={0}
                          duration={1}
                          end={data?.length}
                          enableScrollSpy={true}
                          scrollSpyDelay={200}
                        />
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            )}
          </Box>

          <Box py={2} sx={{ background: " " }}>
            <Grid container rowSpacing={0}>
              {data && data?.length > 0 ? (
                data.map((item, index) => {
                  let productDetail =
                    item?.items && item?.items?.length > 0 && item?.items[0];
                  return (
                    <Grid item md={12} key={index}>
                      <Card
                        sx={{
                          my: 2,
                          ":hover": {
                            borderColor: "#ff7534",
                            transition: " all 0.3s ease-in-out",
                          },
                        }}
                        variant="outlined"
                      >
                        <CardContent>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Stack direction="row" mb={1} spacing={0.5}>
                              <Box>
                                <Typography variant="subtitle1">
                                  Job Title :{" "}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography color="primary" variant="subtitle1">
                                  {" "}
                                  {item?.name}
                                </Typography>
                              </Box>
                            </Stack>
                          </Stack>
                          <Divider />
                          <Grid
                            container
                            mt={0.5}
                            spacing={2}
                            alignItems="center"
                          >
                            <Grid item md={2}>
                              <Box
                                component="img"
                                src={
                                  item?.image
                                    ? `${item?.base_url}${item?.image}`
                                    : "/assets/images/dashboard/portfolio.jpeg"
                                }
                                sx={{
                                  width: "100px",
                                  borderRadius: "50%",
                                  border: "2px solid #ff7534",
                                }}
                              />
                            </Grid>
                            <Grid item md={4}>
                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Pick-Up Date
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item md={1}>
                                  <Typography variant="subtitle1">:</Typography>
                                </Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Typography
                                      color="primary"
                                      variant="subtitle1"
                                    >
                                      {productDetail?.product?.pickup_date ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Pick-Up Time
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item md={1}>
                                  <Typography variant="subtitle1">:</Typography>
                                </Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Typography
                                      color="primary"
                                      variant="subtitle1"
                                    >
                                      {productDetail?.product?.pickup_time ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>

                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Material
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item md={1}>
                                  <Typography variant="subtitle1">:</Typography>
                                </Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Typography
                                      color="primary"
                                      variant="subtitle1"
                                    >
                                      {productDetail?.product?.material ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={4}>
                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Drop-Out Date
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item md={1}>
                                  <Typography variant="subtitle1">:</Typography>
                                </Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Typography
                                      color="primary"
                                      variant="subtitle1"
                                    >
                                      {productDetail?.product?.drop_date ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Drop-Out Time
                                    </Typography>
                                  </Box>
                                </Grid>
                                <Grid item md={1}>
                                  <Typography variant="subtitle1">:</Typography>
                                </Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Typography
                                      color="primary"
                                      variant="subtitle1"
                                    >
                                      {productDetail?.product?.pickup_time ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={2}>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={1}
                              >
                                <Stack spacing={1}>
                                  <Box>
                                    <Button
                                      sx={{ fontWeight: 500 }}
                                      fullWidth
                                      variant="outlined"
                                      startIcon={
                                        <Iconify icon="carbon:view-filled" />
                                      }
                                      onClick={() =>
                                        router.push(
                                          `/dashboard/driver/view_job/${item?.id}`
                                        )
                                      }
                                    >
                                      View Job
                                    </Button>
                                  </Box>
                                  <Box>
                                    <Button
                                      color={
                                        !some(item?.job_requests, {
                                          job_id: item?.id,
                                        }) &&
                                        !some(item?.job_requests, {
                                          driver_id: user?.id,
                                        })
                                          ? "dark"
                                          : "warning"
                                      }
                                      fullWidth
                                      variant="outlined"
                                      startIcon={
                                        <Iconify
                                          sx={{
                                            "& svg, g": {
                                              stroke: (theme) =>
                                                !some(item?.job_requests, {
                                                  job_id: item?.id,
                                                }) &&
                                                !some(item?.job_requests, {
                                                  driver_id: user?.id,
                                                })
                                                  ? theme?.palette.dark.main
                                                  : theme?.palette.warning.main,
                                            },
                                          }}
                                          icon="icon-park:check-correct"
                                        />
                                      }
                                      onClick={() => {
                                        !some(item?.job_requests, {
                                          job_id: item?.id,
                                        }) &&
                                          !some(item?.job_requests, {
                                            driver_id: user?.id,
                                          }) &&
                                          handleOpen(item?.id);
                                      }}
                                      sx={{
                                        fontWeight: 500,
                                      }}
                                    >
                                      {!some(item?.job_requests, {
                                        job_id: item?.id,
                                      }) &&
                                      !some(item?.job_requests, {
                                        driver_id: user?.id,
                                      })
                                        ? "Apply Job"
                                        : "Pending"}
                                    </Button>
                                    {/* )} */}
                                  </Box>
                                </Stack>
                              </Stack>
                              <Stack
                                mt={1}
                                position="absolute"
                                right={33}
                              ></Stack>
                            </Grid>
                          </Grid>
                          <Box pt={2}>
                            <Typography fontSize={14}>
                              {" "}
                              {item?.description}
                            </Typography>
                          </Box>

                          <Divider sx={{ my: 2 }} />
                          <Box>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Typography variant="subtitle2">
                                Job Budget: $500
                              </Typography>
                              <Typography variant="subtitle2">
                                Customer Spend: $30K+
                              </Typography>
                            </Stack>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <>{!loader && <JobSekelton title="No active Jobs..." />}</>
              )}
            </Grid>
            <Box>
              <Stack alignItems="center" justifyContent="center">
                <Pagination
                  count={Number(pageCount)}
                  color="primary"
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: () => {
                          return (
                            <Stack
                              direction="row"
                              spacing={0.5}
                              alignItems="center"
                            >
                              <NavigateBeforeIcon />
                            </Stack>
                          );
                        },
                        next: () => {
                          return (
                            <Stack
                              direction="row"
                              spacing={0.5}
                              alignItems="center"
                            >
                              <NavigateNextIcon />
                            </Stack>
                          );
                        },
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </Box>
          </Box>
        </Container>

        <Box>
          <ApplyJobModal
            handleClose={handleClose}
            job_id={applyOpen}
            applyOpen={applyOpen}
            getData={getData}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DashboardJobRequest;
