import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OurFleet = () => {
  return (
    <React.Fragment>
      <Box py={8}>
        <Container>
          <Grid container columnSpacing={3}>
            <Grid item lg={4}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "28px !important", mb: 2, fontWeight: 700 }}
                >
                  Our Fleet
                </Typography>
                <Typography
                  color="grey"
                  sx={{ fontSize: "14px", lineHeight: "1.5rem" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry{"'"}s
                  standard dummy text ever sinceLorem Ipsum is simply dummy text
                  of the printing and typesetting industr.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2.6}>
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
                  <Button endIcon={<Iconify icon="ep:right" color="primary" />}>
                    View All
                  </Button>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Stack direction="row" spacing={2}>
                    <Card
                      variant="outlined"
                      sx={{
                        borderRadius: "50%",
                        borderColor: (theme) =>
                          alpha(theme.palette.grey[900], 0.4),
                      }}
                    >
                      <IconButton>
                        <ArrowBackIcon
                          sx={{
                            color: (theme) =>
                              alpha(theme.palette.common.black, 0.9),
                            fontWeight: 700,
                          }}
                        />
                      </IconButton>
                    </Card>
                    <Card
                      variant="outlined"
                      sx={{
                        borderRadius: "50%",
                        borderColor: (theme) =>
                          alpha(theme.palette.grey[900], 0.4),
                      }}
                    >
                      <IconButton>
                        <ArrowForwardIcon
                          sx={{
                            color: (theme) =>
                              alpha(theme.palette.common.black, 0.9),
                            fontWeight: 700,
                          }}
                        />
                      </IconButton>
                    </Card>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
            <Grid item lg={2.6}>
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
                  <Button endIcon={<Iconify icon="ep:right" color="primary" />}>
                    View All
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid item lg={2.6}>
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
                  <Button endIcon={<Iconify icon="ep:right" color="primary" />}>
                    View All
                  </Button>
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
