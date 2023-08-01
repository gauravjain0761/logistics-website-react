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
          <Box sx={{position:"relative"}}>
            <TrackGoogleMaps />
            <Box sx={{position:"absolute", top:"6em",left:"10px"}} >
              <Card sx={{p:2}}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <Stack>
                      <Box>
                        <Typography fontWeight={500}>Pickup</Typography>
                      </Box>
                      <Box>
                        <Typography color="grey">123 Address Xyz, State</Typography>
                      </Box>
                    </Stack>
                    <Box>
                      <Button variant="outlined"  color="dark" size="small">View</Button>
                    </Box>
                  </Stack>
              </Card>
            </Box>
            <Box sx={{position:"absolute", top:"11.5em",left:"10px"}} >
              <Card sx={{p:2}}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    <Stack >
                      <Box>
                        <Typography fontWeight={500} >Drop off</Typography>
                      </Box>
                      <Box>
                        <Typography color="grey">427 Address Xyz, State</Typography>
                      </Box>
                    </Stack>
                    <Box>
                      <Button variant="outlined"  color="dark" size="small">View</Button>
                    </Box>
                  </Stack>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default StartJob;
