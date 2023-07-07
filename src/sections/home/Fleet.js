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
            <Grid item lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5">PickUp Truck</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "10em" }} />
                  </Box>
                  <Box>
                    <Button  variant="contained">View All</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5">PickUp Truck</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "10em" }} />
                  </Box>
                  <Box>
                    <Button  variant="contained">View All</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5">PickUp Truck</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "10em" }} />
                  </Box>
                  <Box>
                    <Button  variant="contained">View All</Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5">PickUp Truck</Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <ToysIcon sx={{ fontSize: "10em" }} />
                  </Box>
                  <Box>
                    <Button  variant="contained">View All</Button>
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

export default Fleet;
