import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";

const OurFleet = () => {
  const ref = useRef();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const next = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };
  return (
    <React.Fragment>
      <Box py={8}>
        <Container>
          <Grid container columnSpacing={3}>
            <Grid item lg={4}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "28px !important", mb: 2, fontWeight: 500 }}
                >
                  Our Fleet
                </Typography>
                <Typography
                  color="grey"
                  sx={{ fontSize: "14px", lineHeight: "1.5rem" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry{"'"}s
                  standard dummy text ever sinceLorem Ipsum is simply dummy text
                  of the printing and typesetting industr.
                </Typography>
              </Box>
            </Grid>
            <Grid md={8}>
              <Slider ref={ref} {...settings}>
                <Box>
                  <Stack justifyContent="center" direction="column">
                    <Box
                      component="img"
                      src="/assets/images/home/truck.png"
                      alt="truck"
                    />
                    <Typography variant="h5">Pickup Truck</Typography>
                    <Typography color="grey" fontSize={15}>
                      Extensive equipment and consolidation options
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<Iconify icon="ep:right" color="primary" />}
                      >
                        View All
                      </Button>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack justifyContent="center" direction="column">
                    <Box
                      component="img"
                      src="/assets/images/home/refrigrato.png"
                      alt="truck"
                    />
                    <Typography variant="h5">Refrigetro Truck</Typography>
                    <Typography color="grey" fontSize={15}>
                      Extensive equipment and consolidation options
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<Iconify icon="ep:right" color="primary" />}
                      >
                        View All
                      </Button>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack justifyContent="center" direction="column">
                    <Box
                      component="img"
                      src="/assets/images/home/van.png"
                      alt="truck"
                    />
                    <Typography variant="h5">Van</Typography>
                    <Typography color="grey" fontSize={15}>
                      Extensive equipment and consolidation options
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<Iconify icon="ep:right" color="primary" />}
                      >
                        View All
                      </Button>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Stack justifyContent="center" direction="column">
                    <Box
                      component="img"
                      src="/assets/images/home/carfleet.png"
                      alt="car"
                    />
                    <Typography variant="h5">Car</Typography>
                    <Typography color="grey" fontSize={15}>
                      Extensive equipment and consolidation options
                    </Typography>
                    <Box>
                      <Button
                        endIcon={<Iconify icon="ep:right" color="primary" />}
                      >
                        View All
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Slider>
              <Box sx={{ mt: 4 }}>
                <Stack direction="row" spacing={2}>
                  <Card
                    onClick={previous}
                    variant="outlined"
                    sx={{
                      borderRadius: "50%",
                      borderColor: (theme) =>
                        alpha(theme.palette.grey[900], 0.4),
                    }}
                  >
                    <IconButton>
                      <ArrowBackIcon
                        sx={{
                          color: (theme) =>
                            alpha(theme.palette.common.black, 0.9),
                          fontWeight: 500,
                        }}
                      />
                    </IconButton>
                  </Card>
                  <Card
                    onClick={next}
                    variant="outlined"
                    sx={{
                      borderRadius: "50%",
                      borderColor: (theme) =>
                        alpha(theme.palette.grey[900], 0.4),
                    }}
                  >
                    <IconButton>
                      <ArrowForwardIcon
                        sx={{
                          color: (theme) =>
                            alpha(theme.palette.common.black, 0.9),
                          fontWeight: 500,
                        }}
                      />
                    </IconButton>
                  </Card>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default OurFleet;
