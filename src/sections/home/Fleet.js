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
import ToysIcon from "@mui/icons-material/Toys";
const Fleet = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
          <Box py={4}>
            <Typography textAlign={"center"} variant="h3">
              Our Fleet
            </Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      PickUp Truck
                    </Typography>
                  </Box>
                  <Box>
                    <Typography >
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "8em" }} />
                  </Box>
                </CardContent>
                <Box>
                  <Button variant="contained" fullWidth sx={{borderRadius:"0"}}>View All</Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      PickUp Truck
                    </Typography>
                  </Box>
                  <Box>
                    <Typography >
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "8em" }} />
                  </Box>
                </CardContent>
                <Box>
                  <Button variant="contained" fullWidth sx={{borderRadius:"0"}}>View All</Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      PickUp Truck
                    </Typography>
                  </Box>
                  <Box>
                    <Typography >
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "8em" }} />
                  </Box>
                </CardContent>
                <Box>
                  <Button variant="contained" fullWidth sx={{borderRadius:"0"}}>View All</Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      PickUp Truck
                    </Typography>
                  </Box>
                  <Box>
                    <Typography >
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "8em" }} />
                  </Box>
                </CardContent>
                <Box>
                  <Button variant="contained" fullWidth sx={{borderRadius:"0"}}>View All</Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Fleet;
