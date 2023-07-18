import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { StyledBox } from "../home/homeStyled";

const MobileWork = () => {
  return (
    <React.Fragment>
      <StyledBox >
        <Container>
          <Grid container spacing={0}>
            <Grid item sm={6} md={7} lg={7}>
              <Box>
                <Box m={"auto"} component={"img"} src={"/mobile.png"} />
              </Box>
            </Grid>
            <Grid item sm={6} md={5} lg={5}>
                <Box>
                  <Box>
                    <Button variant="contained" sx={{borderRadius:"10px"}}>For Driver</Button>
                  </Box>
                  <Box py={5}>
                    <Box>
                      <Typography variant="h3" color="#555555" fontWeight={600}>Join Our Fleet</Typography>
                    </Box>
                    <Box>
                      <Typography color="grey">
                        The personal account where user can manage, track and
                        order parcels, check order details and history
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Button variant="contained" sx={{borderRadius:"10px"}}>Sign Up as a Driver</Button>
                  </Box>
                </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </React.Fragment>
  );
};

export default MobileWork;
