import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledBox } from "./homeStyled";

const MobileTwo = () => {
  return (
    <React.Fragment>
      <StyledBox>
        <Container>
          <Grid container spacing={0}>
            <Grid item lg={6}>
              <Box>
                <Box m={"auto"} component={"img"} src={"./mobile2.jpg"} />
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box variant="outlined">
                <Box>
                  <Button variant="contained">For Clients</Button>
                </Box>
                <Box py={5}>
                  <Box>
                    <Typography variant="h4">Mobile Application</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      The personal account where user can manage, track and
                      order parcels, check order details and history
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button variant="contained">Login to Driver Porter</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </React.Fragment>
  );
};

export default MobileTwo;
