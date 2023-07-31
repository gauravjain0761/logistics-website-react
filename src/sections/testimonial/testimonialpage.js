import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBgTest, StyledLine } from "./testimonialStyled";

const TestimonialPage = () => {
  return (
    <React.Fragment>
      <StyledBgTest>
        <Container>
          <Box py={6}>
            <Stack spacing={1} alignItems="center" color="#fff">
              <Typography variant="h3">Actual Customer Reviews</Typography>
              <Typography fontWeight={600}>
                And that{"'"}s just a few
              </Typography>
            </Stack>
            <Box py={6}>
              <Grid container spacing={6}>
                {[...Array(3)].map((elem, index) => {
                  return (
                    <Grid item sm={12} md={4} key={index}>
                      <Card sx={{ borderRadius: "0px", position: "relative" }}>
                        <CardContent>
                          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                            <Box
                              component="img"
                              src="/r1.png"
                              width="30px"
                              height="22px"
                              alt="testimonial icon"
                            />
                            <Box>
                              <Typography>
                                When i Want a professional Lorem Ipsum is simply
                                dummy text of the printing and typesetting
                                industryLorem Ipsum is simply dummy text of the
                                printing and typesetting industry.
                              </Typography>
                            </Box>
                          </Stack>
                          <Divider sx={{ mb: 2 }} />
                          <Stack direction="row" justifyContent="space-between">
                            <Box>
                              <Box>
                                <Typography color="primary" fontWeight={600}>
                                  Jessica
                                </Typography>
                              </Box>

                              <Box>
                                <Rating value={4} readOnly />
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                position: "relative",
                                zIndex: "1",
                              }}
                            >
                              <Avatar
                                alt="avatar"
                                src="/testimonialimage.png"
                                sx={{ width: 60, height: 60 }}
                              />
                            </Box>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Box>
        </Container>
      </StyledBgTest>
    </React.Fragment>
  );
};

export default TestimonialPage;
