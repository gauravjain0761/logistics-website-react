import Iconify from "@/components/iconify/Iconify";
import { Box,  Stack, Typography } from "@mui/material";
import React from "react";

const Test = () => {
  return (
    <React.Fragment>
      <Stack textAlign="center" spacing={2} color="#fff">
        <Box>
          <Iconify
            icon="oi:double-quote-serif-right"
            color="white"
            width={30}
          />
        </Box>
        <Box>
          <Typography variant="h5" fontWeight="400" fontStyle="italic">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since
          </Typography>
        </Box>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Box>
            <Box component="img" src="/testimonialimage.png" />
          </Box>
          <Stack >
            <Typography variant="h6">Diego Thompson</Typography>
            <Typography fontStyle="italic">Lives in: Atlantis Resort</Typography>
          </Stack>
          </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Test;
