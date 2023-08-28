import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import { CustomTooltip } from "@/components/tooltip/customTooltip";
import CommonBlog from "@/sections/common/blog";
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
  const [loader, setLoader] = React.useState(false);
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
    if (slug) {
      BlogDetailApi();
    }
  }, [slug]);

  console.log("datadata", data);

  const [recentBlog, setRecentBlog] = useState("");

  // Api Call
  const BlogApi = async () => {
    setLoader(true);
    await axiosInstance
      .get("api/front/blogs")
      .then((response) => {
        if (response?.status === 200) {
          setLoader(false);
          setRecentBlog(response.data.view_data?.data);
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
        src="/assets/images/contact/contact-us-banner.jpg"
        alt=""
        title="Blog Detail"
      />
      <Box py={5} pb={14}>
        {loader ? (
          <Container>
            <SkeletonLoader />
          </Container>
        ) : (
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
                      <Box
                        component="img"
                        src="/assets/icon/Facebook.png"
                        width="auto"
                        height="auto"
                      />
                    </CustomTooltip>
                  </Box>

                  <Box>
                    <CustomTooltip title="528" placement="right">
                      <Box
                        component="img"
                        src="/assets/icon/Twitter.png"
                        width="auto"
                        height="auto"
                      />
                    </CustomTooltip>
                  </Box>

                  <Box>
                    <CustomTooltip title="528" placement="right">
                      <Box
                        component="img"
                        src="/assets/icon/Pinterest.png"
                        width="auto"
                        height="auto"
                      />
                    </CustomTooltip>
                  </Box>

                  <Box>
                    <CustomTooltip title="528" placement="right">
                      <Box
                        component="img"
                        src="/assets/icon/Gmail.png"
                        width="auto"
                        height="auto"
                      />
                    </CustomTooltip>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={8}>
                <Box component="img" src={`${data.base_url}${data.image}`} />
                <Typography
                  component="h4"
                  sx={{ fontSize: "25px", mt: 3 }}
                  fontWeight={600}
                >
                  {data.title}
                </Typography>
                <Typography
                  component="h4"
                  sx={{ fontSize: "13px" }}
                  fontWeight={400}
                >
                  {data.description}
                </Typography>
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
            <Box sx={{ mt: 6 }}>
              <Stack spacing={2}>
                <Typography
                  component="h4"
                  fontWeight={700}
                  sx={{ fontSize: "26.56px" }}
                >
                  Read more blogs like this
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={4}>
                    <CommonBlog data={recentBlog} />
                  </Grid>
                </Box>
              </Stack>
            </Box>
          </Container>
        )}
      </Box>
    </React.Fragment>
  );
};

export default BlogDetail;
