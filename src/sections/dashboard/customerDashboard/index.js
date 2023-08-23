import DashboardCard from "@/module/dashboard/customerCard/dashboardCard";
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
import { useRouter } from "next/router";
import React from "react";

const CustomerDashboard = () => {
  const router = useRouter();

  return (
    <React.Fragment>
      <Container sx={{ my: 4, mt: 10 }}>
        <Stack spacing={4}>
          <DashboardCard />
          <Box>
            <Card
              sx={{
                backgroundImage: "url(/customerDashboard.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                py:6,
                px:6
                
              }}
            >
              <CardContent>
                <Grid container>
                  {/* <Grid item md={7}>
                    <Box
                      component={"img"}
                      src="/assets/images/dashboard/logistic.png"
                    />
                  </Grid> */}
                  <Grid item md={5}>
                    <Stack direction={"row"} alignItems="center" height="100%">
                      <Stack spacing={2}>
                        <Typography
                          variant="h3"
                          fontWeight={600}
                          color="common.black"
                        >
                          Lorem ipsum
                        </Typography>
                        <Typography color="common.black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed pretium augue ac justo semper, vitae
                          ultrices velit cursus. Aenean tristique vel mi non
                          pulvinar.
                        </Typography>
                        <Box>
                          <Button
                            variant="contained"
                            onClick={() =>
                              router.push(
                                "/dashboard/customer/job_post_form/create"
                              )
                            }
                            color="dark"
                            // sx={{
                            //   py: 1.4,
                            //   borderRadius: "50px",
                            //   width: "20em",
                            //   ":hover": {
                            //     backgroundColor: "#000",
                            //     color: "#fff",
                            //   },
                            // }}
                          >
                            POST YOUR FIRST JOB
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
