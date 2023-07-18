import { BannerSection } from "@/components/banner";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const BlogDetail = () => {
  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Blog Detail"
      />
      <Box py={5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Box component="img" src="/serviceblog.jpg" />
            </Grid>
            <Grid item md={4}>
              <Card sx={{ borderRadius: "5px" }}>
                <CardContent>
                  <Box borderBottom="2px solid rgba(224, 224, 224, 0.5)">
                    <Typography variant="h5" fontWeight={500} pb={1.5}>
                      Recent Post
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default BlogDetail;
