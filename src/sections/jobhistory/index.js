import { SelectBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import DashboardCard from "@/module/dashboard/dashboardCard";
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
const JobHistory = ({ formik }) => {
  const router = useRouter();
  const [layout, setLayout] = useState(false);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  const [pageCount, setPageCount] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});

  console.log("formikerr", formik);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const sortBy = [
    {
      label: "Sort(New)",
      value: "new",
    },
    {
      label: "Sort(Last)",
      value: "last",
    },
  ];
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
            <DashboardCard />
          </Box>
          <Box py={2}>
            <Grid container spacing={2}>
              <Grid item md={7}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    fontSize="1.75rem"
                    fontWeight={500}
                    color="primary"
                  >
                    Job History
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
                        end={20}
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
                    onClick={() => router.push("/jobpost/post_your_job")}
                  >
                    Add New Post
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box py={2} sx={{ background: " " }}>
            <Grid container rowSpacing={0}>
              {/* <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  > */}
              {/* <Stack spacing={1} direction="row">
                      <Button
                        variant="outlined"
                        sx={{ py: 1 }}
                        onClick={() => setLayout(false)}
                      >
                        <Iconify icon="material-symbols:list" width={24} />
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => setLayout(true)}
                      >
                        <Iconify icon="ri:grid-fill" width={24} />
                      </Button>
                    </Stack> */}
              {/* </Stack> */}
              {/* {layout ? (
                    <Box>
                      <Grid container spacing={2}>
                        {[...Array(4)].map((elem, index) => {
                          return (
                            <Grid item md={4} key={index}>
                              <Card
                                sx={{
                                  my: 2,
                                  borderRadius: "0px",
                                  ":hover": {
                                    borderColor: "#ff7534",
                                    cursor: "pointer",
                                    transition: " all 0.3s ease-in-out",
                                  },
                                }}
                                variant="outlined"
                              >
                                <CardContent>
                                  <Grid container spacing={2}>
                                    <Grid item md={4}>
                                      <Box
                                        component="img"
                                        src="/assets/images/dashboard/portfolio.jpeg"
                                        sx={{
                                          borderRadius: "50%",
                                          border: "3px solid #ff7534",
                                        }}
                                      />
                                    </Grid>
                                    <Grid item md={8}>
                                      <Stack direction="column">
                                        <Box pb={0.3}>
                                          <Typography
                                            variant="h5"
                                            fontWeight={600}
                                          >
                                            Mr. Alex
                                          </Typography>
                                        </Box>
                                        <Typography fontSize={14}>
                                          {" "}
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit, sed do
                                          eiusmod tempor incididunt ut labore et
                                          dolore magna aliqua. Ut enim ad minim
                                          veniam, quis nostrud exercitation
                                          ullamco laboris nisi ut aliquip ex ea
                                          commodo consequat.
                                        </Typography>
                                      </Stack>
                                    </Grid>
                                  </Grid>
                                  <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    pt={2}
                                  >
                                    <Box>
                                      <Chip
                                        label=" Job Success Rate: 98 %"
                                        variant=""
                                        color="primary"
                                      />
                                    </Box>
                                    <Stack>
                                      <Rating value={4} readOnly size="small" />
                                    </Stack>
                                  </Stack>
                                  <Stack direction="row" spacing={1} mt={0.6}>
                                    <Chip
                                      label="Full-Time"
                                      variant=""
                                      color="primary"
                                    />
                                    <Chip
                                      label="Remote"
                                      variant=""
                                      color="primary"
                                    />
                                  </Stack>
                                  <Divider sx={{ my: 2 }} />
                                  <Box>
                                    <Stack
                                      direction="row"
                                      justifyContent="space-between"
                                    >
                                      <Typography variant="subtitle2">
                                        Bid: $500
                                      </Typography>
                                      <Typography variant="subtitle2">
                                        Earned: $30K+
                                      </Typography>
                                    </Stack>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Box>
                  ) : ( */}

              {[...Array(4)].map((elem, index) => {
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
                              Mxq Android Box
                            </Typography>
                          </Box>
                        </Stack>
                       
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
                            
                              
                                <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                        Pick-Up Date 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                                <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                      Pick-Up Time 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                               
                                <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                      Material 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                             
                          
                            {/* <Stack direction="column">
                                  <Box>
                                      <Typography
                                        color="primary"
                                        fontSize={14}
                                        fontWeight={600}
                                      >
                                        Job Success Rate: 98 %
                                      </Typography>
                                    </Box>
                                  <Box pb={0.3}>
                                    <Typography variant="h5" fontWeight={600}>
                                      Mr. Alex
                                    </Typography>
                                  </Box>
                                  <Typography fontSize={14}>
                                    {" "}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </Typography>
                                </Stack>
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                  alignItems="center"
                                  pt={2}
                                >
                                  <Stack>
                                    <Rating value={4} readOnly size="small" />
                                  </Stack>
                                </Stack> */}
                          </Grid>
                          <Grid item md={4}>

                          <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                      Drop-Out Date 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                                <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                      Drop-Out Time 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                               
                                <Grid container >
                                  <Grid item md={4.5}>
                                    <Box>
                                      <Typography variant="subtitle1">
                                      Size 
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item md={1}>
                                  <Typography variant="subtitle1">
                                        :
                                      </Typography>
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
                              <Box>
                                <Box>
                                  <Button
                                    sx={{ mb: 1, fontWeight: 500 }}
                                    fullWidth
                                    variant="outlined"
                                    startIcon={
                                      <Iconify icon="material-symbols:star" />
                                    }
                                    onClick={() =>
                                      router.push("/dashboard/job_listing")
                                    }
                                  >
                                    View Bids
                                  </Button>
                                </Box>
                               
                              </Box>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />
                        <Box>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="subtitle2">
                              Bid: $500
                            </Typography>
                            <Typography variant="subtitle2">
                              Earned: $30K+
                            </Typography>
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

export default JobHistory;
