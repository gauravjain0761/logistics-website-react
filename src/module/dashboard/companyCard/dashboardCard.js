import Iconify from "@/components/iconify/Iconify";
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

  return (
    <React.Fragment>
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card
              sx={{
                backgroundColor:
                  router.pathname === "/dashboard/customer/job_posted"
                    ? "#ff7534"
                    : "#fff",
                border: "1px solid #ff7534",
                color:
                  router.pathname === "/dashboard/customer/job_posted"
                    ? "#fff"
                    : "#ff7534",
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
                        router.pathname === "/dashboard/customer/job_post_form"
                          ? theme.palette.primary.main
                          : alpha(theme.palette.primary.main, 0.1),
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
                      {jobPost}
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
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={0}
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/job_history"
                          ? theme.palette.primary.main
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
                  justifyContent="space-around"
                  spacing={0}
                  alignItems="center"
                >
                  <Box
                    sx={{
                      backgroundColor: (theme) =>
                        router.pathname === "/dashboard/customer/subscription"
                          ? theme.palette.primary.main
                          : alpha(theme.palette.primary.main, 0.1),
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
