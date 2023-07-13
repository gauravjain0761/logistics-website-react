import {
  Box,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SectionFour from "./sectionFour";
import Subscribe from "./subscribe";

const Footer = () => {
  return (
    <>
      <Subscribe />
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          color: (theme) => theme.palette.common.white,
        }}
      >
        <CardContent>
          <Container>
            <Grid
              container
              spacing={{ lg: 8, md: 8, sm: 3, xs: 3 }}
              justifyContent="center"
            >
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <SectionOne />
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <SectionTwo />
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <SectionThree />
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <SectionFour />
              </Grid>
            </Grid>
          </Container>
        </CardContent>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.common.white,
          }}
        >
          <CardContent sx={{ py: 0.5, pb: 0.5 }}>
            <Typography
              component="p"
              variant="subtitle1"
              textAlign="center"
              mt={2}
              fontSize="14px"
            >
              2023 © Webpristine Technology.
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
