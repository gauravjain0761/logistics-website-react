import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
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
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CountUp from "react-countup";
import DashboardCard from "@/module/dashboard/customerCard/dashboardCard";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import SkeletonLoader from "@/components/skeleton";
import { JobSekelton } from "@/components/not-found";
import { useAuthContext } from "@/auth/useAuthContext";
import { dispatch, useDispatch, useSelector } from "@/redux/store";
import { getJobPost, setJobPostPage } from "@/redux/slices/job/customer";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import TextMaxLine from "@/components/text-max-line/TextMaxLine";
import { useFormik } from "formik";
const DashboardJobPost = ({ formik }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    jobPost: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.customerJob);

  const handlePageChange = (event, value) => {
    dispatch(setJobPostPage(value));
  };

  React.useEffect(() => {
    dispatch(
      getJobPost({
        page: page,
        pageSize: pageSize,
        user_id: user?.id,
        is_deleted: 0,
      })
    );
  }, [page, pageSize]);
  const { user } = useAuthContext();
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  const [loader, setLoader] = React.useState(false);

  const MonthSelect = [
    {
      label: "Choose Month",
      value: 0,
    },
    {
      label: "January",
      value: "January",
    },
    {
      label: "February",
      value: "February",
    },
    {
      label: "March",
      value: "March",
    },
    {
      label: "April",
      value: "April",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "June",
      value: "June",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
    {
      label: "November",
      value: "November",
    },
    {
      label: "December",
      value: "December",
    },
  ];
  return (
    <React.Fragment>
      <Box py={3} pb={12}>
        <Container>
          <Box py={5}>
            <DashboardCard jobPost={data?.length} />
          </Box>
          <Box py={2}>
            {loader ? (
              <SkeletonLoader />
            ) : (
              <Grid container spacing={2}>
                <Grid item md={7}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography fontSize={28} fontWeight={600} color="primary">
                      Job Posted By You
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

                <Grid item md={3}>
                  <Box>
                    <SelectBox
                      sx={{ mb: 0 }}
                      size="small"
                      fullWidth
                      options={MonthSelect}
                      name={`month`}
                      value={formik?.values?.month}
                      onChange={formik.handleChange}
                      error={formik.touched.month && formik.errors.month}
                      helperText={formik.touched.month && formik.errors.month}
                    />
                    {/* </Stack> */}
                  </Box>
                </Grid>
                <Grid item md={2}>
                  <Box>
                    <Button
                      startIcon={<Add />}
                      variant="contained"
                      fullWidth
                      onClick={() =>
                        router.push("/dashboard/customer/job_post_form/create")
                      }
                    >
                      Add New Job
                    </Button>
                  </Box>
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
                  let addressDetail =
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
                          justifyContent="space-between"
                          px={2}
                          py={1.4}
                          alignItems="center"
                        >
                          <Box sx={{ width: "90%" }}>
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
                          {item?.status <= 0 && (
                            <Box>
                              <DeleteModal
                                params={{
                                  user_id: user?.id,
                                  job_id: item?.id,
                                }}
                              />
                            </Box>
                          )}
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
                                      {item.items[0].product.material}
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
                                      {`${item.items[0].product.length}*${item.items[0].product.width}*${item.items[0].product.height}`}
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
                                      {item.items[0].product.quantity} Qty
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
                                    {addressDetail?.address[1]?.address}{" "}
                                    <Typography
                                      fontSize={10}
                                      component="span"
                                      color="primary"
                                    >
                                      {addressDetail?.address[1]?.type}
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
                                    {addressDetail?.address[0]?.address}{" "}
                                    <Typography
                                      fontSize={10}
                                      component="span"
                                      color="primary"
                                    >
                                      {addressDetail?.address[0]?.type}
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
                                Bid: <Iconify icon="bi:currency-pound" />
                                {item?.budget}
                              </Typography>
                              {/* <Typography variant="subtitle2">
                              Total Spend: $30K+
                            </Typography> */}
                              <Stack direction="row" spacing={2}>
                                <Box>
                                  <Badge
                                    badgeContent={item?.job_requests?.length}
                                    color="secondary"
                                    anchorOrigin={{
                                      vertical: "top",
                                      horizontal: "right",
                                    }}
                                  >
                                    <Button
                                      sx={{ fontWeight: 500 }}
                                      fullWidth
                                      variant="contained"
                                      startIcon={
                                        <Iconify icon="ph:hand-fill" />
                                      }
                                      onClick={() =>
                                        router.push(
                                          `/dashboard/customer/driver_bid_list/${item.id}`
                                        )
                                      }
                                    >
                                      View Bids
                                    </Button>
                                  </Badge>
                                </Box>
                                <Box>
                                  <Button
                                    color="dark"
                                    fullWidth
                                    variant="outlined"
                                    startIcon={
                                      <Iconify icon="basil:edit-solid" />
                                    }
                                    onClick={() =>
                                      router.push(
                                        `/dashboard/customer/job_post_form/${item?.id}`
                                      )
                                    }
                                    disabled={
                                      item?.status === 1 ||
                                      item?.status === 2 ||
                                      item.status === 3 ||
                                      item?.status === 4
                                    }
                                    sx={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    Edit Job
                                  </Button>
                                </Box>
                                {item?.bid_id &&
                                  item?.bid_id !== null &&
                                  item?.status !== 1 && (
                                    <Box>
                                      <Button
                                        color="primary"
                                        fullWidth
                                        variant="outlined"
                                        startIcon={
                                          <Iconify icon="mingcute:foot-fill" />
                                        }
                                        onClick={() =>
                                          router.push(
                                            `/dashboard/customer/track_job/${item.bid_id}/${item.id}`
                                          )
                                        }
                                        sx={{
                                          fontWeight: 500,
                                        }}
                                      >
                                        Track Job
                                      </Button>
                                    </Box>
                                  )}
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
      </Box>
    </React.Fragment>
  );
};

export default DashboardJobPost;

const DeleteModal = ({ params }) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };
  const dispatch = useDispatch();
  const {
    jobPost: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.customerJob);

  const formik = useFormik({
    initialValues: {
      ...params,
      reason: "",
      is_deleted: 1,
    },
    validate: (values) => {
      const errors = {};
      if (!values.reason) {
        errors.reason = "Reason is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axiosInstance
        .post(`api/auth/jobs/delete-job`, values)
        .then((response) => {
          if (response?.status === 200) {
            handleClose();
            dispatch(
              getJobPost({
                page: page,
                pageSize: pageSize,
                user_id: user?.id,
                is_deleted: 0,
              })
            );
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
        });
    },
  });

  return (
    <Box>
      <Button onClick={handleOpen}>
        <Iconify
          icon="fluent:delete-12-regular"
          width="1.7em"
          color={(theme) => theme.palette.primary.main}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogContent sx={{ py: 2 }}>
          <Stack
            spacing={1}
            sx={{ mb: 0, height: "100%" }}
            justifyContent="space-between"
          >
            <Typography
              id="modal-modal-title"
              fontweight={600}
              fontSize={20}
              component="p"
            >
              Sure you want to delete?
            </Typography>
            <Box>
              <TextBox
                size="small"
                name="reason"
                label="Reason"
                fullWidth
                multiline={true}
                rows="4"
                value={formik.values.reason}
                onChange={formik.handleChange}
                helperText={formik.touched.reason && formik.errors.reason}
              />
            </Box>
            <Box component="form" noValidate onSubmit={formik.handleSubmit}>
              <Stack direction="row" spacing={3}>
                <Button fullWidth variant="outlined" onClick={handleClose}>
                  No, cancel
                </Button>
                <Button fullWidth variant="contained" type="submit">
                  Yes, Delete
                </Button>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
