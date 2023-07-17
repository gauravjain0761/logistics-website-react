import Iconify from "@/components/iconify/Iconify";
import DashboardCard from "@/module/dashboard/dashboardCard";
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
import React, { useState } from "react";

const JobList = () => {
  const [layout, setLayout] = useState(true);
  const handleLayout = (key) => {
if(key === "list"){
  setLayout(true)
}else{
  setLayout(false)
}
  };
  return (
    <React.Fragment>
      <Box py={4}>
        <Container>
          <Box py={4}>
            <Stack direction="row" justifyContent="space-between" py={3}>
              <Stack direction="row" spacing={1}>
                <Typography fontSize="1.75rem" fontWeight={700} color="primary">
                  Total Bid{"'"}s
                </Typography>
                <Box>
                  <Typography
                    fontSize="1.3rem"
                    fontWeight={700}
                    backgroundColor={(theme) => theme.palette.primary.main}
                    color="white"
                    borderRadius="50%"
                    py={0.3}
                    px={0.6}
                  >
                    05
                  </Typography>
                </Box>
              </Stack>
              <Stack direction="row">
                <Button onClick={()=>handleLayout("list")}>
                  <Iconify icon="ion:list-sharp" width={20} />
                </Button>
                <Button>
                  <Iconify onClick={()=>handleLayout("grid")} icon="system-uicons:grid" width={20} />
                </Button>
              </Stack>
            </Stack>
            <Stack alignItems="center">
              <Box
                width="100%"
                height="24em"
                component="img"
                src="/assets/images/dashboard/map.png"
                alt="map"
              />
            </Stack>
            {layout ? (
              <Box py={4}>
                {[...Array(3)].map((elem, index) => {
                  return (
                    <Card
                      key={index}
                      sx={{
                        mt: 2,
                        borderRadius: "0.25rem",
                        boxShadow: "3px 3px 2px 2px #b1b1b177",
                      }}
                    >
                      <Box
                        p={2}
                        backgroundColor="rgba(0,0,0,.03)"
                        borderBottom="1px solid rgba(0,0,0,.125)"
                      >
                        <Stack direction="row" justifyContent="space-between">
                          <Stack direction="row" spacing={1}>
                            <Typography fontWeight={600}>
                              Driver Name :{" "}
                            </Typography>
                            <Typography fontWeight={600} color="primary">
                              Mr. Gaurav
                            </Typography>
                          </Stack>
                          <Stack direction="row" spacing={1}>
                            <Typography fontWeight={600}>
                              Job Success Rate:{" "}
                            </Typography>
                            <Typography fontWeight={600} color="primary">
                              98 %
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item md={2}>
                            <Box
                              sx={{
                                border: 5,
                                borderColor: (theme) =>
                                  theme.palette.primary.main,
                                borderRadius: "50%",
                                width: "max-content",
                              }}
                            >
                              <Box
                                component="img"
                                width={90}
                                borderRadius="50%"
                                src="/assets/images/dashboard/portfolio.jpeg"
                                alt="profile"
                              />
                            </Box>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={400} fontSize="1.5rem">
                                Bid :{" "}
                              </Typography>
                              <Typography
                                fontWeight={600}
                                fontSize="1.5rem"
                                color="primary"
                              >
                                ₹ 500
                              </Typography>
                            </Stack>
                          </Grid>
                          <Grid item md={8}>
                            <Stack direction="row" spacing={5}>
                              <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400}>
                                  Earned:{" "}
                                </Typography>
                                <Typography
                                  fontWeight={600}
                                  fontSize="16px"
                                  color="primary"
                                >
                                  ₹ 30K+
                                </Typography>
                              </Stack>
                              <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400}>
                                  Rating:{" "}
                                </Typography>
                                <Typography
                                  fontWeight={600}
                                  fontSize="16px"
                                  color="primary"
                                >
                                  5 / 5
                                </Typography>
                              </Stack>
                            </Stack>
                            <Box mt={2}>
                              <Typography>
                                Note From Driver : Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
                              </Typography>
                            </Box>
                          </Grid>
                          <Grid item md={2}>
                            <Stack spacing={0.5}>
                              <Box>
                                <Button
                                  variant="contained"
                                  startIcon={
                                    <Iconify icon="majesticons:chat" />
                                  }
                                  color="dark"
                                  fullWidth
                                >
                                  Open For Chat
                                </Button>
                              </Box>
                              <Box>
                                <Button
                                  variant="contained"
                                  startIcon={
                                    <Iconify icon="material-symbols:check-circle" />
                                  }
                                  color="primary"
                                  fullWidth
                                >
                                  Start Job
                                </Button>
                              </Box>
                            </Stack>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
              </Box>
            ) : (
              <Box>
                <Grid container spacing={2}>
                  {[...Array(4)].map((elem, index) => {
                    return (
                      <Grid item md={4} key={index} px={4} mt={5}>
                        <Card
                          sx={{
                            borderRadius: "0.25rem",
                            boxShadow: "3px 3px 2px 2px #b1b1b177",
                          }}
                        >
                          <Box
                            py={2}
                            px={5}
                            backgroundColor="rgba(0,0,0,.03)"
                            borderBottom="1px solid rgba(0,0,0,.125)"
                          >
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Driver Name :{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                Mr. Gaurav
                              </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                              <Typography fontWeight={600}>
                                Job Success Rate:{" "}
                              </Typography>
                              <Typography fontWeight={600} color="primary">
                                98 %
                              </Typography>
                            </Stack>
                          </Box>
                          <CardContent>
                            <Box>
                              <Grid container spacing={0}>
                                <Grid item md={5}>
                                  <Box
                                    sx={{
                                      border: 5,
                                      borderColor: (theme) =>
                                        theme.palette.primary.main,
                                      borderRadius: "50%",
                                      width: "max-content",
                                    }}
                                  >
                                    <Box
                                      component="img"
                                      width={90}
                                      borderRadius="50%"
                                      src="/assets/images/dashboard/portfolio.jpeg"
                                      alt="profile"
                                    />
                                  </Box>
                                </Grid>
                                <Grid item md={1}></Grid>
                                <Grid item md={6}>
                                  <Box>
                                    <Box mb={4}>
                                      <Stack direction="row" spacing={1}>
                                        <Typography
                                          fontWeight={400}
                                          fontSize="1.5rem"
                                        >
                                          Bid :{" "}
                                        </Typography>
                                        <Typography
                                          fontWeight={600}
                                          fontSize="1.5rem"
                                          color="primary"
                                        >
                                          ₹ 500
                                        </Typography>
                                      </Stack>
                                    </Box>
                                    <Stack direction="row" spacing={1}>
                                      <Typography fontWeight={400}>
                                        Earned:{" "}
                                      </Typography>
                                      <Typography
                                        fontWeight={600}
                                        fontSize="16px"
                                        color="primary"
                                      >
                                        ₹ 30K+
                                      </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                      <Typography fontWeight={400}>
                                        Rating:{" "}
                                      </Typography>
                                      <Typography
                                        fontWeight={600}
                                        fontSize="16px"
                                        color="primary"
                                      >
                                        5 / 5
                                      </Typography>
                                    </Stack>
                                  </Box>
                                </Grid>
                              </Grid>
                              <Box py={2}>
                                <Typography>
                                  Note From Driver :Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit, sed do eiusmod
                                  tempor incididunt ut labore et dolore magna
                                  aliqua. Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </Typography>
                              </Box>
                              <Stack spacing={0.5}>
                                <Box>
                                  <Button
                                    variant="contained"
                                    startIcon={
                                      <Iconify icon="majesticons:chat" />
                                    }
                                    color="dark"
                                    fullWidth
                                  >
                                    Open For Chat
                                  </Button>
                                </Box>
                                <Box>
                                  <Button
                                    variant="contained"
                                    startIcon={
                                      <Iconify icon="material-symbols:check-circle" />
                                    }
                                    color="primary"
                                    fullWidth
                                  >
                                    Start Job
                                  </Button>
                                </Box>
                              </Stack>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default JobList;
