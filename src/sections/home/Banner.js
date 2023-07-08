import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";
const Banner = () => {
  return (
    <React.Fragment>
      <StyledBox>
        <Container>
          <Grid container spacing={2}>
            <Grid item  sm={6} md={6} lg={6}>
              <Box>
                <Typography variant="h3">
                  Your Logistic Solution For Business <br />
                  Client & Driver’s
                </Typography>
                <Box >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ margin: "12px" }}
                  >
                    For Clients
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ margin: "12px" }}
                  >
                    For Business
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ margin: "12px" }}
                  >
                    For Driver
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              <Box component="img" src={"/banner.jpg"} />
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </React.Fragment>
  );
};

export default Banner;
