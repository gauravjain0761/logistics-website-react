import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Box,
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
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Subscription"
      />
      <Box sx={{ backgroundColor: "#f5f5f5" ,pb:6  }}>
        {loading ? (
          <>
            <SkeletonLoader />
          </>
        ) : (
          <Container>
            <Stack textAlign="center" mx={18} py={8} >
              <Box>
                <Typography variant="h3">
                  Choose the Right Plan For You
                </Typography>
              </Box>
            </Stack>
            <Box pb={14}>
              <Grid container spacing={6} >
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
