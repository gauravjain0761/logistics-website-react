import Iconify from "@/components/iconify/Iconify";
import DashboardCard from "@/module/dashboard/dashboardCard";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";

const DashboardJobPost = ({ formik }) => {
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const MonthSelect = [
    // {
    //   label: "Choose Option for Get OTP",
    //   value: 0,
    // },
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
            <DashboardCard />
          </Box>
          <Box py={2}>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <Stack direction="row" spacing={1}>
                  <Typography
                    fontSize="1.75rem"
                    fontWeight={700}
                    color="primary"
                  >
                    Job Posted By You
                  </Typography>
                  <Box>
                  <Typography
                    fontSize="1.3rem"
                    fontWeight={700}
                    backgroundColor={(theme) => theme.palette.primary.main}
                    color="white"
                    borderRadius="50%"
                    py={0.3}
                    px={0.6}
                  >
                    02
                  </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={1}></Grid>
              <Grid item md={3}>
                <Box>
                  <Stack direction="row" mb={1.3}>
                    <Box
                      sx={{
                        ml: 0,
                        background: (theme) => theme.palette.grey[100],
                        border: "1px solid",
                        borderColor: (theme) =>
                          alpha(theme.palette.grey[500], 0.32),
                        padding: ".375rem .75rem",
                        borderRadius: ".25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Iconify icon="mingcute:calendar-fill" color="#ff7534" />
                    </Box>
                    <Autocomplete
                      sx={{ mb: 0 }}
                      size="small"
                      fullWidth
                      options={MonthSelect}
                      name={`Month`}
                      value={formik?.values?.otp}
                      onChange={formik.handleChange}
                      error={formik.touched.otp && formik.errors.otp}
                      helperText={formik.touched.otp && formik.errors.otp}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Choose Month"
                          InputProps={{
                            ...params.InputProps,
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box>
                  <Button variant="contained" fullWidth>
                    + Add New Post
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            {[...Array(2)].map((elem, index) => {
              return (
                <Card
                  sx={{
                    border: 1,
                    borderRadius: "0px",
                    my: 2,
                    borderColor: "rgba(0,0,0,.125)",
                  }}
                  key={index}
                >
                  <Box
                    sx={{
                      backgroundColor: "rgba(0,0,0,.03)  ",
                      px: 4,
                      py: 1.3,
                      borderBottom: 1,
                      borderColor: "rgba(0,0,0,.125)",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction="row" spacing={1}>
                        <Typography fontWeight={600}>
                          {index + 1}. Job Title :
                        </Typography>
                        <Typography color="primary" fontWeight={600}>
                          Mxq Android Box
                        </Typography>
                      </Stack>

                      <Box>
                        <IconButton
                          sx={{
                            borderRadius: "50%",
                            border: "1px solid black",
                          }}
                        >
                          <Iconify icon="ic:baseline-delete" color="red" />
                        </IconButton>
                      </Box>
                    </Stack>
                  </Box>
                  <CardContent>
                    <Box pt={4}>
                      <Grid container>
                        <Grid item md={2}>
                          <Box
                            border={5}
                            width="max-content"
                            borderColor={(theme) => theme.palette.primary.main}
                          >
                            <Box
                              component="img"
                              src="/assets/images/dashboard/jobimage.jpg"
                              alt="jobImage"
                              width={100}
                              height={100}
                            />
                          </Box>
                        </Grid>
                        <Grid item md={4.3}>
                          <Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Pick-Up Date :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                09 - June - 2023
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Pick-Up Time :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                10:10 AM
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Material :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                Plastic Box
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item md={4.3}>
                          <Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Pick-Up Date :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                09 - June - 2023
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Pick-Up Time :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                10:10 AM
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Material :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                {" "}
                                Plastic Box
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                        <Grid item md={1.4}>
                          <Button
                            sx={{ mb: 1 }}
                            fullWidth
                            variant="contained"
                            startIcon={<Iconify icon="material-symbols:star" />}
                          >
                            View Bids
                          </Button>
                          <Button
                            color="dark"
                            fullWidth
                            variant="contained"
                            startIcon={<Iconify icon="bxs:edit" />}
                          >
                            Edit Job
                          </Button>
                        </Grid>
                      </Grid>
                      <Stack direction="row" spacing={1} pt={1}>
                        <Typography fontWeight={700}>Job Note :</Typography>
                        <Typography color="primary">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Stack>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </Box>
          <Box>
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
                        <Typography sx={{ fontSize: "14px" }}>
                          <Iconify icon="ant-design:backward-filled" /> Previous
                        </Typography>
                      );
                    },
                    next: () => {
                      return (
                        <Typography sx={{ fontSize: "14px" }}>
                          Next <Iconify icon="ant-design:forward-outlined" />
                        </Typography>
                      );
                    },
                  }}
                  {...item}
                />
              )}
            />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default DashboardJobPost;
