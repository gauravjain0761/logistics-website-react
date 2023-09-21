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
import { getJobAlert, setJobAlertPage } from "@/redux/slices/job/driver";
import { includes, some } from "lodash";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
const DashboardJobRequest = () => {
  const dispatch = useDispatch();
  const {
    jobAlert: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.driverJob);

  const router = useRouter();
  const { user } = useAuthContext();
  const driverId = user?.id;

  const { enqueueSnackbar } = useSnackbar();

  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  // const [pageCount, setPageCount] = React.useState(0);
  const [setPage] = React.useState(1);
  // const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});

  const [applyOpen, setApplyopen] = React.useState(false);
  const [startOpen, setStartopen] = React.useState(false);
  const handleStartOpen = (id) => setStartopen(id);
  const handleStartClose = () => setStartopen(false);
  const handleOpen = (id) => setApplyopen(id);
  const handleClose = () => setApplyopen(false);

  const [loader, setLoader] = React.useState(false);
  const handlePageChange = (event, value) => {
    dispatch(setJobAlertPage(value));
  };
  // const [data, setData] = React.useState([]);

  React.useEffect(() => {
    dispatch(
      getJobAlert({ page: page, pageSize: pageSize, user_id: user?.id })
    );
  }, [page]);

  console.log("pagepage", page);

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
          dispatch(
            getJobAlert({ page: page, pageSize: pageSize, user_id: user?.id })
          );
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
      <Box py={3} pb={12}>
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
                          borderWidth: "2px",
                          ":hover": {
                            borderColor: "#ff7534",
                            transition: " all 0.3s ease-in-out",
                          },
                        }}
                        variant="outlined"
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                          px={2}
                          py={1.4}
                        >
                          <Box sx={{ width: "95%" }}>
                            <Typography
                              color="common.black"
                              fontSize={17}
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              fontWeight={500}
                            >
                              {item?.description}
                            </Typography>
                          </Box>
                        </Stack>

                        <Divider />
                        <CardContent>
                          <Grid container spacing={2} alignItems="start">
                            <Grid item md={3}>
                              <Box>
                                <Typography fontSize={28} fontWeight={500}>
                                  {item.name}
                                </Typography>
                              </Box>
                              <Stack direction="row" spacing={2} mb={2}>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={0.6}
                                >
                                  <Stack alignItems="center">
                                    <Iconify
                                      icon="bx:layer"
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      width={22}
                                    />
                                  </Stack>
                                  <Box>
                                    <Typography fontSize={12} color="grey">
                                      {productDetail?.product?.material}
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={0.6}
                                >
                                  <Stack alignItems="center">
                                    <Iconify
                                      icon="gg:expand"
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      width={22}
                                    />
                                  </Stack>
                                  <Box>
                                    <Typography fontSize={12} color="grey">
                                      {`${
                                        productDetail?.product?.length || "N/A"
                                      }*${
                                        productDetail?.product?.width || "N/A"
                                      }*${
                                        productDetail?.product?.height || "N/A"
                                      }`}
                                    </Typography>
                                  </Box>
                                </Stack>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={0.6}
                                >
                                  <Stack alignItems="center">
                                    <Iconify
                                      icon="uil:weight"
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      width={22}
                                    />
                                  </Stack>
                                  <Box>
                                    <Typography fontSize={12} color="grey">
                                      {productDetail?.product?.quantity} Qty
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                {item.items.map((elem, index) => {
                                  if (index > 2) {
                                    return "";
                                  }
                                  return (
                                    <React.Fragment key={index}>
                                      <Box
                                        component="img"
                                        alt={elem.product.image}
                                        src={`${elem.product.base_url}${elem.product.image}`}
                                        sx={{
                                          width: "83px",
                                          height: "59px",
                                          border: "1px solid lightgrey",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </React.Fragment>
                                  );
                                })}
                              </Stack>
                            </Grid>
                            <Grid item md={3}>
                              <Box mb={4}>
                                <Box>
                                  <Typography fontSize={13} fontWeight={600}>
                                    Pick up Date
                                  </Typography>
                                </Box>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  alignItems="center"
                                >
                                  <Box
                                    sx={{
                                      backgroundColor: "#FEE6BB",
                                      width: "28px",
                                      height: "28px",
                                      borderRadius: "50%",
                                      p: "5px",
                                    }}
                                  >
                                    <Iconify
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      icon="majesticons:calendar-line"
                                    />
                                  </Box>
                                  <Box>
                                    <Typography
                                      color="grey"
                                      fontWeight={400}
                                      fontSize={13}
                                    >
                                      {productDetail?.product?.pickup_date ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Box>

                              <Box>
                                <Typography fontSize={13} fontWeight={600}>
                                  Pick up Time
                                </Typography>
                              </Box>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    backgroundColor: "#FEE6BB",
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    p: "5px",
                                  }}
                                >
                                  <Iconify
                                    color={(theme) =>
                                      theme.palette.primary.main
                                    }
                                    icon="majesticons:calendar-line"
                                  />
                                </Box>
                                <Box>
                                  <Typography
                                    color="grey"
                                    fontWeight={400}
                                    fontSize={13}
                                  >
                                    {productDetail?.product?.pickup_time ||
                                      "N/A"}
                                  </Typography>
                                </Box>
                              </Stack>
                            </Grid>
                            <Grid item md={3}>
                              <Box mb={4}>
                                <Box>
                                  <Typography fontSize={13} fontWeight={600}>
                                    Drop out Date
                                  </Typography>
                                </Box>
                                <Stack
                                  direction="row"
                                  spacing={1}
                                  alignItems="center"
                                >
                                  <Box
                                    sx={{
                                      backgroundColor: "#FEE6BB",
                                      width: "28px",
                                      height: "28px",
                                      borderRadius: "50%",
                                      p: "5px",
                                    }}
                                  >
                                    <Iconify
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      icon="majesticons:calendar-line"
                                    />
                                  </Box>
                                  <Box>
                                    <Typography
                                      color="grey"
                                      fontWeight={400}
                                      fontSize={13}
                                    >
                                      {productDetail?.product?.drop_date ||
                                        "N/A"}
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Box>
                              <Box>
                                <Typography fontSize={13} fontWeight={600}>
                                  Drop out Time
                                </Typography>
                              </Box>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    backgroundColor: "#FEE6BB",
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    p: "5px",
                                  }}
                                >
                                  <Iconify
                                    color={(theme) =>
                                      theme.palette.primary.main
                                    }
                                    icon="majesticons:calendar-line"
                                  />
                                </Box>
                                <Box>
                                  <Typography
                                    color="grey"
                                    fontWeight={400}
                                    fontSize={13}
                                  >
                                    {productDetail?.product?.drop_time || "N/A"}
                                  </Typography>
                                </Box>
                              </Stack>
                            </Grid>
                            <Grid item md={3}>
                              <Timeline
                                sx={{
                                  [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                  },
                                }}
                              >
                                <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator>
                                    <Iconify
                                      color={(theme) =>
                                        theme.palette.primary.main
                                      }
                                      width={30}
                                      icon="carbon:location-star-filled"
                                    />
                                    <TimelineConnector
                                      sx={{
                                        "&.MuiTimelineConnector-root": {
                                          border: (theme) =>
                                            `1px solid ${alpha(
                                              theme.palette.common.black,
                                              0.6
                                            )}`,
                                          width: "0px",
                                          borderStyle: "dashed",
                                          backgroundColor: "transparent",
                                        },
                                      }}
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent
                                    sx={{ fontSize: 14, fontweight: 600 }}
                                  >
                                    {productDetail &&
                                      productDetail?.address[1]?.address}{" "}
                                    <Typography
                                      fontSize={10}
                                      component="span"
                                      color="primary"
                                    >
                                      {productDetail &&
                                        productDetail?.address[1]?.type}
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem>
                                {/* <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator sx={{ ml: 1.1 }}>
                                    <TimelineDot
                                      sx={{
                                        backgroundColor: (theme) =>
                                          theme.palette.primary.main,
                                      }}
                                    />
                                    <TimelineConnector
                                      sx={{
                                        "&.MuiTimelineConnector-root": {
                                          border: (theme) =>
                                            `1px solid ${alpha(
                                              theme.palette.common.black,
                                              0.6
                                            )}`,
                                          width: "0px",
                                          borderStyle: "dashed",
                                          backgroundColor: "transparent",
                                        },
                                      }}
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent sx={{ fontSize: "11px" }}>
                                    Location 1{" "}
                                    <Typography
                                      fontSize={8}
                                      component="span"
                                      color="primary"
                                    >
                                      Pickup
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem> */}
                                {/* <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator sx={{ ml: 1.1 }}>
                                    <TimelineDot
                                      sx={{
                                        backgroundColor: (theme) =>
                                          theme.palette.primary.main,
                                      }}
                                    />
                                    <TimelineConnector
                                      sx={{
                                        "&.MuiTimelineConnector-root": {
                                          border: (theme) =>
                                            `1px solid ${alpha(
                                              theme.palette.common.black,
                                              0.6
                                            )}`,
                                          width: "0px",
                                          borderStyle: "dashed",
                                          backgroundColor: "transparent",
                                        },
                                      }}
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent sx={{ fontSize: "11px" }}>
                                    Location 2{" "}
                                    <Typography
                                      fontSize={8}
                                      component="span"
                                      color="primary"
                                    >
                                      Pickup
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem> */}
                                {/* <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator sx={{ ml: 1.1 }}>
                                    <TimelineDot
                                      sx={{
                                        backgroundColor: "#5D5D5D",
                                      }}
                                    />
                                    <TimelineConnector
                                      sx={{
                                        "&.MuiTimelineConnector-root": {
                                          border: (theme) =>
                                            `1px solid ${alpha(
                                              theme.palette.common.black,
                                              0.6
                                            )}`,
                                          width: "0px",
                                          borderStyle: "dashed",
                                          backgroundColor: "transparent",
                                        },
                                      }}
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent sx={{ fontSize: "11px" }}>
                                    Location 3{" "}
                                    <Typography
                                      fontSize={8}
                                      component="span"
                                      color="primary"
                                    >
                                      Drop-off
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem> */}
                                {/* <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator sx={{ ml: 1.1 }}>
                                    <TimelineDot
                                      sx={{
                                        backgroundColor: (theme) =>
                                          theme.palette.primary.main,
                                      }}
                                    />
                                    <TimelineConnector
                                      sx={{
                                        "&.MuiTimelineConnector-root": {
                                          border: (theme) =>
                                            `1px solid ${alpha(
                                              theme.palette.common.black,
                                              0.6
                                            )}`,
                                          width: "0px",
                                          borderStyle: "dashed",
                                          backgroundColor: "transparent",
                                        },
                                      }}
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent sx={{ fontSize: "11px" }}>
                                    Location 4{" "}
                                    <Typography
                                      fontSize={8}
                                      component="span"
                                      color="primary"
                                    >
                                      Pickup
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem> */}

                                <TimelineItem
                                  sx={{
                                    "&.MuiTimelineItem-root": {
                                      minHeight: "50px",
                                    },
                                  }}
                                >
                                  <TimelineSeparator>
                                    <Iconify
                                      width={30}
                                      icon="carbon:location-star-filled"
                                    />
                                  </TimelineSeparator>
                                  <TimelineContent
                                    sx={{ fontSize: 14, fontweight: 600 }}
                                  >
                                    {productDetail &&
                                      productDetail?.address[0]?.address}{" "}
                                    <Typography
                                      fontSize={10}
                                      component="span"
                                      color="primary"
                                    >
                                      {productDetail &&
                                        productDetail?.address[0]?.type}
                                    </Typography>
                                  </TimelineContent>
                                </TimelineItem>
                              </Timeline>
                            </Grid>
                          </Grid>
                          {/* <Box pt={2}>
                            <Typography fontSize={14}>
                              {" "}
                              {item?.description}
                            </Typography>
                          </Box> */}

                          <Divider sx={{ my: 2 }} />
                          <Box>
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                }}
                              >
                                Job Budget: <Iconify icon="bi:currency-pound" />
                                {item?.budget}
                              </Typography>
                              {/* <Typography variant="subtitle2">
                              Total Spend: $30K+
                            </Typography> */}
                              <Stack direction="row" spacing={1}>
                                <Box>
                                  <Button
                                    sx={{ fontWeight: 500 }}
                                    fullWidth
                                    variant="contained"
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
                                        driver_id: driverId,
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
                                                driver_id: driverId,
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
                                        driver_id: driverId,
                                      }) && handleOpen(item?.id);
                                    }}
                                    sx={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    {console.log(
                                      "CDdvd",
                                      some(item?.job_requests, {
                                        driver_id: driverId,
                                      })
                                    )}
                                    {!some(item?.job_requests, {
                                      driver_id: driverId,
                                    })
                                      ? "Apply Job"
                                      : "Pending"}
                                  </Button>
                                  {/* )} */}
                                </Box>
                              </Stack>
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

              {/* )} */}
            </Grid>
            <Box>
              <Stack alignItems="center" justifyContent="center">
                <Pagination
                  count={pageCount}
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
