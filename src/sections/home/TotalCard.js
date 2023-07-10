import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { StyledIconBox } from "./homeStyled";
import Iconify from "@/components/iconify";
const TotalCard = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#ff7533" }} py={10}>
        <Container>
          <Grid container spacing={14}>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <StyledIconBox textAlign={"center"}>
                    <PersonIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center">
                      Total User
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center">
                      1211+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <StyledIconBox>
                    <PersonIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center">
                      Total Drivers
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center">
                      5999+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <StyledIconBox>
                    <BusinessCenterIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center">
                      Total Jobs
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center">
                      25987+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <StyledIconBox>
                    <Iconify icon="ps:justice" width="5em" />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center">
                      Total Bids
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center">
                      25764+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalCard;
