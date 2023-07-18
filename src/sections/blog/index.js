import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Blogs = ({ formik }) => {
  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Blog"
      />
      <Box py={9}>
        <Container>
          <Grid container spacing={4}>
            {[...Array(3)].map((elem, index) => {
              return (
                <Grid item md={4} key={index}>
                  <Card sx={{ borderRadius: "12px" }}>
                    <Box component="img" src="/blog.jpg" alt="blog" />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item md={4}>
                          <Stack alignItems="center">
                            <Box
                              sx={{
                                border: "2px solid #e1e1e1",
                                textAlign: "center",
                                borderRadius: "10px",
                                width: "60px",
                                height: "60px",
                              }}
                            >
                              <Typography
                                fontSize="30px"
                                sx={{ lineHeight: "56px" }}
                                fontWeight={700}
                                color="primary"
                              >
                                25
                              </Typography>
                            </Box>
                            <Box py={1}>
                              <Typography fontWeight={700} textAlign="center">
                                Jan
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                        <Grid item md={8}>
                          <Stack spacing={0.6}>
                            <Box>
                              <Typography variant="h4">
                                What is Lorem Ipsum?
                              </Typography>
                            </Box>
                            <Box>
                              <Typography fontSize="14px">
                                Comments 10
                              </Typography>
                            </Box>
                            <Box>
                              <Typography fontSize="14px">Courier</Typography>
                            </Box>
                            <Box>
                              <Typography fontSize="15px">
                                Auisy nostrud exercitation ullamc laboris
                                aliquip ex bea consequat duis autese dolore
                                magna aliqua nim.
                              </Typography>
                            </Box>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Blogs;
