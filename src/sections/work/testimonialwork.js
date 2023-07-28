import React, { Component } from "react";
import Slider from "react-slick";
import Test from "./test";
import { Box, Container, Typography } from "@mui/material";
import { CarouselArrows } from "@/components/carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const TestimonialSlider = () => {
  const carouselRef = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          py: 6,
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight={500}
            color="#fff"
            textAlign="center"
          >
            Testimonial
          </Typography>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrevious}
              filled
              NextArrowIcon={ArrowForwardIos}
              PreviousArrowIcon={ArrowBackIos}
            >
              <Slider ref={carouselRef} {...settings}>
                <Box>
                  <Test />
                </Box>
                <Box>
                  <Test />
                </Box>
                <Box>
                  <Test />
                </Box>
                <Box>
                  <Test />
                </Box>
              </Slider>
            </CarouselArrows>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};
export default TestimonialSlider;
