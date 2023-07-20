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
              <Typography variant="h3">1211 +</Typography>
              <Typography>Total User</Typography>
            </Box>
            <Box>
              <Typography variant="h3">5999 +</Typography>
              <Typography>Total Drivers</Typography>
            </Box>
            <Box>
              <Typography variant="h3">25987 +</Typography>
              <Typography>Total Jobs</Typography>
            </Box>
            <Box>
              <Typography variant="h3">1211 +</Typography>
              <Typography>Total User</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalDrivers;
