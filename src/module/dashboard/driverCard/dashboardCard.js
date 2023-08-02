import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DashboardCard = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={2.4}>
            <Card
              sx={{
                p:1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/active_jobs"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/driver/active_jobs"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/active_jobs")}
            >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/driver/job_post"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    py={0.5}

                    borderRadius={2}
                    component="img"
                    src="/assets/images/dashboard/jobposted.png"
                  />
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                      ACTIVE JOBS
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      2
                    </Typography>
                  </Box>
                </Stack>
            </Card>
          </Grid>
          <Grid item md={2.4}>
            <Card
              sx={{
                p:1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/job_request"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/driver/job_request"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/job_request")}
            >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/driver/job_request"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    py={0.5}

                    borderRadius={2}
                    component="img"
                    src="/assets/images/dashboard/request.png"
                  />
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                       JOB ALERT
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      5
                    </Typography>
                  </Box>
                </Stack>
            </Card>
          </Grid>
          <Grid item md={2.4}>
            <Card
              variant="outlined"
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/driver/money_earned"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/driver/money_earned"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/money_earned")}
            >
                <Stack direction="row" p={1.5} spacing={1} justifyContent="space-between">
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/driver/money_earned"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    py={0.5}
                    
                    borderRadius={2}
                    component="img"
                    src="/assets/images/dashboard/moneyspend.png"
                  />
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                      MONEY EARNED
                    </Typography>
                    <Typography   variant="h5" textAlign="center">
                      $ 10000
                    </Typography>
                  </Box>
                </Stack>
            </Card>
          </Grid>
          <Grid item md={2.4}>
            <Card
              sx={{
                p:1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/job_history"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/driver/job_history"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/job_history")}
            >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/driver/job_history"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    py={0.5}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/jobhistory.png"
                  />
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                      JOB HISTORY
                    </Typography>
                    <Typography variant="h5" textAlign={"center"}>
                      20
                    </Typography>
                  </Box>
                </Stack>
            </Card>
          </Grid>
          <Grid item md={2.4}>
            <Card
              sx={{
                p:1.5,
                backgroundColor:
                  router.pathname === "/dashboard/driver/subscription"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/driver/subscription"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/driver/subscription")}
            >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/driver/subscription"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    py={0.5}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/subscription.png"
                  />
                  <Box>
                    <Typography fontSize={16} fontWeight={300}>
                      SUBSCRIPTION
                    </Typography>
                    <Typography variant="h5" textAlign="center">
                      3 Month
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
