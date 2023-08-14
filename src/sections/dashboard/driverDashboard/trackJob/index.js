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

const TrackJob = () => {
  const { user } = useAuthContext();
  const[data,setData]= useState([])
  const formik = useFormik({
    initialValues: {
      id: "1",
      driver_id: "84",
    },
  });
  const fetchTrackJob = async () => {
    await axiosInstance
      .post(`api/auth/jobs/job-tasks`, formik.initialValues)
      .then((response) => {
        if (response.status === 200) {
          console.log(response, "responsedata");
          setData(response.data.view_data)
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchTrackJob();
  }, []);
  return (
    <React.Fragment>
      <Box mt={12}>
        <Container>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <TrackGoogleMaps />
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
              {data.length > 0 && data && data.map((elem, index) => {
                console.log(elem,"elemmm")
                return (
                  <Box key={index} sx={{ scrollSnapAlign: "start" }}>
                    <Card sx={{ p: 2, mb: 0.5 }}>
                      <Stack direction="row" alignItems="center" spacing={3}>
                        <Stack>
                          <Box>
                            <Typography fontWeight={500}>
                              Pickup {index + 1}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography color="grey">
                              {elem[0].address}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box>
                          <Button variant="outlined" color="dark" size="small">
                            View
                          </Button>
                        </Box>
                      </Stack>
                    </Card>
                    <Card sx={{ p: 2, mb: 2 }}>
                      <Stack direction="row" alignItems="center" spacing={3}>
                        <Stack>
                          <Box>
                            <Typography fontWeight={500}>
                              Drop Off {index + 1}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography color="grey">
                            {elem[0].address}
                            </Typography>
                          </Box>
                        </Stack>
                        <Box>
                          <Button variant="outlined" color="dark" size="small">
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
