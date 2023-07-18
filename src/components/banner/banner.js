import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbComponent } from "../breadcrumb";

const BannerSection = ({ title, alt, src, srcWidth, imgSx }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: { lg: "300px", md: "300px", sm: "100%", xs: "100%" },
          backgroundImage: `url(../../../${src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          zIndex: 5,
          display: "flex",
          juatifyCotent: "left",
          alignItems: "center",
          "&::before": {
            content: '""',
            backgroundImage:
              "linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 100%)",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 7,
          },
        }}
      >
        <CardContent
          sx={{
            paddingTop: {
              lg: "6rem!important",
              md: "6rem!important",
              sm: "3rem!important",
              xs: "3rem!important",
            },
            paddingBottom: {
              lg: "4rem!important",
              md: "4rem!important",
              sm: "2rem!important",
              xs: "2rem!important",
            },
            position: "relative",
            zIndex: 9,
          }}
        >
          {/* <CardContentOverlay> */}
          <Typography
            gutterBottom
            variant="h2"
            component="h1"
            sx={{ fontFamily: "Rufina-Bold" }}
            color="white"
          >
            {title}
          </Typography>
          <Box>
            <BreadcrumbComponent />
          </Box>
          {/* </CardContentOverlay> */}
        </CardContent>
      </Box>
    </React.Fragment>
  );
};

export default BannerSection;
