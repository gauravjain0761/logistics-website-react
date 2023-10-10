import {
  Box,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import SectionOne from "./sectionOne";
import SectionThree from "./sectionThree";
import SectionTwo from "./sectionTwo";

import Subscribe from "./subscribe";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          position: "relative",
        }}
      >
        <Subscribe />
        <CardContent sx={{ position: "relative" }}>
          <Grid
            container
            spacing={{ lg: 0, md: 0, sm: 2, xs: 2 }}
            justifyContent="center"
          >
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box
                component="img"
                width={186}
                height={57}
                src="/assets/images/logo/logo.jpg"
                alt="Logo"
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  background: "transparent",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <SectionOne />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <SectionTwo />
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <SectionThree />
            </Grid>
          </Grid>
          <Box
            component="img"
            src="/home/bgfooter.png"
            width="33%"
            sx={{ position: "absolute", bottom: 0 }}
          />
        </CardContent>
        <Box>
          <Divider />
          <CardContent sx={{ py: 0.5, pb: 0.5 }}>
            <Typography
              component="p"
              textAlign="center"
              mt={2}
              fontWeight={400}
              fontSize={14}
              color="#535353"
            >
              © Copyright 2023 Click & Send. All Rights Reserved
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
