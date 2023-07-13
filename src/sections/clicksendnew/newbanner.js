import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const NewBanner = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
          <Grid container alignItems="center" spacing={2}>
            <Grid item lg={6} >
            <Box component="img" src="/assets/images/home/bannertruck.png" alt="truck"/>
            </Grid>
            <Grid item lg={6} >
            <Stack spacing={6} >

              <Box>
                <Typography variant="h3">Your Logistic Solution</Typography>
                <Typography variant="h4">
                  {" "}
                  For Business, For Client &<br /> For Driver{"'"}s
                </Typography>
              </Box>
              <Box>
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

            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default NewBanner;
