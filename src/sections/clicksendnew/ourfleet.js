import Iconify from "@/components/iconify/Iconify";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const OurFleet = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={4}>
              <Box>
                <Typography variant="h3">Our Fleet</Typography>
                <Typography color="grey">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry{"'"}s
                  standard dummy text ever sinceLorem Ipsum is simply dummy text
                  of the printing and typesetting industr.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2.60}>
              <Stack justifyContent="center" direction="column">
                <Box
                  component="img"
                  src="/assets/images/home/truck.png"
                  alt="truck"
                />
                <Typography variant="h5">Pickup Truck</Typography>
                <Typography color="grey" fontSize={15}>
                  Extensive equipment and consolidation options
                </Typography>
                <Box>
                <Button endIcon={<Iconify icon="ep:right" color="primary"  />}>View All</Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item lg={2.60}>
              <Stack justifyContent="center" direction="column">
                <Box
                
                  component="img"
                  src="/assets/images/home/refrigrato.png"
                  alt="truck"
                />
                <Typography variant="h5">Refrigetro Truck</Typography>
                <Typography color="grey" fontSize={15}>
                  Extensive equipment and consolidation options
                </Typography>
                <Box>
                <Button endIcon={<Iconify icon="ep:right" color="primary"  />}>View All</Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item lg={2.60}>
              <Stack justifyContent="center" direction="column">
                <Box
                  component="img"
                  src="/assets/images/home/van.png"
                  alt="truck"
                />
                <Typography variant="h5">Van</Typography>
                <Typography color="grey" fontSize={15}>
                  Extensive equipment and consolidation options
                </Typography>
                <Box>
                <Button endIcon={<Iconify icon="ep:right" color="primary"  />}>View All</Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default OurFleet;
