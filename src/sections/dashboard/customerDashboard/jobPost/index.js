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
const DashboardJobPost = ({ formik }) => {
  const router = useRouter();
  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  const [pageCount, setPageCount] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = React.useState([]);

  const getData = async () => {
    setLoader(true);
    await axiosInstance
      .get("api/auth/master/jobs/search", {
        params: { page: Number(page), pageSize: pageSize },
      })
      .then((response) => {
        if (response?.status === 200) {
          setLoader(false);
          setData(response?.data?.view_data?.data);
          setPageCount(response?.data?.view_data?.meta?.last_page);
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log("DriverJob", error);
      });
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  console.log("datadata", data);
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
                    <Typography
                      fontSize="1.75rem"
                      fontWeight={500}
                      color="primary"
                    >
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
                      variant="outlined"
                      fullWidth
                      onClick={() =>
                        router.push("/dashboard/customer/job_post/create")
                      }
                    >
                      Add New Post
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>

          <Box py={2} sx={{ background: " " }}>
            <Grid container rowSpacing={0}>
              {data &&
                data?.length > 0 &&
                data.map((item, index) => {
                  return (
                    <Grid item md={12} key={index}>
                      <Card
                        sx={{
                          my: 2,
                          // borderRadius: "10px",
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
                          // backgroundColor="#f5f5f5"
                          // sx={{ borderBottom: "1px solid lightgrey" }}
                        >
                          <Stack direction="row" spacing={0.5}>
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
                          <Box>
                            <DeleteModal id={item?.id} getData={getData} />
                          </Box>
                        </Stack>
                        <Divider />
                        <CardContent>
                          <Grid container spacing={2} alignItems="center">
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
                                      09/06/2023
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
                                      10:10 AM
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
                                      Plastic Box
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
                                      09/06/2023
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
                                      10:10 AM
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
                                      5 x 2 x 3 inch
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
                                        <Iconify icon="material-symbols:star" />
                                      }
                                      onClick={() =>
                                        router.push(
                                          "/dashboard/driver/job_listing"
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
                                      startIcon={<Iconify icon="bxs:edit" />}
                                      onClick={() =>
                                        router.push(
                                          `/dashboard/customer/job_post/${item?.id}`
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
                                      color="info"
                                      fullWidth
                                      variant="outlined"
                                      startIcon={<Iconify icon="bxs:edit" />}
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
                                Bid: $500
                              </Typography>
                              {/* <Typography variant="subtitle2">
                              Total Spend: $30K+
                            </Typography> */}
                            </Stack>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}

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

const DeleteModal = ({ id, getData }) => {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteData = async () => {
    await axiosInstance
      .delete(`api/auth/master/jobs/delete/${id}`)
      .then((response) => {
        if (response?.status === 200) {
          handleClose();
          getData();
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
          icon="ic:outline-delete"
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

            bgcolor: "background.paper",
            border: "1px solid #f5f5f5",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" pb={2}>
            Are you sure you want to delete ?
          </Typography>
          <Stack direction="row" spacing={8}>
            <Button fullWidth variant="outlined" onClick={deleteData}>
              Yes
            </Button>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              No
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
