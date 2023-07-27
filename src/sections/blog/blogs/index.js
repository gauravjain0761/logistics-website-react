import { BannerSection } from "@/components/banner";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Blogs = ({ formik }) => {
  const router = useRouter();
  const [data, setData] = useState("");

  // Api Call
  const BlogApi = async () =>
    await axiosInstance
      .get("api/front/blogs")
      .then((response) => {
        if (response?.status === 200) {
          setData(response.data.view_data?.data);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error, "Blog Page");
      });

  useEffect(() => {
    BlogApi();
  }, []);

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
            {data &&
              data.length > 0 &&
              data.map((elem, index) => {
              console.log(elem,"dattaa")
                return (
                  <Grid item md={4} key={index}>
                    <Card
                      sx={{ borderRadius: "12px", cursor: "pointer" }}
                      onClick={() => router.push(`/blog/blog_detail/${elem.slug}`)}
                    >
                      <Box component="img" src={elem?.image} alt="blog" />
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
                                  {moment(elem?.created_at).format("DD")}
                                </Typography>
                              </Box>
                              <Box py={1}>
                                <Typography fontWeight={700} textAlign="center">
                                  {moment(elem?.created_at).format("MMM")}
                                </Typography>
                              </Box>
                            </Stack>
                          </Grid>
                          <Grid item md={8}>
                            <Stack spacing={0.6}>
                              <Box>
                                <Typography variant="h4">
                                  {elem?.title}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  fontSize="16x"
                                  fontWeight={700}
                                  color="primary"
                                >
                                  {elem?.category}
                                </Typography>
                              </Box>
                              <Box></Box>
                              <Box>
                                <Typography fontSize="15px">
                                  {elem?.description}
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
