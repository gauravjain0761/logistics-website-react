import Iconify from "@/components/iconify/Iconify";
import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HelpfulHome = () => {
  return (
    <React.Fragment>
      <Box py={4} sx={{ backgroundColor: "#000000" }}>
        <Container>
          <Grid container spacing={1} borderBottom="1px solid grey" py={4}>
            <Grid item lg={6}>
              <CardContent>
                <Box component="img" src="/box.png" alt="truck" />
              </CardContent>
            </Grid>
            <Grid item lg={6}>
              <Grid container spacing={4}>
                <Grid item sm={6} md={6} lg={6}>
                  <Box>
                    <Iconify
                      sx={{ color: "#ff7534" }}
                      icon="akar-icons:info-fill"
                      width="35px"
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="#fff">
                      Help Center
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">
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
                    <Typography variant="h6" color="#fff">
                      Business
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">
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
                    <Typography variant="h6" color="#fff">
                      Ship Online Now
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">
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
                    <Typography variant="h6" color="#fff">
                      Company
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">About Us Careers</Typography>
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
                    <Typography variant="h6" color="#fff">
                      News
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">
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
                    <Typography variant="h6" color="#fff">
                      Our Blog
                    </Typography>
                  </Box>
                  <Box>
                    <Typography color="grey">Our Blog for customers</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default HelpfulHome;
