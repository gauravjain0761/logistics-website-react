import DashboardCard from "@/module/dashboard/dashboardCard";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const JobList = () => {
  return (
    <React.Fragment>
      <Box py={4}>
        <Container>
          <Box py={4}>
            <Box>
              <Stack direction="row" spacing={1}>
                <Typography fontSize="1.75rem" fontWeight={700} color="primary">
                  Total Bid{"'"}s
                </Typography>
                <Box>
                  <Typography
                    fontSize="1.3rem"
                    fontWeight={700}
                    backgroundColor={(theme) => theme.palette.primary.main}
                    color="white"
                    borderRadius="50%"
                    py={0.3}
                    px={0.6}
                  >
                    05
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Stack alignItems="center">
              <Box
                width="85%"
                height="24em"
                component="img"
                src="/assets/images/dashboard/map.png"
                alt="map"
              />
            </Stack>
            <Box>
              <Card>
                <CardContent>
                  <Box>
                    <Stack direction="row" spacing={1}>
                      <Typography fontWeight={600}>Driver Name : </Typography>
                      <Typography fontWeight={600} color="primary">
                        Mr. Gaurav
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default JobList;
