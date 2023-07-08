import Iconify from "@/components/iconify";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBoxhelpful } from "./homeStyled";

const Helpful = () => {
  return (
    <React.Fragment>
      <StyledBoxhelpful>
        <Container>
          <Box>
            <Typography variant="h3" py={5}>It might be helpful</Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item lg={8}>
              <Grid container spacing={4}>
                <Grid item lg={4} >
                  <Box>
                    <Iconify icon="akar-icons:info-fill" width="50px" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">Help Center</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      Customer Service Customer Portal Logins
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} >
                  <Box>
                    <Iconify  icon="bxs:user" width="50px" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">Business</Typography>
                  </Box>
                  <Box>
                    <Typography>
                    New Customer Center Service Guide
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} >
                  <Box>
                    <Iconify  icon="mingcute:ship-fill"  width="50px" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">Ship Online Now</Typography>
                  </Box>
                  <Box>
                    <Typography>
                    Open a Account Ship Managre Software Tracking
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} >
                  <Box>
                    <Iconify   icon="fa6-solid:building"  width="50px" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">Company</Typography>
                  </Box>
                  <Box>
                    <Typography>
                    About Us Careers 
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} >
                  <Box>
                    <Iconify   icon="bxs:news" width="50px" hFlip={true}  />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">News</Typography>
                  </Box>
                  <Box>
                    <Typography>
                    Service News for Customers Events
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={4} >
                  <Box>
                    <Iconify   icon="la:blog" width="50px"  />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="primary">Our Blog</Typography>
                  </Box>
                  <Box>
                    <Typography>
                    Our Blog for customers
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4}>
              <Box component={"img"} src="/helpful.jpg" />
            </Grid>
          </Grid>
        </Container>
      </StyledBoxhelpful>
    </React.Fragment>
  );
};

export default Helpful;
