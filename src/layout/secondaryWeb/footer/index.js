import {
  Box,
  CardContent,
  Container,
  Divider,
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
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          // color: (theme) => theme.palette.common.white,
        }}
      >
        <Container>
          <Subscribe />
          <CardContent>
            <Container>
              <Container>
                <Grid
                  container
                  spacing={{ lg: 0, md: 0, sm: 2, xs: 2 }}
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
            </Container>
          </CardContent>
          <Box
            sx={
              {
                // backgroundColor: (theme) => theme.palette.primary.main,
                // color: (theme) => theme.palette.common.white,
              }
            }
          >
            <CardContent sx={{ py: "0px !important" }}>
              <Divider />
            </CardContent>
            <CardContent sx={{ py: 0.5, pb: 0.5 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography
                  component="p"
                  variant="subtitle1"
                  textAlign="center"
                  mt={2}
                  fontSize="14px"
                  color="#666666"
                >
                  © Copyright 2023 Click & Send. All Rights Reserved
                </Typography>
                <Typography
                  component="p"
                  variant="subtitle1"
                  textAlign="center"
                  mt={2}
                  fontSize="14px"
                  color="#666666"
                >
                  Designed by{" "}
                  <Typography component="span" color="primary">
                    Webpristine Technoology
                  </Typography>
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
