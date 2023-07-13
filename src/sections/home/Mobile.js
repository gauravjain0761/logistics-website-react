import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";

const Mobile = () => {
  return (
    <React.Fragment>
      <StyledBox >
        <Container>
          <Grid container spacing={0}>
            <Grid item sm={6} md={6} lg={6}>
              <Box>
                <Box m={"auto"} component={"img"} src={"./mobile.png"} />
              </Box>
            </Grid>
            <Grid item sm={6} md={6} lg={6}>
              <Card variant="outlined" >
                <CardContent>
                  <Box>
                    <Button variant="contained" sx={{borderRadius:"10px"}}>For Driver</Button>
                  </Box>
                  <Box py={5}>
                    <Box>
                      <Typography variant="h4" color="primary" fontWeight={400}>Join Our Fleet ____</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6">
                        The personal account where user can manage, track and
                        order parcels, check order details and history
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Button variant="contained" sx={{borderRadius:"10px"}}>Sign Up as a Driver</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </React.Fragment>
  );
};

export default Mobile;
