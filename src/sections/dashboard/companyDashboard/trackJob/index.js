import TrackGoogleMaps from "@/module/map/track_job";
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
import React from "react";

const StartJob = ({ formik }) => {
  return (
    <React.Fragment>
      <Box mt={12}>
        <Container>
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <TrackGoogleMaps data={[]} />
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
              {[...Array(5)].map((elem, index) => {
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
                              123 Address Xyz, State
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
                              Drop off {index + 1}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography color="grey">
                              427 Address Xyz, State
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

export default StartJob;
