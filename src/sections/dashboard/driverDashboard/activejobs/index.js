import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  Divider,
  Grid,
  IconButton,
  Modal,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CountUp from "react-countup";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import axiosInstance from "@/utils/axios";
import { useAuthContext } from "@/auth/useAuthContext";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "./InvoicePDF";
import { useDispatch, useSelector } from "@/redux/store";
import { getJobActive, setJobActivePage } from "@/redux/slices/job/driver";

const DashboardJobPost = () => {
  const dispatch = useDispatch();
  const {
    jobActive: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.driverJob);

  const handlePageChange = (event, value) => {
    dispatch(setJobActivePage(value));
  };

  React.useEffect(() => {
    dispatch(
      getJobActive({ page: page, pageSize: pageSize, user_id: user?.id })
    );
  }, [page]);
  const router = useRouter();
  const { user } = useAuthContext();
  const { enqueueSnackbar } = useSnackbar();
  const [layout, setLayout] = useState(false);
  const [setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [openPDf, setOpenPDF] = React.useState(false);
  const [select, setSelect] = React.useState("new");

 
  const [pageData, setPageData] = React.useState({});

  const [startOpen, setStartOpen] = React.useState(false);
  const handleStartOpen = (id) => setStartOpen(id);
  const handleStartClose = () => setStartOpen(false);

  const [completeOpen, setCompleteOpen] = React.useState(false);
  console.log(completeOpen, "uiudsiusd");
  const handleCompleteOpen = (id) => setCompleteOpen(id);
  const handleCompleteClose = () => setCompleteOpen(false);

  // Rating
  const [reviewOpen, setReviewOpen] = React.useState(false);
  const handleReviewOpen = (id) => setReviewOpen(id);
  const handleReviewClose = () => setReviewOpen(false);
  
  const [loader, setLoader] = React.useState(false);
 

  const formData = useFormik({
    initialValues: {
      id: "",
      driver_id: user?.id,
    },
  });
  // Start Job Api
  const startJobApi = async () => {
    await axiosInstance
      .post("api/auth/jobs/start-job", formData.values)
      .then((response) => {
        if (response.status === 200) {
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
          setStartOpen(false);
          getData();
          handleClose(true);
        }
      })
      .catch((error) => {
        const { response } = error;

        // enqueueSnackbar(response.data.error, {
        //   variant: "error",
        // });
        console.log(error);
      });
  };

  useEffect(() => {
    formik.setFieldValue("user_id", user?.id);
  }, [user, user?.id]);

  // Complete Job Api
  const completeJobApi = async () => {
    await axiosInstance
      .post("api/auth/jobs/complete-job", formData.values)
      .then((response) => {
        if (response.status === 200) {
          setCompleteOpen(false);
          setReviewOpen(true);
          getData();
          enqueueSnackbar(response.data.message, {
            variant: "success",
          });
          handleClose(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      job_id: "",
      user_id: "",
      given_by: "Driver",
      rating: "",
      review: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.review) {
        errors.review = "Note is required";
      }
      if (!values.rating) {
        errors.rating = "Rating is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axiosInstance
        .post("api/auth/rating/add", formik.values)
        .then((response) => {
          if (response.status === 200) {
            setReviewOpen(false);
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            getData();
            handleClose(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  // useEffect(() => {
  //   formik.setFieldValue("id", startOpen);
  // }, [startOpen]);
  // useEffect(() => {
  //   formik.setFieldValue("driver_id", user?.id);
  // }, [user, user?.id]);
  return (
    <React.Fragment>
      <Box py={3}>
        <Container>
          <Box py={5}>
            <DashboardCard activeJob={data} />
          </Box>
          <Box py={2}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    fontSize="1.75rem"
                    fontWeight={500}
                    color="primary"
                  >
                    Active Jobs For You
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
                        end={data.length}
                        enableScrollSpy={true}
                        scrollSpyDelay={200}
                      />
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box py={2} sx={{ background: " " }}>
            <Grid container rowSpacing={0} justifyContent="center">
              {data && data.length > 0 ? (
                data.map((elem, index) => {
                  console.log("datatta", elem);
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
                                  {elem.name}
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
                                src="/assets/images/dashboard/portfolio.jpeg"
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
                                      {elem?.items[0]?.product?.pickup_time}
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
                                      {elem?.items[0]?.product.pickup_time}
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
                                      {elem?.items[0]?.product.material}
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
                                      {elem?.items[0]?.product.drop_date}
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
                                      {elem?.items[0]?.product.drop_time}
                                    </Typography>
                                  </Box>
                                </Grid>
                              </Grid>

                              <Grid container>
                                <Grid item md={4.5}>
                                  <Box>
                                    <Typography variant="subtitle1">
                                      Size
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
                                      {elem?.items[0]?.product.length} x{" "}
                                      {elem?.items[0]?.product.width} x{" "}
                                      {elem?.items[0]?.product.height} inch
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
                                    {elem.status === 1 ? (
                                      <Button
                                        color="success"
                                        fullWidth
                                        variant="outlined"
                                        startIcon={
                                          <Iconify icon="icon-park:check-correct" />
                                        }
                                        onClick={() => {
                                          formData.setFieldValue(
                                            "id",
                                            elem?.bid_id
                                          );
                                          setStartOpen(true);
                                        }}
                                        sx={{
                                          fontWeight: 500,
                                        }}
                                      >
                                        Start Job
                                      </Button>
                                    ) : (
                                      <Button
                                        sx={{ fontWeight: 500 }}
                                        fullWidth
                                        color="success"
                                        variant="outlined"
                                        startIcon={
                                          <Iconify icon="carbon:task-complete" />
                                        }
                                        onClick={() => {
                                          formData.setFieldValue(
                                            "id",
                                            elem?.bid_id
                                          );
                                          formik.setFieldValue(
                                            "job_id",
                                            elem?.id
                                          );
                                          setCompleteOpen(true);
                                        }}
                                      >
                                        Complete Job
                                      </Button>
                                    )}
                                  </Box>
                                  {/* <Box>
                                  <Button
                                    sx={{ fontWeight: 500 }}
                                    fullWidth
                                    color="success"
                                    variant="outlined"
                                    startIcon={<Iconify icon="carbon:star" />}
                                    onClick={() => handleReviewOpen(1)}
                                  >
                                    Give Review
                                  </Button>
                                </Box> */}
                                  <Box>
                                    <Button
                                      color="secondary"
                                      fullWidth
                                      variant="outlined"
                                      startIcon={<Iconify icon="gg:track" />}
                                      onClick={() =>
                                        router.push(
                                          "/dashboard/driver/track_job"
                                        )
                                      }
                                      sx={{
                                        fontWeight: 500,
                                      }}
                                    >
                                      Track Job
                                    </Button>
                                  </Box>
                                  <Box>
                                    <Button
                                      sx={{ fontWeight: 500 }}
                                      fullWidth
                                      variant="outlined"
                                      startIcon={
                                        <Iconify icon="carbon:view-filled" />
                                      }
                                      onClick={() => setOpenPDF(true)}
                                    >
                                      View PDF
                                    </Button>
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
                              {elem.review}
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
                <Box my={6}>
                  <Typography variant="h4">No Active Jobs</Typography>
                </Box>
              )}
            </Grid>
            <Box>
              <Modal
                open={completeOpen}
                onClose={handleCompleteClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-review"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                    transform: "translate(-50%, -50%)",

                    bgcolor: "background.paper",
                    border: "1px solid #f5f5f5",
                    boxShadow: 24,
                    p: 4,
                  }}
                  component="form"
                  noValidate
                >
                  <Typography mb={2}>
                    Are you sure you have completed the job?
                  </Typography>
                  <Stack direction="row" spacing={8}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        completeJobApi();
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        handleCompleteClose();
                      }}
                    >
                      No
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </Box>
            <Box>
              <Modal
                open={startOpen}
                onClose={handleStartClose}
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

                    bgcolor: "background.paper",
                    border: "1px solid #f5f5f5",
                    boxShadow: 24,
                    p: 4,
                  }}
                  component="form"
                  noValidate
                >
                  <Typography mb={2}>
                    Are you sure you want to start the job?
                  </Typography>
                  <Stack direction="row" spacing={8}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        startJobApi();
                      }}
                    >
                      Yes
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => {
                        handleStartClose();
                      }}
                    >
                      No
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </Box>
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
            <Box></Box>
            <Box>
              <Modal
                open={reviewOpen}
                onClose={handleReviewOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-review"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    textAlign: "center",
                    transform: "translate(-50%, -50%)",

                    bgcolor: "background.paper",
                    border: "1px solid #f5f5f5",
                    boxShadow: 24,
                    p: 4,
                  }}
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <Typography mb={2} variant="subtitle1">
                    Review
                  </Typography>
                  <Stack spacing={1}>
                    <Box>
                      <Rating
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                        name="rating"
                        helperText={
                          formik.touched.rating && formik.errors.rating
                        }
                      />
                    </Box>
                    <Box>
                      <TextBox
                        size="small"
                        name="review"
                        label="Review"
                        fullWidth
                        multiline={true}
                        rows="4"
                        value={formik.values.review}
                        onChange={formik.handleChange}
                        helperText={
                          formik.touched.review && formik.errors.review
                        }
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={8}>
                    <Button fullWidth variant="outlined" type="submit">
                      Submit
                    </Button>
                  </Stack>
                </Box>
              </Modal>
            </Box>
            {/* <Stack alignItems="center">
              <Box>
                <Typography variant="h5">No Active Jobs.....</Typography>
              </Box>
              <Box
                component="img"
                sx={{ width: "400px" }}
                src="/assets/images/home/new/banner-image.jpg"
                alt="truck"
              />
            </Stack> */}
          </Box>
        </Container>
      </Box>
      <Dialog fullScreen open={openPDf}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <DialogActions
            sx={{
              zIndex: 9,
              padding: "12px !important",
              boxShadow: (theme) => theme.customShadows.z8,
            }}
          >
            <Tooltip title="Close">
              <IconButton color="inherit" onClick={() => setOpenPDF(false)}>
                <Iconify icon="eva:close-fill" />
              </IconButton>
            </Tooltip>
          </DialogActions>
          <Box sx={{ flexGrow: 1, height: "100%", overflow: "hidden" }}>
            <PDFViewer
              fileName={`Test-Name`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              showToolbar={false}
            >
              <InvoicePDF />
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default DashboardJobPost;
