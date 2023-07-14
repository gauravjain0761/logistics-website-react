import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const NewBanner = () => {
  return (
    <React.Fragment>
      <Box component="div">
        {/* <Container> */}
        <Grid container>
          <Grid item lg={6}>
            <Container sx={{ mt: 8 }}>
              <Stack direction="row" alignItems="flex-end">
                <CardContent sx={{ pb: "0px !important" }}>
                  <Box component="img" src="/Truck.png" alt="truck" />
                </CardContent>
              </Stack>
            </Container>
          </Grid>
          <Grid item lg={6} sx={{ position: "relative" }}>
            <Box
              sx={{
                background: (theme) => theme.palette.primary.main,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: "100%",
                zIndex: -1,
              }}
            />
            <Stack
              spacing={6}
              alignItems="flex-end"
              direction="row"
              justifyContent="left"
              height="100%"
            >
              <CardContent sx={{ px: 6, mb: 6 }}>
                <Stack spacing={6}>
                  <Box>
                    <Typography color="common.white" variant="h3">
                      Your Logistic Solution
                    </Typography>
                    <Typography color="common.white" variant="h4">
                      {" "}
                      For Business, For Client &<br /> For Driver{"'"}s
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#000",
                        ":hover": {
                          backgroundColor: "#555555",
                        },
                      }}
                    >
                      <Typography fontWeight={500}>For Clients</Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        margin: "12px",
                        color: "#000",
                        borderColor: "#555555",
                        backgroundColor: "#ffffff",
                        ":hover": {
                          borderColor: "#555555",
                          backgroundColor: "#ffffff",
                        },
                      }}
                    >
                      <Typography fontWeight={500}>For Business</Typography>
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        margin: "12px",
                        backgroundColor: "#000",
                        ":hover": {
                          backgroundColor: "#555555",
                        },
                      }}
                    >
                      <Typography fontWeight={500}>For Driver</Typography>
                    </Button>
                  </Box>
                </Stack>
              </CardContent>
            </Stack>
          </Grid>
        </Grid>
        {/* </Container> */}
      </Box>
    </React.Fragment>
  );
};

export default NewBanner;
