import Iconify from "@/components/iconify/Iconify";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Testimonials = () => {
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
    <>
      <Box sx={{ backgroundColor: "#FFF8F4", py: 8,pb:20, position: "relative" }}>
        <Container>
          <Box textAlign="center" mb={8}>
            <Box>
              <Typography variant="h6" color="primary">
                Testimonials
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">
                What our clients say about us.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Slider {...settings} ref={ref}>
              {[...Array(4)].map((elem, index) => {
                return (
                  <Box key={index} px={1}>
                    <Card
                      variant="outlined"
                      sx={{
                        borderColor: (theme) => theme.palette.primary.main,
                      }}
                    >
                      <CardContent>
                        <Stack alignItems="center">
                          <Box>
                            <Avatar
                              src="/testimonialimage.png"
                              sx={{ width: "100px", height: "100px" }}
                            />
                          </Box>
                          <Box>
                            <Typography variant="subtitle1">
                              James Pattinson
                            </Typography>
                          </Box>
                          <Box>
                            <Rating value={4} readOnly size="small" />
                          </Box>
                          <Box>
                            <Typography textAlign="center" fontSize={14}>
                              “Lobortis leo pretium facilisis amet nisl at nec.
                              Scelerisque risus tortor donec ipsum consequat
                              semper consequat adipiscing ultrices.”
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                );
              })}
            </Slider>
            <Box sx={{ position: "absolute", top: "58%", left: "4%" }}>
              <Card
                onClick={previous}
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <IconButton>
                  <ArrowBackIcon
                    sx={{
                      color: (theme) => alpha(theme.palette.common.white, 0.9),
                      fontWeight: 500,
                    }}
                  />
                </IconButton>
              </Card>
            </Box>
            <Box sx={{ position: "absolute", top: "58%", right: "4%" }}>
              <Card
                onClick={next}
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  backgroundColor: (theme) => theme.palette.primary.main,
                }}
              >
                <IconButton>
                  <ArrowForwardIcon
                    sx={{
                      color: (theme) => alpha(theme.palette.common.white, 0.9),
                      
                      fontWeight: 500,
                    }}
                  />
                </IconButton>
              </Card>
            </Box>
          
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Testimonials;
