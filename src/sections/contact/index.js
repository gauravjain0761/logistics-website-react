import { BannerSection } from "@/components/banner";
import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

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
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Contact Us"
      />
      <Box sx={{ py: 5 }}>
        <Container>
          {loader ? (
            <SkeletonLoader />
          ) : (
            <Grid container spacing={4}>
              <Grid item md={4}>
                <Card sx={{ py: 5, borderRadius: "5px" }}>
                  <CardContent>
                    <Stack alignItems="center">
                      <Box
                        sx={{
                          borderRight: "5px dashed #ff7534",
                          borderBottom: "5px solid #ff7532",
                          display: "inline-block",
                          marginBottom: "30px",
                          padding: "8px",
                          borderRadius: "50%",
                        }}
                      >
                        <Iconify
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: (theme) =>
                              theme.palette.primary.contrastText,
                            borderRadius: "50%",
                            display: "inline-block",
                            height: "90px",
                            width: "90px",
                            p: 2,
                          }}
                          icon="majesticons:phone"
                          hFlip={true}
                          width={70}
                        />
                      </Box>
                      <Stack alignItems="center">
                        <Typography fontWeight={600} variant="h5">
                          Call Us
                        </Typography>
                        <Typography>
                          {(data && data.mobile) || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ py: 5, borderRadius: "5px" }}>
                  <CardContent>
                    <Stack alignItems="center">
                      <Box
                        sx={{
                          borderRight: "5px dashed #ff7534",
                          borderBottom: "5px solid #ff7532",
                          display: "inline-block",
                          marginBottom: "30px",
                          padding: "8px",
                          borderRadius: "50%",
                        }}
                      >
                        <Iconify
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: (theme) =>
                              theme.palette.primary.contrastText,
                            borderRadius: "50%",
                            display: "inline-block",
                            height: "90px",
                            width: "90px",
                            p: 2,
                          }}
                          icon="fluent:mail-20-filled"
                          width={70}
                        />
                      </Box>
                      <Stack alignItems="center">
                        <Typography fontWeight={600} variant="h5">
                          Email
                        </Typography>
                        <Typography>{(data && data.email) || "N/A"}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={4}>
                <Card sx={{ py: 5, borderRadius: "5px" }}>
                  <CardContent>
                    <Stack alignItems="center">
                      <Box
                        sx={{
                          borderRight: "5px dashed #ff7534",
                          borderBottom: "5px solid #ff7532",
                          display: "inline-block",
                          marginBottom: "30px",
                          padding: "8px",
                          borderRadius: "50%",
                        }}
                      >
                        <Iconify
                          sx={{
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
                            color: (theme) =>
                              theme.palette.primary.contrastText,
                            borderRadius: "50%",
                            display: "inline-block",
                            height: "90px",
                            width: "90px",
                            p: 2,
                          }}
                          icon="mdi:location"
                          hFlip={true}
                          width={70}
                        />
                      </Box>
                      <Stack alignItems="center">
                        <Typography fontWeight={600} variant="h5">
                          Address
                        </Typography>
                        <Typography>
                          {(data && data.address) || "N/A"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
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
      </Box>
    </React.Fragment>
  );
};

export default ContactSection;
