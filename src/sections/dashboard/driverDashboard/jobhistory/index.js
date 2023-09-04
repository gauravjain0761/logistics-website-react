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
  Dialog,
  DialogActions,
  Divider,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CountUp from "react-countup";
// import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import axiosInstance from "@/utils/axios";
import { useAuthContext } from "@/auth/useAuthContext";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import { useDispatch, useSelector } from "@/redux/store";
import {
  getJobHistory,
  setJobActivePage,
  setJobHistoryPage,
} from "@/redux/slices/job/driver";
import { PDFViewer } from "@react-pdf/renderer";
import InvoicePDF from "../activejobs/InvoicePDF";
const JobHistory = ({ formik }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    jobHistory: { pageCount, data, page, pageSize },
  } = useSelector((state) => state.driverJob);

  const handlePageChange = (event, value) => {
    dispatch(setJobHistoryPage(value));
  };

  React.useEffect(() => {
    dispatch(
      getJobHistory({ page: page, pageSize: pageSize, user_id: user?.id })
    );
  }, [page, pageSize]);
  const { user } = useAuthContext();
  const [layout, setLayout] = useState(false);
  // const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [openPDf, setOpenPDF] = React.useState(false);
  const [select, setSelect] = React.useState("new");

  // const [pageCount, setPageCount] = React.useState(1);
  // const [pageSize, setPageSize] = React.useState(10);
  const [pageData, setPageData] = React.useState({});

  // const handlePageChange = (event, value) => {
  //   setPage(value);
  // };
  // const [data, setData] = React.useState([]);

  return (
    <React.Fragment>
      <Box py={3} pb={12}>
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
                        end={data && data.length}
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
                              <Box sx={{ width: "100%" }}>
                                <Typography variant="subtitle1">
                                  Job Title :
                                </Typography>
                              </Box>
                              <Box sx={{ width: "80%" }}>
                                <Typography
                                  color="primary"
                                  variant="subtitle1"
                                  sx={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                  }}
                                >
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
                                src={`${elem?.items[0]?.product?.base_url}${elem?.items[0]?.product?.image}`}
                                alt={`${elem?.items[0]?.product?.image}`}
                                sx={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "cover",
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
                                      {elem?.items[0]?.product?.pickup_date}
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
                                    <Button
                                      sx={{ fontWeight: 500 }}
                                      fullWidth
                                      variant="outlined"
                                      startIcon={
                                        <Iconify icon="carbon:view-filled" />
                                      }
                                      onClick={() =>
                                        router.push(
                                          `/dashboard/driver/job_history/detail/${elem.id}`
                                        )
                                      }
                                    >
                                      View Detail
                                    </Button>
                                  </Box>
                                  <Box>
                                    <Button
                                      sx={{ fontWeight: 500 }}
                                      fullWidth
                                      color="secondary"
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
                              {elem.description}
                            </Typography>
                          </Box>

                          <Divider sx={{ my: 2 }} />
                          <Box>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                            >
                              <Typography variant="subtitle2">
                                Job Budget: ${elem?.budget}
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
                <Box my={4}>
                  <Typography variant="h4">No Job History</Typography>
                </Box>
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

export default JobHistory;
