import Iconify from "@/components/iconify";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const SignIn = () => {
  return (
    <React.Fragment>
      <Box>
        <Container>
          <Box>
            <Iconify icon="uis:unlock" width="40px" color="#ff7534" />
            <Typography  variant="h4" color="#ff7534" >Hello Again!</Typography>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default SignIn;
