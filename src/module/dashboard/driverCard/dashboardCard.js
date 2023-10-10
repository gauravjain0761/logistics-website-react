import { useAuthContext } from "@/auth/useAuthContext";
import Iconify from "@/components/iconify/Iconify";
import {
  getJobActive,
  getJobAlert,
  getJobHistory,
  setJobActivePage,
  setJobAlertPage,
  setJobHistoryPage,
} from "@/redux/slices/job/driver";
import { useDispatch, useSelector } from "@/redux/store";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Card, Grid,
  Stack,
  Typography
} from "@mui/material";
import { find } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const DashboardCard = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const {
    jobAlert: { pageCount, data, page, pageSize },
    jobActive,
    jobHistory,
  } = useSelector((state) => state.driverJob);

  const handlePageChange = (event, value) => {
    dispatch(setJobAlertPage(value));
    dispatch(setJobActivePage(value));
    dispatch(setJobHistoryPage(value));
  };
  React.useEffect(() => {
    dispatch(
      getJobActive({
        page: jobActive?.page,
        pageSize: jobActive?.pageSize,
        user_id: user?.id,
      })
    );
  }, [jobActive?.page, jobActive?.pageSize]);
  useEffect(() => {
    dispatch(
      getJobAlert({ page: page, pageSize: pageSize, user_id: user?.id })
    );
  }, [page, pageSize]);
  useEffect(() => {
    dispatch(
      getJobHistory({
        page: jobHistory?.page,
        pageSize: jobHistory?.pageSize,
        user_id: user?.id,
      })
    );
  }, [jobHistory?.page, jobHistory?.pageSize]);

  const [subscription, setSubscription] = React.useState([]);
  // API FETCH LIST
  const fetchdata = async (type = "driver") => {
    await axiosInstance
      .get(`/api/auth/master/plan/list/${type}`)
      .then((response) => {
        if (response.status === 200) {
          let subscriptionData = find(response?.data.view_data, { default: 1 });
          setSubscription(subscriptionData);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card
              sx={{
                p: 1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/job_request"
                    ? "#145365"
                    : "#145365",
                border: "1px solid #145365",
                color:
                  router.pathname === "/dashboard/driver/job_request"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/job_request")}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                spacing={0}
                alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: (theme) =>
                      router.pathname === "/dashboard/driver/job_request"
                        ? "#246678"
                        : "#246678",
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  height="auto"
                  py={1}
                  borderRadius={2}
                  component="div"
                >
                  <Iconify icon="fluent:alert-48-regular" width={45} />
                </Box>
                <Box>
                  <Typography fontSize={16} fontWeight={300}>
                    JOB ALERT
                  </Typography>
                  <Typography variant="h5" textAlign="center">
                    {data?.length}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                p: 1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/active_jobs"
                    ? "#ff7533"
                    : "#ff7533",
                border: "1px solid #ff7533",
                color:
                  router.pathname === "/dashboard/driver/active_jobs"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/active_jobs")}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={0}
              >
                <Box
                  sx={{
                    backgroundColor: (theme) =>
                      router.pathname === "/dashboard/driver/job_post"
                        ? "#ff884f"
                        : "#ff884f",
                  }}
                  height="60px"
                  py={0.5}
                  px={1}
                  borderRadius={2}
                  component="div"
                >
                  <Iconify icon="solar:user-linear" width={45} />
                </Box>
                <Box>
                  <Typography fontSize={16} fontWeight={300}>
                    ACTIVE JOBS
                  </Typography>
                  <Typography variant="h5" textAlign="center">
                    {jobActive?.dataCount}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>

          <Grid item md={3}>
            <Card
              sx={{
                p: 1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/job_history"
                    ? "#FD9B3D"
                    : "#FD9B3D",
                border: "1px solid #FD9B3D",
                color:
                  router.pathname === "/dashboard/driver/job_history"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/job_history")}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                spacing={0}
                alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: (theme) =>
                      router.pathname === "/dashboard/driver/job_history"
                        ? "#ffa54e"
                        : "#ffa54e",
                  }}
                  height="60px"
                  py={0.5}
                  px={1}
                  borderRadius={2}
                  component="div"
                >
                  <Iconify icon="ri:history-fill" width={48} />{" "}
                </Box>
                <Box>
                  <Typography fontSize={16} fontWeight={300}>
                    JOB HISTORY
                  </Typography>
                  <Typography variant="h5" textAlign={"center"}>
                    {jobHistory?.dataCount}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                p: 1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/subscription"
                    ? "#FECA3C"
                    : "#FECA3C",
                border: "1px solid #FECA3C",
                color:
                  router.pathname === "/dashboard/driver/subscription"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/subscription")}
            >
              <Stack
                direction="row"
                justifyContent="space-around"
                spacing={0}
                alignItems="center"
              >
                <Box
                  sx={{
                    backgroundColor: (theme) =>
                      router.pathname === "/dashboard/driver/subscription"
                        ? "#ffd768"
                        : "#ffd768",
                  }}
                  height="60px"
                  py={0.5}
                  px={1}
                  borderRadius={2}
                  component="div"
                >
                  <Iconify
                    icon="material-symbols:subscriptions-outline"
                    width={45}
                  />
                </Box>
                <Box>
                  <Typography fontSize={16} fontWeight={300}>
                    SUBSCRIPTION
                  </Typography>
                  <Typography variant="h5" textAlign="center">
                    {subscription?.duration || 0} Month
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default DashboardCard;
