import { SelectBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Add, Search } from "@mui/icons-material";
import {
  Autocomplete,
  Badge,
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
// import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";
import axiosInstance from "@/utils/axios";
import { useAuthContext } from "@/auth/useAuthContext";
import DashboardCard from "@/module/dashboard/companyCard/dashboardCard";
import { useDispatch, useSelector } from "@/redux/store";
import {
  getJobHistory,
  setJobHistoryPage,
  setJobHistoryPageSize,
} from "@/redux/slices/job/company";
import TextMaxLine from "@/components/text-max-line";
import { PageSizes } from "@/utils/constant";
import moment from "moment";
const JobHistory = ({ formik }) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const {
    jobHistory: { pageCount, data, page, pageSize, dataCount },
  } = useSelector((state) => state.customerJob);

  const [layout, setLayout] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState("new");
  const [search, setSearch] = React.useState("");
  const [date, setDate] = React.useState("");

  const handlePageChange = (event, value) => {
    dispatch(setJobHistoryPage(value));
  };

  React.useEffect(() => {
    dispatch(
      getJobHistory({
        page: page,
        pageSize: pageSize,
        user_id: user?.id,
        search: search,
        date: date ? moment(date).format("YYYY-MM-DD h:mm:ss") : "",
      })
    );
  }, [page, pageSize, date, search]);

  return (
    <React.Fragment>
      <Box py={3} pb={12}>
        <Container>
          <Box py={5}>
            <DashboardCard />
          </Box>
          <Box py={2}>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      fontSize="1.75rem"
                      fontWeight={600}
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
                        />
                      </Typography>
                    </Box>
                  </Stack>
                  <Box>
                    <Stack direction="row" spacing={2}>
                      <TextBox
                        fullWidth
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        endIcon={<Search />}
                        placeholder="Search"
                      />
                      <TextBox
                        fullWidth
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type="date"
                      />
                    </Stack>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box py={2} sx={{ background: " " }}>
            <Grid container rowSpacing={0} justifyContent="center">
              {data && data.length > 0 ? (
                data.map((elem, index) => {
                  let productDetail =
                    elem?.items && elem?.items?.length > 0 && elem?.items[0];
                  let addressDetail =
                    elem?.items && elem?.items?.length > 0 && elem?.items[0];
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
                            <TextMaxLine
                              line={2}
                              color="common.black"
                              fontSize={17}
                            >
                              {elem?.description}
                            </TextMaxLine>
                            {/* <Typography
                              color="common.black"
                              fontSize={17}
                              sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                              fontWeight={500}
                            >
                              {elem?.description}
                            </Typography> */}
                          </Box>
                        </Stack>
                        <Divider />
                        <CardContent>
                          <Grid container spacing={2} alignItems="start">
                            <Grid item md={4}>
                              <Box>
                                <TextMaxLine
                                  line={2}
                                  color="common.black"
                                  fontSize={28}
                                  fontWeight={500}
                                >
                                  {elem.name}
                                </TextMaxLine>
                                {/* <Typography fontSize={28} fontWeight={500}>
                                  {elem.name}
                                </Typography> */}
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
                                      {elem.items[0].product.material}
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
                                        elem?.items &&
                                        elem?.items?.length > 0 &&
                                        elem.items[0].product.length
                                      }*${elem.items[0].product.width}*${
                                        elem.items[0].product.height
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
                                      {elem.items[0].product.quantity} Qty
                                    </Typography>
                                  </Box>
                                </Stack>
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                {elem.items.map((elem, index) => {
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
                                          objectFit: "fill",
                                          borderRadius: "4px",
                                          backgroundSize: "cover",
                                          backgroundRepeat: "no-repeat",
                                        }}
                                      />
                                    </React.Fragment>
                                  );
                                })}
                              </Stack>
                            </Grid>
                            <Grid item md={6}>
                              <Stack
                                direction="row"
                                spacing={3}
                                divider={
                                  <Divider orientation="vertical" flexItem />
                                }
                              >
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  alignItems="center"
                                >
                                  <Box>
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
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
                                          {productDetail?.product
                                            ?.pickup_date || "N/A"}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Box>

                                  <Box>
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
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
                                          {productDetail?.product
                                            ?.pickup_time || "N/A"}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  alignItems="center"
                                >
                                  <Box>
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
                                        Drop out Date
                                      </Typography>

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
                                            {productDetail?.product
                                              ?.drop_date || "N/A"}
                                          </Typography>
                                        </Box>
                                      </Stack>
                                    </Box>
                                  </Box>
                                  <Box>
                                    <Box>
                                      <Typography
                                        fontSize={13}
                                        fontWeight={600}
                                      >
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
                                          {productDetail?.product?.drop_time ||
                                            "N/A"}
                                        </Typography>
                                      </Box>
                                    </Stack>
                                  </Box>
                                </Stack>
                              </Stack>
                            </Grid>
                            <Grid item md={2}>
                              <Box>
                                <Button
                                  sx={{ fontWeight: 500 }}
                                  fullWidth
                                  variant="outlined"
                                  onClick={() =>
                                    router.push(
                                      `/dashboard/customer/job_history/detail/${elem.id}`
                                    )
                                  }
                                >
                                  View Detail
                                </Button>
                              </Box>
                            </Grid>
                          </Grid>
                          {/* <Box pt={2}>
                            <Typography fontSize={14}>
                              {" "}
                              {elem?.description}
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
                                {elem?.budget}
                              </Typography>
                              {/* <Typography variant="subtitle2">
                              Total Spend: $30K+
                            </Typography> */}
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                }}
                              >
                                Customer Spend:{" "}
                                <Iconify icon="bi:currency-pound" />
                                {elem?.spentmoney}+
                              </Typography>
                            </Stack>
                          </Box>
                        </CardContent>
                      </Card>

                      {/* <Card
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
                                  Job Title :
                                </Typography>
                              </Box>
                              <Box>
                                <Typography color="primary" variant="subtitle1">
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
                                      {elem?.items[0]?.product?.pickup_time}
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
                                        `/dashboard/customer/job_history/detail/${elem.id}`
                                      )
                                    }
                                  >
                                    View Detail
                                  </Button>
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
                                Job Budget: <Iconify icon="bi:currency-pound" />{elem?.budget}
                              </Typography>
                              <Typography variant="subtitle2">
                                Customer Spend: <Iconify icon="bi:currency-pound" />{elem?.spentmoney}+
                              </Typography>
                            </Stack>
                          </Box>
                        </CardContent>
                      </Card> */}
                    </Grid>
                  );
                })
              ) : (
                <Box my={4}>
                  <Typography variant="h4">No Job History</Typography>
                </Box>
              )}
            </Grid>
            <Box sx={{ mt: 4 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Box>
                  <SelectBox
                    fullWidth
                    name="pageSize"
                    value={pageSize}
                    formSx={{ marginBottom: "0px" }}
                    onChange={(e) => {
                      dispatch(setJobHistoryPageSize(e.target.value));
                    }}
                    options={PageSizes}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" component="p">
                    {page} - {page * pageSize} of {dataCount}
                  </Typography>
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
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default JobHistory;
