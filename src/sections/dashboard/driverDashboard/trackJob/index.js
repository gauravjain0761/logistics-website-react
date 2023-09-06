import { useAuthContext } from "@/auth/useAuthContext";
import TrackGoogleMaps from "@/module/map/track_job";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Iconify from "@/components/iconify/Iconify";

const TrackJob = () => {
  const router = useRouter();
  const { query } = useRouter();
  const { id } = query;
  const { user } = useAuthContext();
  const [data, setData] = useState([]);
  console.log(data[0], "responsedata");

  const initialValues = {
    id: id,
    driver_id: user?.id,
  };
  const fetchTrackJob = async () => {
    await axiosInstance
      .post(`api/auth/jobs/job-tasks`, initialValues)
      .then((response) => {
        if (response.status === 200) {
          setData(
            response.data.view_data && response.data.view_data?.length > 0
              ? response.data.view_data[0]
              : []
          );
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (id && user?.id) {
      fetchTrackJob();
    }
  }, [id, user?.id]);
  return (
    <React.Fragment>
      <Box py={12}>
        <Container>
          <Box my={1}>
            <Button
              variant="outlined"
              sx={{ my: 0 }}
              onClick={() => router.push("/dashboard/driver/active_jobs")}
            >
              <Iconify icon="ion:play-back" sx={{ mr: "7px" }} width={14} />
              Back
            </Button>
          </Box>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <TrackGoogleMaps data={data} />
            <Box
              sx={{
                position: "absolute",
                top: "6em",
                left: "10px",
                pr: 1,
                py: 1,
                maxHeight: "39em",
                overflowY: "scroll",
              }}
            >
              {data.length > 0 &&
                data &&
                data.map((elem, index) => {
                  console.log(elem, "elemmm");
                  return (
                    <Box key={index} sx={{ scrollSnapAlign: "start" }}>
                      <Card sx={{ p: 2, mb: 0.5 }}>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={3}
                        >
                          <Stack>
                            <Box>
                              <Typography fontWeight={500} textTransform="uppercase">
                               {elem.type} 
                              </Typography>
                            </Box>
                            <Box>
                              <Typography color="grey">
                                {elem.address}
                              </Typography>
                            </Box>
                          </Stack>
                          <Box>
                            <Button
                              variant="outlined"
                              color="dark"
                              size="small"
                            >
                              View
                            </Button>
                          </Box>
                        </Stack>
                      </Card>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TrackJob;
