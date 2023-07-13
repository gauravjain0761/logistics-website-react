import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const NewTestimonial = () => {
  return (
    <React.Fragment>
      <Box py={4} sx={{ backgroundColor: "#000000d1" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <Typography color="#fff" variant="h3">
                What Our Client Says
              </Typography>
              <Typography color="grey">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry{"'"}s standard dummy
                text ever .
              </Typography>
            </Grid>
            <Grid item lg={4}>
              <Card>
                <CardContent>
                  <Rating name="read-only" value={4} readOnly/>
                  <Typography mb={1} color="grey">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industryLorem Ipsum is simply dummy text of the
                    printing and typesetting industry
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={3} lg={3}>
                      <Box component={"img"} src="/testimonialimage.png" />
                    </Grid>
                    <Grid item md={9} lg={9}>
                      <Typography variant="h6">Diego Thompson</Typography>
                      <Typography>Lives in: Atlantis Resort</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={4}>
              <Card>
                <CardContent>
                  <Rating name="read-only" value={4} readOnly/>
                  <Typography mb={1} color="grey">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industryLorem Ipsum is simply dummy text of the
                    printing and typesetting industry
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item md={3} lg={3}>
                      <Box component={"img"} src="/testimonialimage.png" />
                    </Grid>
                    <Grid item md={9} lg={9}>
                      <Typography variant="h6">Diego Thompson</Typography>
                      <Typography>Lives in: Atlantis Resort</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default NewTestimonial;
