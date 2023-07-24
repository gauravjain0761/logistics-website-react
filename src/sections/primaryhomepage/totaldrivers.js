import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const TotalDrivers = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: "#fff",
        }}
      >
        <Container sx={{ py: 5 }}>
          <Stack
            direction="row"
            spacing={7}
            divider={
              <Divider
                orientation="vertical"
                sx={{
                  borderColor: (theme) =>
                    alpha(theme.palette.common.white, 0.2),
                }}
                flexItem
              />
            }
            justifyContent="center"
          >
            <Box>
              <Typography variant="h3">
                <CountUp
                  start={978}
                  end={1211}
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />
                +
              </Typography>
              <Typography>Total User</Typography>
            </Box>
            <Box>
              <Typography variant="h3">
                <CountUp
                  start={5894}
                  duration={3}
                  end={5999}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />{" "}
                +
              </Typography>
              <Typography>Total Drivers</Typography>
            </Box>
            <Box>
              <Typography variant="h3">
                <CountUp
                  start={25878}
                  duration={3}
                  end={25987}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />{" "}
                +
              </Typography>
              <Typography>Total Jobs</Typography>
            </Box>
            <Box>
              <Typography variant="h3">
                <CountUp
                  start={978}
                  duration={3}
                  end={1211}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />{" "}
                +
              </Typography>
              <Typography>Total User</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalDrivers;
