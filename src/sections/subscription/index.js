import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
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

  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Subscription"
      />
      <Box sx={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Stack textAlign="center" mx={18} py={8}>
            <Box>
              <Typography variant="h3">
                Choose the Right Plan For You
              </Typography>
            </Box>
          </Stack>
          <Box pb={6}>
            <Grid container spacing={6}>
              {[...Array(3)].map((elem, index) => {
                const plan = ["A", "B", "C"];
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
                          background: hover === index ? "#ff7534" : "#ff5d010f",
                        }}
                      >
                        <Box>
                          <Typography variant="h4">{`Plan ${plan[index]}`}</Typography>
                        </Box>
                        <Stack
                          direction="row"
                          spacing={0.6}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Typography>$ </Typography>
                          <Typography variant="h3">15</Typography>
                          <Typography fontSize={12} fontWeight={700}>
                            PER MONTH
                          </Typography>
                        </Stack>
                      </Box>
                      <CardContent>
                        <Stack spacing={1}>
                          <Box>
                            <Box textAlign="center">
                              <List>
                                <ListItem>
                                  <ListItemIcon>
                                    <Iconify
                                      icon="charm:square-tick"
                                      color={(theme) =>
                                        theme.palette.success.main
                                      }
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ ml: 7 }}
                                    primary="Online System"
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <Iconify
                                      icon="charm:square-tick"
                                      color={(theme) =>
                                        theme.palette.success.main
                                      }
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ ml: 8.5 }}
                                    primary=" Free apps"
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <Iconify
                                      icon="system-uicons:cross"
                                      color="red"
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ ml: 8.5 }}
                                    primary=" Free apps"
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <Iconify
                                      icon="charm:square-tick"
                                      color={(theme) =>
                                        theme.palette.success.main
                                      }
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ ml: 8 }}
                                    primary="live preview"
                                  />
                                </ListItem>
                                <ListItem>
                                  <ListItemIcon>
                                    <Iconify
                                      icon="system-uicons:cross"
                                      color="red"
                                    />
                                  </ListItemIcon>
                                  <ListItemText
                                    sx={{ ml: 5 }}
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
      </Box>
    </React.Fragment>
  );
};

export default SubscriptionsPage;