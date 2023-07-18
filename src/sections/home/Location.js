import Iconify from "@/components/iconify";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {  StyledLocBox } from "./homeStyled";

const Location = () => {
  return (
    <React.Fragment>
      <StyledLocBox>
        <Container>
          <Box>
            <Typography variant="h3" fontWeight={400} textAlign="center" py={5}>
              Our Presence
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item lg={8}>
              <Box>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14507.386011003215!2d73.68892634999999!3d24.628974799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688967778551!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Card content="outlined">
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item lg={3}>
                      <Iconify
                        icon="mdi:location"
                        width="60px"
                        color="#ff7534"
                      />
                    </Grid>
                    <Grid item lg={9}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        , IA 50010
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card content="outlined" sx={{margin:"2.2em 0"}}>
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item lg={3}>
                      <Iconify
                        icon="mdi:location"
                        width="60px"
                        color="#ff7534"
                      />
                    </Grid>
                    <Grid item lg={9}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        , IA 50010
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card content="outlined">
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item lg={3}>
                      <Iconify
                        icon="mdi:location"
                        width="60px"
                        color="#ff7534"
                      />
                    </Grid>
                    <Grid item lg={9}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        , IA 50010
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </StyledLocBox>
    </React.Fragment>
  );
};

export default Location;
