import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DashboardCard = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/job_post"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/customer/job_post"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/job_post")}
            >
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/customer/job_post"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component="img"
                    src="/assets/images/dashboard/jobposted.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      JOB POSTED
                    </Typography>
                    <Typography variant="h4" textAlign="center">
                      2
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
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
                <Stack direction="row" justifyContent="space-between">
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/customer/money_spend"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component="img"
                    src="/assets/images/dashboard/moneyspend.png"
                  />
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
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/job_history"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/customer/job_history"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/job_history")}
            >
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                     sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/customer/job_history"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/jobhistory.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300}>
                      JOB HISTORY
                    </Typography>
                    <Typography variant="h4" textAlign={"center"}>
                      20
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
                  router.pathname === "/dashboard/customer/subscription"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/customer/subscription"
                    ? "#fff"
                    : "#ff7534",
                cursor: "pointer",
              }}
              onClick={() => router.push("/dashboard/customer/subscription")}
            >
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        router.pathname === "/dashboard/customer/subscription"
                          ? "#fff"
                          : "#ff7b3c30",
                    }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/subscription.png"
                  />
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
