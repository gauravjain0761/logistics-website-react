import { useAuthContext } from "@/auth/useAuthContext";
import Iconify from "@/components/iconify/Iconify";
import {
  getJobHistory,
  getJobPost,
  setJobPostPage,
} from "@/redux/slices/job/customer";
import { useDispatch, useSelector } from "@/redux/store";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DashboardCard = ({ jobPost }) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const {
    jobPost: { pageCount, data, page, pageSize },
    jobHistory,
  } = useSelector((state) => state.customerJob);

  const handlePageChange = (event, value) => {
    dispatch(setJobPostPage(value));
  };
  useEffect(() => {
    dispatch(getJobPost({ page: page, pageSize: pageSize, user_id: user?.id }));
  }, [page, pageSize]);

  React.useEffect(() => {
    dispatch(getJobHistory({
      page: jobHistory?.page,
      pageSize: jobHistory?.pageSize,
      user_id: user?.id,
    }));
  }, [jobHistory?.page, jobHistory?.pageSize]);
  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/job_posted"
                    ? "#145365"
                    : "#fff",
                border: "1px solid #145365",
                color:
                  router.pathname === "/dashboard/customer/job_posted"
                    ? "#fff"
                    : "#145365",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/job_posted")}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  spacing={0}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/job_posted"
                          ? "#246678"
                          : alpha("#145365", 0.1),
                    }}
                    height="60px"
                    px={1}
                    py={0.5}
                    borderRadius={2}
                    component="div"
                  >
                    <Iconify icon="material-symbols:post-add" width={55} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      JOB POSTED
                    </Typography>
                    <Typography variant="h4" textAlign="center">
                      {data?.length}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item md={4}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/money_spend"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/customer/money_spend"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/money_spend")}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={0}
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/money_spend"
                          ? theme.palette.primary.main
                          : alpha(theme.palette.primary.main, 0.1),
                    }}
                    height="60px"
                    px={1}
                    py={0.5}
                    borderRadius={2}
                    component="div"
                  >
                    {" "}
                    <Iconify icon="ph:money-fill" width={55} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      MONEY SPEND
                    </Typography>
                    <Typography variant="h4" textAlign="center">
                      $ 20000
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid> */}
          <Grid item md={4}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/job_history"
                    ? "#FD9B3D"
                    : "#fff",
                border: "1px solid #FD9B3D",
                color:
                  router.pathname === "/dashboard/customer/job_history"
                    ? "#fff"
                    : "#FD9B3D",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/job_history")}
            >
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={0}
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/job_history"
                          ? "#ffa54e"
                          : alpha(theme.palette.primary.main, 0.1),
                    }}
                    height="60px"
                    px={1}
                    py={0.5}
                    borderRadius={2}
                    component="div"
                  >
                    <Iconify icon="ri:history-fill" width={55} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      JOB HISTORY
                    </Typography>
                    <Typography variant="h4" textAlign={"center"}>
                      {jobHistory?.dataCount}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/subscription"
                    ? "#FECA3C"
                    : "#fff",
                border: "1px solid #FECA3C",
                color:
                  router.pathname === "/dashboard/customer/subscription"
                    ? "#fff"
                    : "#FECA3C",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/subscription")}
            >
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent="space-around"
                  spacing={0}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/subscription"
                          ? "#FECA3C"
                          : alpha("#FECA3C", 0.1),
                    }}
                    height="60px"
                    px={1}
                    py={0.5}
                    borderRadius={2}
                    component="div"
                  >
                    <Iconify
                      icon="material-symbols:subscriptions-outline"
                      width={55}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      SUBSCRIPTION
                    </Typography>
                    <Typography variant="h4" textAlign={"center"}>
                      3 Month
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default DashboardCard;
