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
              <Card variant="outlined" sx={{backgroundColor:"#ffffffb5", borderRadius:"30px" }}>
                <CardContent>
                  <StyledIconBox textAlign={"center"}>
                    <PersonIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center" fontWeight={400} >
                      Total User
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center" fontWeight={400}>
                      1211+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined" sx={{backgroundColor:"#ffffffb5", borderRadius:"30px" }}>
                <CardContent>
                  <StyledIconBox>
                    <PersonIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center" fontWeight={400}>
                      Total Drivers
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center" fontWeight={400}>
                      5999+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined" sx={{backgroundColor:"#ffffffb5", borderRadius:"30px" }}>
                <CardContent>
                  <StyledIconBox>
                    <BusinessCenterIcon sx={{ fontSize: "5em" }} />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center" fontWeight={400}>
                      Total Jobs
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center" fontWeight={400}>
                      25987+
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item  xs={12} sm={12} md={6} lg={3}>
              <Card variant="outlined" sx={{backgroundColor:"#ffffffb5", borderRadius:"30px" }}>
                <CardContent>
                  <StyledIconBox>
                    <Iconify icon="ps:justice" width="5em" />
                  </StyledIconBox>
                  <Box>
                    <Typography variant="h5" align="center" fontWeight={400}>
                      Total Bids
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" align="center" fontWeight={400}>
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
