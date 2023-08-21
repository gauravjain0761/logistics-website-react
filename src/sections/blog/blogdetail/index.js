import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import { CustomTooltip } from "@/components/tooltip/customTooltip";
import axiosInstance from "@/utils/axios";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
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
          <Grid container spacing={4}>
            <Grid item md={2}>
              <Stack spacing={2}>
                <Box>
                  <Typography sx={{ fontSize: "28px" }}>966</Typography>
                  <Typography
                    sx={{ fontSize: "16px" }}
                    color={(theme) => alpha(theme.palette.grey[500], 0.5)}
                  >
                    Shares
                  </Typography>
                </Box>

                <Box>
                  <CustomTooltip title="528" placement="right">
                    <Facebook />
                  </CustomTooltip>
                </Box>
              </Stack>
            </Grid>
            <Grid item md={8}>
              <Box component="img" src={`${data.base_url}${data.image}`} />
            </Grid>
            <Grid item md={2}>
              <Box>
                <Stack direction="row" spacing={2}>
                  <Box textAlign="center">
                    <Facebook />
                    <Typography sx={{ fontSize: "15.1px" }}>10</Typography>
                  </Box>

                  <Box textAlign="center">
                    <Twitter />
                    <Typography sx={{ fontSize: "15.1px" }}>69k</Typography>
                  </Box>

                  <Box textAlign="center">
                    <Instagram />
                    <Typography sx={{ fontSize: "15.1px" }}>45</Typography>
                  </Box>

                  <Box textAlign="center">
                    <Pinterest />
                    <Typography sx={{ fontSize: "15.1px" }}>69k</Typography>
                  </Box>

                  <Box textAlign="center">
                    <YouTube />
                    <Typography sx={{ fontSize: "15.1px" }}>69k</Typography>
                  </Box>
                </Stack>
              </Box>
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
                    <Typography>
                      {moment(data?.created_at).format("DD / MMM / YYYY")}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <Box>
                <Typography>{data.description}</Typography>
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
