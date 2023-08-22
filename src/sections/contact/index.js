import { BannerSection } from "@/components/banner";
import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ContactForm from "./form";
import ContactMap from "./map";

const ContactSection = ({ formik }) => {
  // API Fetch
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = useState("");
  const ContactFetchApi = async () => {
    setLoader(true);
    await axiosInstance
      .get("/api/front/contact-details")
      .then((response) => {
        if (response?.status === 200) {
          setLoader(false);
          setData(response.data.view_data);
        } else {
          setLoader(false);
          console.log("error");
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log(error, "About Us Page");
      });
  };

  useEffect(() => {
    ContactFetchApi();
  }, []);

  // API Fetch End
  return (
    <React.Fragment>
      {/* <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Contact Us"
      /> */}
      <Box sx={{ pt: 13, position: "relative", pb: 10 }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: -1,
            width: "100%",
            height: "100%",
          }}
        >
          <Container sx={{ width: "100%", height: "100%" }}>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid item md={8}></Grid>
              <Grid
                item
                md={4}
                sx={{ background: (theme) => theme.palette.common.black }}
              ></Grid>
            </Grid>
          </Container>
        </Box>
        <Container>
          <Box sx={{ mb: 6 }}>
            <Breadcrumbs aria-label="breadcrumb">
              <Box
                component={Link}
                sx={{ textDecoration: "none", fontSize: "14px" }}
                color="inherit"
                href="/"
              >
                Home
              </Box>
              <Typography fontSize={14} color="common.black">
                Contact Us
              </Typography>
            </Breadcrumbs>
          </Box>
          <Grid container spacing={10}>
            <Grid item md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  component="h4"
                  sx={{
                    fontSize: "34.24px",
                  }}
                  fontWeight={700}
                >
                  Get in{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "34.24px",
                    }}
                    fontWeight={700}
                    color="primary"
                  >
                    Touch
                  </Typography>
                </Typography>

                <Typography
                  component="h4"
                  sx={{
                    fontSize: "12px",
                    letterSpacing: "1px !important",
                  }}
                  fontWeight={400}
                >
                  Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                  Eu leo molestie vel, ornare non id blandit netus.
                </Typography>
              </Box>
              <ContactForm formik={formik} />
              <Box sx={{ mt: 4 }}>
                {loader ? (
                  <SkeletonLoader />
                ) : (
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0}
                    justifyContent="space-between"
                  >
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Box>
                        <Box
                          component="img"
                          src="/assets/icon/phone.png"
                          width="auto"
                          height="auto"
                        />
                      </Box>
                      <Stack spacing={0.2}>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                        >
                          Call Us
                        </Typography>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                          color="primary"
                        >
                          {(data && data.mobile) || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Box>
                        <Box
                          component="img"
                          src="/assets/icon/email.png"
                          width="auto"
                          height="auto"
                        />
                      </Box>
                      <Stack spacing={0.2}>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                        >
                          Email
                        </Typography>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                          color="primary"
                        >
                          {(data && data.email) || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Box>
                        <Box
                          component="img"
                          src="/assets/icon/fax.png"
                          width="auto"
                          height="auto"
                        />
                      </Box>
                      <Stack spacing={0.2}>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                        >
                          Address
                        </Typography>
                        <Typography
                          fontWeight={500}
                          sx={{ fontSize: "14px" }}
                          color="primary"
                        >
                          {(data && data.address) || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                )}
              </Box>
            </Grid>
            <Grid item md={6}>
              <ContactMap />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* <Box sx={{ py: 5 }}>
        <Container>
          <Box py={4}>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <Box component="img" src="/contactus.png" alt="Contact" />
              </Grid>
              <Grid item md={6}>
                <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <TextBox
                        size="small"
                        fullWidth
                        start
                        // label="Email"
                        name={`name`}
                        placeholder="Enter your Name"
                        value={formik?.values?.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && formik.errors.name}
                        helperText={formik.touched.name && formik.errors.name}
                      />
                    </Grid>
                    <Grid item md={6}>
                      <TextBox
                        size="small"
                        fullWidth
                        start
                        // label="Email"
                        name={`email`}
                        placeholder="Enter your Email"
                        value={formik?.values?.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextBox
                        size="small"
                        fullWidth
                        start
                        // label="Email"
                        name="subject"
                        placeholder="Enter Subject"
                        value={formik?.values?.subject}
                        onChange={formik.handleChange}
                        error={formik.touched.subject && formik.errors.subject}
                        helperText={
                          formik.touched.subject && formik.errors.subject
                        }
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextBox
                        fullWidth
                        placeholder="Your Message"
                        name="message"
                        value={formik?.values?.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && formik.errors.message}
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                        size={"small"}
                        multiline={true}
                        rows={3}
                      />
                    </Grid>
                    <Grid item md={3}>
                      <Button type="submit" color="primary" variant="contained">
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box> */}
    </React.Fragment>
  );
};

export default ContactSection;
