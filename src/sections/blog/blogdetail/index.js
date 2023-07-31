import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
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

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState("");
  console.log(data);  
  const BlogDetailApi = async () =>
    await axiosInstance
      .get(`/api/front/blog-details/${slug}`)
      .then((response) => {
        if (response?.status === 200) {
          setData(response.data.view_data);
        } else {
          console.log("error");
        }
      })
      .catch((error) => {
        console.log(error, "Blog detail Page");
      });

  useEffect(() => {
    BlogDetailApi();
  }, []);


  console.log("datadata", data);

  return (
    <React.Fragment>
      <BannerSection
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Blog"
      />
      <Box py={5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item md={8}>
              <Box component="img" src={data.image} />
            </Grid>
            <Grid item md={4}>
              <Card sx={{ borderRadius: "5px" }}>
                <CardContent>
                  <Box borderBottom="2px solid rgba(224, 224, 224, 0.5)">
                    <Typography variant="h5" fontWeight={500} pb={1.5}>
                      Recent Post
                    </Typography>
                  </Box>
                  {[...Array(3)].map((elem, index) => {
                    return (
                      <Stack direction="row" spacing={3} my={3} key={index}>
                        <Box
                          component="img"
                          src="/postrecent.jpg"
                          alt="avatar"
                          borderRadius="5px"
                        />
                        <Stack spacing={1} pr={1}>
                          <Box>
                            <Typography fontWeight={600}>
                              Free Ui Design & Icon Packs.
                            </Typography>
                          </Box>
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Iconify
                              icon="mdi:clock-outline"
                              color={(theme) => theme.palette.primary.main}
                            />
                            <Typography>April 10, 2019</Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box py={3}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="h3" fontWeight={900}>
                  {data.title}
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify
                    icon="teenyicons:user-outline"
                    color={(theme) => theme.palette.primary.main}
                    width={15}
                  />
                  <Box>
                    <Typography>By Admin</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Iconify
                    icon="mdi:clock-outline"
                    color={(theme) => theme.palette.primary.main}
                    width={16}
                  />
                  <Box>
                    <Typography>{moment(data?.created_at).format("DD / MMM / YYYY")}</Typography>
                  </Box>
                </Stack>
              </Stack>
              <Box>
                <Typography>
                 {data.description}
                </Typography>
              </Box>
              
              <Box>
                <Card
                  sx={{ borderLeft: "5px solid #ff7534", borderRadius: "5px" }}
                >
                  <CardContent>
                    <Stack spacing={2}>
                      <Typography fontStyle="italic" fontSize="1.2rem">
                        {"'"}It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using {"'"}Content here, content
                        here{"'"}, making it look like readable English.{"'"}
                      </Typography>
                      <Typography
                        fontStyle="italic"
                        fontSize="1.2rem"
                        fontWeight="500"
                      >
                        - Mr.George William
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
              {/* <Box>
                <Typography>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don{"'"}t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn{"'"}t
                  anything embarrassing hidden in the middle of text. Various
                  versions have evolved over the years, sometimes by accident.
                </Typography>
              </Box> */}
            </Stack>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default BlogDetail;
