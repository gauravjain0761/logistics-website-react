import Iconify from "@/components/iconify/Iconify";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const TotalSet = () => {
  return (
    <React.Fragment>
      <Box sx={{backgroundColor:"#ff7534"}}>
        <Container>
          <Grid container >
            <Grid item md={3}>
            <Stack direction="row" spacing={1} color="#fff" py={3} alignItems="center" justifyContent="center">
            <Box>
            <Iconify icon="basil:user-solid" width="4em"/>
            </Box>
            <Box>
              <Typography fontSize={20}>Total User</Typography>
              <Typography fontSize={20}>1211 +</Typography>
            </Box>
            </Stack>
            </Grid>
            <Grid item md={3}>
            <Stack direction="row" spacing={1} color="#fff" py={3} alignItems="center" justifyContent="center">
            <Box>
            <Iconify icon="healthicons:truck-driver" width="4em"/>
            </Box>
            <Box>
              <Typography fontSize={20}>Total Drivers</Typography>
              <Typography fontSize={20}>5999 +</Typography>
            </Box>
            </Stack>
            </Grid>
            <Grid item md={3}>
            <Stack direction="row" spacing={1} color="#fff" py={3} alignItems="center" justifyContent="center">
            <Box>
            <Iconify icon="uil:bag" width="4em"/>
            </Box>
            <Box>
              <Typography fontSize={20}>Total User</Typography>
              <Typography fontSize={20}>25987 +</Typography>
            </Box>
            </Stack>
            </Grid>
            <Grid item md={3}>
            <Stack direction="row" spacing={1} color="#fff" py={3} alignItems="center" justifyContent="center">
            <Box>
            <Iconify  icon="mdi:court-hammer" hFlip={true}  width="4em"/>
            </Box>
            <Box>
              <Typography fontSize={20}>Total Bids</Typography>
              <Typography fontSize={20}>25987 +</Typography>
            </Box>
            </Stack>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default TotalSet;
