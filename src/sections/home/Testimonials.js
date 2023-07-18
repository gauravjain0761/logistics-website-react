import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import {
  StyledBgTestBox,
  StyledBoxTest,
  StyledImageBox,
  StyledTypography,
} from "./homeStyled";
import VisibilityIcon from "@mui/icons-material/Visibility";
const Testimonials = () => {
  return (
    <React.Fragment>
      <StyledBoxTest>
        <Container>
          <Box>
            <StyledTypography variant="h3">Testimonials</StyledTypography>
          </Box>
          <Grid container spacing={5}>
            <Grid item md={4} lg={4}>
              <Card content="outlined">
                <CardContent>
                  <StyledImageBox component={"img"} src="/r1.png" />
                  <Typography my="1em">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}s
                    standard dummy text ever since
                  </Typography>
                  <StyledBgTestBox>
                    <Grid container spacing={4}>
                      <Grid item md={4} lg={4}>
                        <Box component={"img"} src="/testimonialimage.png" />
                      </Grid>
                      <Grid item md={8} lg={8}>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="h6">Diego Thompson</Typography>
                        <Typography>Lives in: Atlantis Resort</Typography>
                      </Grid>
                    </Grid>
                  </StyledBgTestBox>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} lg={4}>
              <Card content="outlined">
                <CardContent>
                  <StyledImageBox component={"img"} src="/r1.png" />
                  <Typography my="1em">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}s
                    standard dummy text ever since
                  </Typography>
                  <StyledBgTestBox>
                    <Grid container spacing={4}>
                      <Grid item md={4} lg={4}>
                        <Box component={"img"} src="/testimonialimage.png" />
                      </Grid>
                      <Grid item md={8} lg={8}>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="h6">Diego Thompson</Typography>
                        <Typography>Lives in: Atlantis Resort</Typography>
                      </Grid>
                    </Grid>
                  </StyledBgTestBox>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} lg={4}>
              <Card content="outlined">
                <CardContent>
                  <StyledImageBox component={"img"} src="/r1.png" />
                  <Typography my="1em">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry{"'"}s
                    standard dummy text ever since
                  </Typography>
                  <StyledBgTestBox>
                    <Grid container spacing={4}>
                      <Grid item md={4} lg={4}>
                        <Box component={"img"} src="/testimonialimage.png" />
                      </Grid>
                      <Grid item md={8} lg={8}>
                        <Rating name="read-only" value={4} readOnly />
                        <Typography variant="h6">Diego Thompson</Typography>
                        <Typography>Lives in: Atlantis Resort</Typography>
                      </Grid>
                    </Grid>
                  </StyledBgTestBox>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box textAlign={"right"} my="2em">
            <Button
              startIcon={<VisibilityIcon />}
              variant="outlined"
              color="light"
            >
              See More
            </Button>
          </Box>
        </Container>
      </StyledBoxTest>
    </React.Fragment>
  );
};

export default Testimonials;
