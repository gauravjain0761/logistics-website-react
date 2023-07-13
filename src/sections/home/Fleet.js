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
import Iconify from "@/components/iconify/Iconify";
const Fleet = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
          <Box py={4}>
            <Typography textAlign="center" variant="h3" fontWeight={400}>
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
                  <Box height={40}>
                    <Typography>
                      Extensive equipment and consolidation options
                    </Typography>
                  </Box>
                  <Box>
                    <Iconify
                      width="7em"
                      icon="mingcute:truck-fill"
                      color="#dadadb"
                      hFlip={true}
                    />
                  </Box>
                </CardContent>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "0" }}
                  >
                    View All
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      Refrigetro Truck
                    </Typography>
                  </Box>
                  <Box height={40}>
                    <Typography>Flexible and reliable</Typography>
                  </Box>
                  <Box>
                    <Iconify
                      width="7em"
                      icon="mdi:truck-refrigerator"
                      color="#dadadb"
                      hFlip={true}
                    />
                  </Box>
                </CardContent>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "0" }}
                  >
                    View All
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      Car
                    </Typography>
                  </Box>
                  <Box height={40}>
                    <Typography>Reliable and hassle free</Typography>
                  </Box>
                  <Box>
                    <Iconify
                      width="7em"
                      icon="clarity:car-solid"
                      color="#dadadb"
                      hFlip={true}
                    />
                  </Box>
                </CardContent>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "0" }}
                  >
                    View All
                  </Button>
                </Box>
              </Card>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Box>
                    <Typography variant="h5" color="primary">
                      Van
                    </Typography>
                  </Box>
                  <Box height={40}>
                    <Typography>
                      Secure reliable and cost-effective transportation
                    </Typography>
                  </Box>
                  <Box>
                    <Iconify
                      width="7em"
                      icon="ph:van-fill"
                      color="#dadadb"
                      hFlip={true}
                    />
                  </Box>
                </CardContent>
                <Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ borderRadius: "0" }}
                  >
                    View All
                  </Button>
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
