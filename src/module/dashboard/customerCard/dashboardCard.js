import { useAuthContext } from "@/auth/useAuthContext";
import Iconify from "@/components/iconify/Iconify";
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
import React from "react";

const DashboardCard = ({ jobPost }) => {
  const router = useRouter();
  const { user } = useAuthContext();
  const [data, setData] = React.useState([]);
  const [historyData, setHistoryData] = React.useState([]);
  const getData = async () => {
    await axiosInstance
      .get("api/auth/jobs/list", {
        params: {
          status: "post",
          page: 1,
          pageSize: "10",
          user_id: user?.id,
          type: "customer",
        },
      })
      .then((response) => {
        if (response?.status === 200) {
          setData(response?.data?.view_data?.data);
          setPageCount(response?.data?.view_data?.meta?.last_page);
        }
      })
      .catch((error) => {
        console.log("DriverJob", error);
      });
  };

  React.useEffect(() => {
    getData();
  }, [user, user?.id]);

  const getHistoryData = async () => {
    await axiosInstance
      .get("api/auth/jobs/list", {
        params: {
          status: "history",
          type: "driver",
          user_id: user?.id,
          page: 1,
          pageSize: 10,
        },
      })
      .then((response) => {
        if (response?.status === 200) {
          setHistoryData(response?.data?.view_data?.data);
        }
      })
      .catch((error) => {
        console.log("Job History", error);
      });
  };

  React.useEffect(() => {
    getHistoryData();
  }, [user, user?.id]);

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
                          ?"#246678"
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
                      {historyData?.length}
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
                          ?"#FECA3C"
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
