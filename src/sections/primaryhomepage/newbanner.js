import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
// import { m } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";
const NewBanner = () => {
  return (
    <React.Fragment>
      {/* <Box component={MotionViewport}> */}
      <Box>
        {/* <Container> */}
        <Grid container>
          <Grid item lg={6}>
            <Container sx={{ mt: 8 }}>
              <CardContent>
                <Stack
                  direction="row"
                  alignItems="flex-end"
                  sx={{ overflow: "hidden" }}
                >
                  <CardContent sx={{ pb: "0px !important", width: "100%" }}>
                    <Stack spacing={4}>
                      <Box>
                        <Stack direction="row" justifyContent="space-evenly">
                          <Box>
                            <Stack spacing={4}>
                              <Box
                                component={motion.div}
                                initial={{ x: -300, y: 0 }}
                                animate={{
                                  x: [-300, 0, 0, 0],
                                  y: [0, 0, -250, -250],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  delay: 0,
                                 duration:4,
                                 times: [0, 0.1, 0.9, 1],
                                  ease: "easeInOut",
                                }}
                              >
                                <Box
                                  component="img"
                                  sx={{ width: "200px" }}
                                  src="/assets/images/home/new/download-app.png"
                                  alt="truck"
                                />
                              </Box>
                              <Box
                                component={motion.div}
                                initial={{ x: -300, y: 0 }}
                                animate={{
                                  x: [-300, 0, 0, 0],
                                  y: [0, 0, -280, -280],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  delay: 0.1,
                                  duration: 4,
                                  times: [0, 0.1, 0.9, 1],
                                  ease: "easeInOut",
                                }}
                              >
                                <Box
                                  component="img"
                                  sx={{ width: "200px" }}
                                  src="/assets/images/home/new/start-job.png"
                                  alt="truck"
                                />
                              </Box>
                            </Stack>
                          </Box>
                          <Box sx={{ mt: 6 }}>
                            <Stack spacing={4}>
                              <Box
                                component={motion.div}
                                initial={{ x: 300, y: 0 }}
                                animate={{
                                  x: [300, 0, 0, 0],
                                  y: [0, 0, -250, -250],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  delay: 0,
                                  duration: 4,
                                  times: [0, 0.1, 0.9, 1],
                                  ease: "easeInOut",
                                }}
                              >
                                <Box
                                  component="img"
                                  sx={{ width: "200px" }}
                                  src="/assets/images/home/new/place-bid.png"
                                  alt="truck"
                                />
                              </Box>
                              <Box
                                component={motion.div}
                                initial={{ x: 300, y: 0 }}
                                animate={{
                                  x: [300, 0, 0, 0],
                                  y: [0, 0, -300, -300],
                                }}
                                transition={{
                                  repeat: Infinity,
                                  delay: 0.1,
                                  duration: 4,
                                  times: [0, 0.1, 0.9, 1],
                                  ease: "easeInOut",
                                }}
                              >
                                <Box
                                  component="img"
                                  sx={{ width: "200px" }}
                                  src="/assets/images/home/new/invoice.png"
                                  alt="truck"
                                />
                              </Box>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                      <Box
                        component={motion.div}
                        initial={{ rotate: 0, scale: 0 }}
                        animate={{
                          rotate: 360,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 1.2,
                          ease: "easeIn",
                        }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box
                            component="img"
                            sx={{ width: "400px" }}
                            src="/assets/images/home/new/banner-image.jpg"
                            alt="truck"
                          />
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Stack>
              </CardContent>
            </Container>
          </Grid>
          <Grid item lg={6} sx={{ position: "relative" }}>
            <Box
              sx={{
                background: (theme) => theme.palette.primary.main,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: "100%",
                zIndex: -1,
              }}
            />
            <Stack
              spacing={6}
              alignItems="flex-end"
              direction="row"
              justifyContent="left"
              height="100%"
            >
              <CardContent sx={{ px: 6, mb: 6 }}>
                <Stack spacing={0} mb={15}>
                  <Box
                    component={motion.div}
                    initial={{ x: 500, y: 0 }}
                    animate={{
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      type:"spring",
                      stiffness: 500, damping: 10,
                      delay: 0,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Typography color="common.white" variant="h3">
                      Your Logistic Solution
                    </Typography>
                    <Typography color="common.white" variant="h4">
                      {" "}
                      For Business, For Client &<br /> For Driver{"'"}s
                    </Typography>
                  </Box>
                </Stack>
                <Box>
                  <Stack direction="row" alignItemd="flex-end" height="100%">
                    <Box>
                      <Stack direction="row" alignItems={"center"}>
                        <Box
                          component={motion.div}
                          initial={{ scale: 0 }}
                          animate={{
                            scale: 1,
                          }}
                          transition={{
                            delay: 0,
                            duration: 1.2,
                            ease: "easeInOut",
                          }}
                        >
                          <Button
                            variant="contained"
                            size="large"
                            sx={{
                              backgroundColor: "#000",
                              ":hover": {
                                backgroundColor: "#555555",
                              },
                            }}
                          >
                            <Typography fontWeight={500}>
                              For Clients
                            </Typography>
                          </Button>
                        </Box>
                        <Box
                          component={motion.div}
                          initial={{ scale: 0 }}
                          animate={{
                            scale: 1,
                          }}
                          transition={{
                            delay: 0,
                            duration: 1.2,
                            ease: "easeInOut",
                          }}
                        >
                          <Button
                            variant="outlined"
                            size="large"
                            color="inherit"
                            sx={{
                              margin: "12px",
                              color: "#000",
                              borderColor: "#555555",
                              backgroundColor: "#ffffff",
                              ":hover": {
                                borderColor: "#555555",
                                backgroundColor: "#ffffff",
                              },
                            }}
                          >
                            <Typography fontWeight={500}>
                              For Business
                            </Typography>
                          </Button>
                        </Box>
                        <Box
                          component={motion.div}
                          initial={{ scale: 0 }}
                          animate={{
                            scale: 1,
                          }}
                          transition={{
                            delay: 0,
                            duration: 1.2,
                            ease: "easeInOut",
                          }}
                        >
                          <Button
                            variant="contained"
                            size="large"
                            sx={{
                              margin: "12px",
                              backgroundColor: "#000",
                              ":hover": {
                                backgroundColor: "#555555",
                              },
                            }}
                          >
                            <Typography fontWeight={500}>For Driver</Typography>
                          </Button>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </CardContent>
            </Stack>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </React.Fragment>
  );
};

export default NewBanner;
