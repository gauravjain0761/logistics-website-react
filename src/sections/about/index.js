import { BannerSection } from "@/components/banner";
import axiosInstance from "@/utils/axios";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [readMore, setReadMore] = useState(false);
  const [data, setData] = useState("");
  console.log(data, "aboutus");
  const AboutUsApi = async () =>
    await axiosInstance
      .get("api/front/page-details/about-us")
      .then((response) => {
        if (response?.status === 200) {
          setData(response.data.view_data);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error, "About Us Page");
      });

  useEffect(() => {
    AboutUsApi();
  }, []);
  const handleRead = (boolean) => {
    if (boolean === false) {
      setReadMore(true);
    } else {
      setReadMore(false);
    }
  };
  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="About Us"
      />
      <Box py={6}>
        <Container>
          <Grid container spacing={1} >
            <Grid item md={6} mt={8}>
              <Box
                component="img"
                src={`${data?.base_url}${data?.feature_img}`}
                alt="About us Thumb"
              />
            </Grid>
            <Grid item md={6}>
              <Stack spacing={1.5}>
                <Box>
                  <Typography variant="h3" sx={{ fontSize: "36px" }}>
                    About us
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#64666c",
                      lineHeight: "26px",
                      overflow: "hidden",
                      height: readMore ? "auto" : "16em",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${data && data.body}`,
                      }}
                    ></div>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => handleRead(readMore)}
                  >
                    {readMore ? "Read Less" : "Read More"}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default AboutUs;
