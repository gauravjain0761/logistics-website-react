import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const SubscriptionsPage = () => {
  const [hover, setHover] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // API FETCH LIST
  const fetchdata = async (type = "driver") => {
    setLoading(true);
    await axiosInstance
      .get(`/api/auth/master/plan/list/${type}`)
      .then((response) => {
        if (response.status === 200) {
          // setLoadingCard(false);
          setData(response?.data.view_data);
          setLoading(false);
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

  console.log("datadata", data);

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: { lg: "350px", md: "350px", sm: "100%", xs: "100%" },
          backgroundImage: `url("/assets/images/contact/contact-us-banner.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          "&::before": {
            content: '""',
            backgroundImage:
              "linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 7,
          },
        }}
      >
        <Stack
          sx={{ zIndex: 8, position: "absolute", left: "8em", top: "5em" }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Box
              component={Link}
              sx={{ textDecoration: "none" }}
              color="common.white"
              href="/"
            >
              Home
            </Box>
            <Box
              sx={{ textDecoration: "none" }}
              component={Link}
              color="common.white"
              href="/dashboard/driver/active_jobs"
            >
              Dashboard
            </Box>
            <Typography color="common.white">Subscription</Typography>
          </Breadcrumbs>
        </Stack>
        <CardContent
          sx={{
            paddingTop: {
              lg: "6rem!important",
              md: "6rem!important",
              sm: "3rem!important",
              xs: "3rem!important",
            },
            paddingBottom: {
              lg: "4rem!important",
              md: "4rem!important",
              sm: "2rem!important",
              xs: "2rem!important",
            },
            position: "relative",
            zIndex: 9,
          }}
        >
          {/* <CardContentOverlay> */}

          <Typography
            gutterBottom
            fontSize={44}
            component="h1"
            fontWeight={600}
            color="white"
          >
            Subscription
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ backgroundColor: "#f5f5f5", pb: 6 }}>
        {loading ? (
          <>
            <SkeletonLoader />
          </>
        ) : (
          <Container>
            <Stack textAlign="center" mx={18} py={8}>
              <Box>
                <Typography variant="h3">
                  Choose the Right Plan For You
                </Typography>
              </Box>
            </Stack>
            <Box pb={14}>
              <Grid container spacing={6}>
                {data &&
                  data?.length > 0 &&
                  data.map((elem, index) => {
                    return (
                      <Grid item md={4} key={index}>
                        <Card
                          sx={{ borderRadius: "5px" }}
                          onMouseOver={() => setHover(index)}
                          onMouseOut={() => setHover(false)}
                        >
                          <Box
                            sx={{
                              textAlign: "center",
                              py: 5,
                              color: hover === index ? "#fff" : "",
                              background:
                                hover === index ? "#ff7534" : "#ff5d010f",
                            }}
                          >
                            <Box>
                              <Typography variant="h4">{elem?.name}</Typography>
                            </Box>
                            <Stack
                              direction="row"
                              spacing={0.6}
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Typography>$ </Typography>
                              <Typography variant="h3">
                                {elem?.price}
                              </Typography>
                              <Typography fontSize={12} fontWeight={500}>
                                PER MONTH
                              </Typography>
                            </Stack>
                          </Box>
                          <CardContent>
                            <Stack spacing={1}>
                              <Box>
                                <Box textAlign="center">
                                  <List>
                                    <ListItem sx={{ position: "relative" }}>
                                      <ListItemIcon
                                        sx={{ position: "absolute" }}
                                      >
                                        <Iconify
                                          icon="charm:square-tick"
                                          color={(theme) =>
                                            theme.palette.success.main
                                          }
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        sx={{ textAlign: "center" }}
                                        primary="Online System"
                                      />
                                    </ListItem>
                                    <ListItem sx={{ position: "relative" }}>
                                      <ListItemIcon
                                        sx={{ position: "absolute" }}
                                      >
                                        <Iconify
                                          icon="charm:square-tick"
                                          color={(theme) =>
                                            theme.palette.success.main
                                          }
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        sx={{ textAlign: "center" }}
                                        primary=" Free apps"
                                      />
                                    </ListItem>
                                    <ListItem sx={{ position: "relative" }}>
                                      <ListItemIcon
                                        sx={{ position: "absolute" }}
                                      >
                                        <Iconify
                                          icon="system-uicons:cross"
                                          color="red"
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        sx={{ textAlign: "center" }}
                                        primary=" Free apps"
                                      />
                                    </ListItem>
                                    <ListItem sx={{ position: "relative" }}>
                                      <ListItemIcon
                                        sx={{ position: "absolute" }}
                                      >
                                        <Iconify
                                          icon="charm:square-tick"
                                          color={(theme) =>
                                            theme.palette.success.main
                                          }
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        sx={{ textAlign: "center" }}
                                        primary="live preview"
                                      />
                                    </ListItem>
                                    <ListItem sx={{ position: "relative" }}>
                                      <ListItemIcon
                                        sx={{ position: "absolute" }}
                                      >
                                        <Iconify
                                          icon="system-uicons:cross"
                                          color="red"
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        sx={{ textAlign: "center" }}
                                        primary="Support unlimited"
                                      />
                                    </ListItem>
                                  </List>
                                </Box>
                              </Box>

                              <Stack alignItems="center">
                                <Button
                                  variant="contained"
                                  width="min-content"
                                  sx={{ px: 5 }}
                                >
                                  Buy Now
                                </Button>
                              </Stack>
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Container>
        )}
      </Box>
    </React.Fragment>
  );
};

export default SubscriptionsPage;
