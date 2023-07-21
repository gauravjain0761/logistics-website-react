import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const DashboardCard = () => {
  return (
    <React.Fragment>
      {" "}
      <Box sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Card sx={{ backgroundColor: "#ff7534" }}>
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={1}
                >
                  <Box
                    sx={{ backgroundColor: "#fff" }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/jobposted.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300} color={"#fff"}>
                      JOB POSTED
                    </Typography>
                    <Typography
                      variant="h4"
                      color={"#fff"}
                      textAlign={"center"}
                    >
                      2
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ backgroundColor: "#ff7534" }}>
              <CardContent>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box
                    sx={{ backgroundColor: "#fff" }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/moneyspend.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300} color={"#fff"}>
                      MONEY SPEND
                    </Typography>
                    <Typography
                      variant="h4"
                      color={"#fff"}
                      textAlign={"center"}
                    >
                      $ 20000
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ backgroundColor: "#ff7534" }}>
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                    sx={{ backgroundColor: "#fff" }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/jobhistory.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300} color={"#fff"}>
                      JOB HISTORY
                    </Typography>
                    <Typography
                      variant="h4"
                      color={"#fff"}
                      textAlign={"center"}
                    >
                      20
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ backgroundColor: "#ff7534" }}>
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  spacing={2}
                >
                  <Box
                    sx={{ backgroundColor: "#fff" }}
                    height="60px"
                    px={1.3}
                    py={0.8}
                    borderRadius={2}
                    component={"img"}
                    src="/assets/images/dashboard/subscription.png"
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={300} color={"#fff"}>
                      SUBSCRIPTION
                    </Typography>
                    <Typography
                      variant="h4"
                      color={"#fff"}
                      textAlign={"center"}
                    >
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
