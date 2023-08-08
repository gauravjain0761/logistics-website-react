import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { StyledBgTest, StyledLine } from "./testimonialStyled";
import axiosInstance from "@/utils/axios";

const TestimonialPage = () => {
  const [data, setData] = useState([]);
  const [loadingCard, setLoadingCard] = useState(false);
  const fetchTestApi = async () => {
    setLoadingCard(true);

    await axiosInstance
      .get("api/front/testimonials")
      .then((response) => {
        if (response?.status === 200) {
          setLoadingCard(false);

          setData(response?.data.view_data);
        } else {
          setLoadingCard(false);

          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error, "Testimonial Page");
      });
  };
  useEffect(() => {
    fetchTestApi();
  }, []);

  console.log("datadatadata", data);
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
              <Grid
                container
                spacing={6}
                justifyContent={loadingCard ? "center" : "left"}
              >
                {loadingCard ? (
                  <Box mt={4}>
                    <Container maxWidth>
                      <Grid container spacing={8}>
                        {[...Array(3)].map((index) => {
                          return (
                            <Grid item md={4} key={index}>
                              <Skeleton
                                variant="rectangular"
                                width={300}
                                height={230}
                              />

                              <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                              >
                                <Skeleton
                                  variant="text"
                                  width="100%"
                                  sx={{ fontSize: "3rem" }}
                                />
                                <Skeleton
                                  variant="circular"
                                  width={50}
                                  height={50}
                                />
                              </Stack>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Container>
                  </Box>
                ) : (
                  <>
                    {!loadingCard && data.length <= 0 && (
                      <Grid container justifyContent="center">
                        <Grid item md={12}>
                          <Stack
                            alignItems="center"
                            justifyContent="center"
                            py={5}
                          >
                            <Typography variant="h4" textAlign="center">
                              There is no testimonial
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    )}
                    {data &&
                      data.map((elem, index) => {
                        return (
                          <Grid item sm={12} md={4} key={index}>
                            <Card
                              sx={{ borderRadius: "0px", position: "relative" }}
                            >
                              <CardContent>
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  sx={{ mb: 2 }}
                                >
                                  <Box
                                    component="img"
                                    src={`${elem?.base_url}${elem?.image}`}
                                    width="30px"
                                    height="22px"
                                    alt="testimonial icon"
                                  />
                                  <Box sx={{ minHeight: "11em" }}>
                                    <Typography>{elem.text}</Typography>
                                  </Box>
                                </Stack>
                                <Divider sx={{ mb: 2 }} />
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                >
                                  <Box>
                                    <Box>
                                      <Typography
                                        color="primary"
                                        fontWeight={600}
                                      >
                                        {elem.name}
                                      </Typography>
                                    </Box>

                                    <Box>
                                      <Rating value={elem.rating} readOnly />
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      position: "relative",
                                    }}
                                  >
                                    <Avatar
                                      alt="avatar"
                                      src={`${elem.base_url}${elem.image}`}
                                      sx={{ width: 60, height: 60 }}
                                    />
                                  </Box>
                                </Stack>
                              </CardContent>
                            </Card>
                          </Grid>
                        );
                      })}
                  </>
                )}
              </Grid>
            </Box>
          </Box>
        </Container>
      </StyledBgTest>
    </React.Fragment>
  );
};

export default TestimonialPage;
