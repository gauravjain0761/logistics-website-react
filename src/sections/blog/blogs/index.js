import { BannerSection } from "@/components/banner";
import { JobSekelton } from "@/components/not-found";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Avatar,
  Box,
  Button,
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
  const [loader, setLoader] = React.useState(false);
  const [data, setData] = useState("");

  // Api Call
  const BlogApi = async () => {
    setLoader(true);
    await axiosInstance
      .get("api/front/blogs")
      .then((response) => {
        if (response?.status === 200) {
          setLoader(false);
          setData(response.data.view_data?.data);
        } else {
          setLoader(false);
          console.log("error");
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log(error, "Blog Page");
      });
  };
  useEffect(() => {
    BlogApi();
  }, []);

  return (
    <React.Fragment>
      <BannerSection
        src="/blog_banner.png"
        alt=""
        title="Welcome to Our "
        titleLastWord="Blogs"
        subTitle="Here are some Informational Blogs to enhance
your understanding of of our website."
      />
      <Box py={9}>
        <Container>
          {loader ? (
            <SkeletonLoader />
          ) : (
            <Grid container spacing={4}>
              {data && data.length > 0 ? (
                data.map((elem, index) => {
                  console.log(elem, "dattaa");
                  return (
                    <Grid item md={4} key={index}>
                      <Card
                        sx={{
                          borderRadius: "5px",
                          height: "430px",
                        }}
                     
                      >
                        <Box
                          component="img"
                          width="100%"
                          height={200}
                          sx={{ objectFit: "cover" }}
                          src={`${elem?.base_url}${elem?.image}`}
                          alt="blog"
                        />
                        <CardContent>
                          <Stack spacing={1}>
                            <Box>
                              <Typography fontSize={18} fontWeight={600}>
                                {elem?.title}
                              </Typography>
                            </Box>

                          {/* <Stack alignItems="center">
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
                                    fontWeight={500}
                                    color="primary"
                                  >
                                    {moment(elem?.created_at).format("DD")}
                                  </Typography>
                                </Box>
                                <Box py={1}>
                                  <Typography
                                    fontWeight={500}
                                    textAlign="center"
                                  >
                                    {moment(elem?.created_at).format("MMM")}
                                  </Typography>
                                </Box>
                              </Stack> */}
                          <Stack
                            spacing={1}
                            direction="row"
                            alignItems="center"
                          >
                            <Box>
                              <Avatar />
                            </Box>
                            <Box>
                              <Typography
                                component="h2"
                                fontSize={18}
                                fontWeight={500}
                              >
                                User Name
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                fontWeight={400}
                                fontSize={14}
                                component="h6"
                                ml={5}
                                color={(theme) => theme.palette.grey[500]}
                              >
                                {moment(elem?.created_at).format("MMM-DD-YYYY")}
                              </Typography>
                            </Box>
                          </Stack>
                          <Box >
                                  <Typography fontSize={14} color={(theme) => theme.palette.grey[500]}>
                                    {elem?.description}
                                  </Typography>
                                </Box>
                          </Stack>

                          <Box>
                            <Button variant="outlined"    onClick={() =>
                          router.push(`/blogs/blog_detail/${elem.slug}`)
                        }>View Blog</Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <>
                  {!loader && data.length <= 0 && (
                    <JobSekelton title="No Blog" />
                  )}
                </>
              )}
            </Grid>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Blogs;
