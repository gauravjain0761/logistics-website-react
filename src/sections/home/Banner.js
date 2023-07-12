import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";
const Banner = () => {
  return (
    <React.Fragment>
      <StyledBox>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={6} md={6} lg={6}>
              <Box>
                <Typography variant="h3" color="#555555">
                  Your Logistic Solution For
                  <br /> Business Client & Driver{"'"}s
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      margin: "12px",
                      backgroundColor: "#555555",
                      ":hover": {
                        backgroundColor: "#555555",
                      },
                    }}
                  >
                    <Typography  variant="h5" fontWeight={500}>For Clients</Typography>
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      margin: "12px",
                      color: "#555555",
                      borderColor: "#555555",
                      backgroundColor: "#ffffff",
                      ":hover": {
                        borderColor: "#555555",
                        backgroundColor: "#ffffff",
                      },
                    }}
                  >
                    <Typography variant="h5" fontWeight={500}>For Business</Typography>
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      margin: "12px",
                      backgroundColor: "#555555",
                      ":hover": {
                        backgroundColor: "#555555",
                      },
                    }}
                  >
                    <Typography variant="h5" fontWeight={500}>For Driver</Typography>
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
