import { Email, Phone } from "@mui/icons-material";
import { Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Box sx={{ background: "#555555", color: "#fff" }}>
      <Container maxWidth>
        <Toolbar
          sx={{
            minHeight: "52px !important",
            px: "6rem !important",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Stack direction="row" spacing={3}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Phone sx={{ fontSize: "18px" }} />{" "}
                <Typography sx={{ fontSize: "15px" }}>0123456789</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Email sx={{ fontSize: "18px" }} />{" "}
                <Typography sx={{ fontSize: "15px" }}>0123456789</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={1.5}>
              <Box
                component="img"
                src="/assets/images/layout/topbar/fb-icon.jpg"
              />

              <Box
                component="img"
                src="/assets/images/layout/topbar/ins-logo.jpg"
              />

              <Box
                component="img"
                src="/assets/images/layout/topbar/link-icon.jpg"
              />

              <Box
                component="img"
                src="/assets/images/layout/topbar/twitter-icon.jpg"
              />

              <Box
                component="img"
                src="/assets/images/layout/topbar/you-icon.jpg"
              />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default TopBar;
