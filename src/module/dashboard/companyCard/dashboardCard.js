import { useAuthContext } from "@/auth/useAuthContext";
import Iconify from "@/components/iconify/Iconify";
import {
  getJobHistory,
  getJobPost,
  setJobPostPage,
} from "@/redux/slices/job/customer";
import { getJobActive } from "@/redux/slices/job/driver";
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
  const fetchdata = async (type = "company") => {
    await axiosInstance
      .get(`/api/auth/master/plan/list/${type}`)
      .then((response) => {
        if (response.status === 200) {
          // setLoadingCard(false);
          let subscriptionData = find(response?.data.view_data, { default: 1 });
          setSubscription(subscriptionData);
        }
      })
      .catch((error) => {
        // setLoadingCard(false);
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
                backgroundColor:
                  router.pathname === "/dashboard/company/driver/list"
                    ? "#145365"
                    : "#145365",
                border: "1px solid #145365",
                color:
                  router.pathname === "/dashboard/company/driver/list"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/company/driver/list")}
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
                        router.pathname === "/dashboard/company/driver/list"
                          ? "#246678"
                          : "#246678",
                    }}
                    height="80px"
                    p={2}
                    width="80px"
                    borderRadius="50%"
                    component="div"
                  >
                    <Iconify icon="basil:bag-solid" width={48} />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      Driver List
                    </Typography>
                    <Typography variant="h4" textAlign="center">
                      {data?.length}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/company/job_history"
                    ? "#FD9B3D"
                    : "#FD9B3D",
                border: "1px solid #FD9B3D",
                color:
                  router.pathname === "/dashboard/company/job_history"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/company/job_history")}
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
                        router.pathname === "/dashboard/company/job_history"
                          ? "#ffa54e"
                          : "#ffa54e",
                    }}
                    height="80px"
                    p={2}
                    width="80px"
                    borderRadius="50%"
                    component="div"
                  >
                    <Iconify icon="ri:history-fill" width={48} />
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
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/company/active_jobs"
                    ? "#FD9B3D"
                    : "#FD9B3D",
                border: "1px solid #FD9B3D",
                color:
                  router.pathname === "/dashboard/company/active_jobs"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/company/active_jobs")}
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
                        router.pathname === "/dashboard/company/job_post"
                          ? "#ffa54e"
                          : "#ffa54e",
                    }}
                    height="80px"
                    p={2}
                    width="80px"
                    borderRadius="50%"
                    component="div"
                  >
                    <Iconify icon="solar:user-linear" width={48} />
                  </Box>
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                      ACTIVE JOBS
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      {getJobActive?.dataCount}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/company/subscription"
                    ? "#FECA3C"
                    : "#FECA3C",
                border: "1px solid #FECA3C",
                color:
                  router.pathname === "/dashboard/company/subscription"
                    ? "#fff"
                    : "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/company/subscription")}
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
                        router.pathname === "/dashboard/company/subscription"
                          ? "#ffd768"
                          : "#ffd768",
                    }}
                    height="80px"
                    p={2}
                    width="80px"
                    borderRadius="50%"
                    component="div"
                  >
                    <Iconify
                      icon="material-symbols:subscriptions-outline"
                      width={48}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      SUBSCRIPTION
                    </Typography>
                    <Typography variant="h4" textAlign={"center"}>
                      {subscription?.duration || 0} Month
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
