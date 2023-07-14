import Iconify from "@/components/iconify/Iconify";
import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HelpfulHome = () => {
  return (
    <React.Fragment>
      <Box py={4} sx={{ backgroundColor: "#000000" }}>
        <Container>
          <Container>
            <Grid container spacing={8} borderBottom="1px solid grey" py={4}>
              <Grid item lg={6}>
                <CardContent>
                  <Box component="img" src="/box.png" alt="truck" />
                </CardContent>
              </Grid>
              <Grid item lg={6}>
                <Grid container rowSpacing={6} columnSpacing={10}>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="akar-icons:info-fill"
                        width="35px"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        Help Center
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        Customer Service Customer Portal Logins
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="bxs:user"
                        width="35px"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        Business
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        New Customer Center Service Guide
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="mingcute:ship-fill"
                        width="35px"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        Ship Online Now
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        Open a Account Ship Managre Software Tracking
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="fa6-solid:building"
                        width="35px"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        Company
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        About Us Careers
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="bxs:news"
                        width="35px"
                        hFlip={true}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        News
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        Service News for Customers Events
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item sm={6} md={6} lg={6}>
                    <Box>
                      <Iconify
                        sx={{ color: "#ff7534" }}
                        icon="la:blog"
                        width="35px"
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontSize: "16px !important" }}
                        color="#fff"
                      >
                        Our Blog
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        color="grey"
                        sx={{ fontSize: "14px !important" }}
                      >
                        Our Blog for customers
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default HelpfulHome;
