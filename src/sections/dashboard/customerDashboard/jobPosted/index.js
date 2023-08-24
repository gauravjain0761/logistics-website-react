import { SelectBox } from "@/components/form";
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
    dispatch(getJobPost({ page: page, pageSize: pageSize, user_id: user?.id }));
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
      <Box py={3}>
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
                    <Stack direction="row" mb={1.3}>
                      <Box>
                        <Box
                          sx={{
                            ml: 0,
                            background: (theme) => theme.palette.grey[100],
                            border: "1px solid",
                            borderColor: (theme) =>
                              alpha(theme.palette.grey[500], 0.32),
                            padding: ".63rem 0.76rem",
                            borderRadius: ".25rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Iconify
                            icon="mingcute:calendar-fill"
                            color="#ff7534"
                          />
                        </Box>
                      </Box>
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
                    </Stack>
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
                          <Stack direction="row" spacing={0.5}>
                            <Box>
                              <Typography
                                color="common.black"
                                fontSize={17}
                                fontWeight={600}
                              >
                                {" "}
                                {item?.name}
                              </Typography>
                            </Box>
                          </Stack>
                          <Box>
                            <DeleteModal id={item?.id} />
                          </Box>
                        </Stack>
                        <Divider />
                        <CardContent>
                          <Grid container spacing={2} alignItems="start">
                            <Grid item md={3}>
                              <Box>
                                <Typography fontSize={28} fontWeight={500}>
                                  Gourmet Box
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
                                      Liquid
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
                                      {`${10}*${10}*${10}`}
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
                                      4 Kg
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                <Box
                                  component="img"
                                  src="/assets/images/dashboard/portfolio.jpeg"
                                  sx={{
                                    width: "83px",
                                    height: "59px",
                                  }}
                                />
                                <Box
                                  component="img"
                                  src="/assets/images/dashboard/portfolio.jpeg"
                                  sx={{
                                    width: "83px",
                                    height: "59px",
                                  }}
                                />
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
                            <Box  mb={4}>
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
                                    {productDetail?.product?.drop_date || "N/A"}
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
                                    10 Street London
                                  </TimelineContent>
                                </TimelineItem>
                                <TimelineItem
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
                                </TimelineItem>
                                <TimelineItem
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
                                </TimelineItem>
                                <TimelineItem
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
                                </TimelineItem>
                                <TimelineItem
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
                                </TimelineItem>

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
                                    Small Heath, Birmingham
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
                              <Typography variant="subtitle2">
                                Bid: $500
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
                                    startIcon={<Iconify icon="ph:hand-fill" />}
                                    onClick={() =>
                                      router.push(
                                        `/dashboard/customer/driver_bid_list/${item.id}`
                                      )
                                    }
                                  >
                                    View Bids
                                  </Button>
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
                                    sx={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    Edit Job
                                  </Button>
                                </Box>
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
                                        "/dashboard/customer/track_job"
                                      )
                                    }
                                    sx={{
                                      fontWeight: 500,
                                    }}
                                  >
                                    Track Job
                                  </Button>
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
      </Box>
    </React.Fragment>
  );
};

export default DashboardJobPost;

const DeleteModal = ({ id }) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const {
    jobPost: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.customerJob);

  const deleteData = async () => {
    await axiosInstance
      .delete(`api/auth/master/jobs/delete/${id}`)
      .then((response) => {
        if (response?.status === 200) {
          handleClose();
          dispatch(
            getJobPost({ page: page, pageSize: pageSize, user_id: user?.id })
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
  };
  return (
    <Box>
      <Button onClick={handleOpen}>
        {" "}
        <Iconify
          icon="fluent:delete-12-regular"
          width="1.7em"
          color={(theme) => theme.palette.primary.main}
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%, -50%)",
            borderRadius:"8px",
            bgcolor: "background.paper",
            border: "1px solid #f5f5f5",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" fontweight={600} fontSize={20} component="h2" pb={2}>
          Sure you want to delete?  
          </Typography>
          <Stack direction="row" spacing={3}>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              No, cancel
            </Button>
            <Button fullWidth variant="contained" onClick={deleteData}>
              Yes, Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
