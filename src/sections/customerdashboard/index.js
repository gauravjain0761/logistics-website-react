import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const CustomerDashboard = () => {
  return (
    <React.Fragment>
      <Container sx={{ my: 4 }}>
        <Stack spacing={4}>
          <Box>
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
                        height="60px"
                        component={"img"}
                        src="/assets/images/dashboard/jobposted.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
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
                        height="60px"
                        component={"img"}
                        src="/assets/images/dashboard/moneyspend.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
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
                        height="60px"
                        component={"img"}
                        src="/assets/images/dashboard/jobhistory.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
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
                        height="60px"
                        component={"img"}
                        src="/assets/images/dashboard/subscription.png"
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={300}
                          color={"#fff"}
                        >
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
          <Box>
            <Card sx={{ backgroundColor: "#ff7534" }}>
              <CardContent>
                <Grid container>
                  <Grid item md={7}>
                    <Box
                      component={"img"}
                      src="/assets/images/dashboard/logistic.png"
                    />
                  </Grid>
                  <Grid item md={5}>
                    <Stack direction={"row"} alignItems="center" height="100%">
                      <Stack spacing={2} >
                        <Typography variant="h3" fontWeight={300}  color="#fff" >
                          Lorem ipsum
                        </Typography>
                        <Typography color="#fff" >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed pretium augue ac justo semper, vitae
                          ultrices velit cursus. Aenean tristique vel mi non
                          pulvinar.
                        </Typography>
                        <Box>
                          <Button variant="contained" color="inherit">
                            Post Your Job
                          </Button>
                        </Box>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default CustomerDashboard;
