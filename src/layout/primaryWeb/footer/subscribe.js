import SubscribeButton from "@/components/button/subscribeButton";
import { TextBox } from "@/components/form";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import React from "react";

const Subscribe = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container>
        <CardContent sx={{ paddingBottom: "24px!imporatant" }}>
          <Stack
            justifyContent="space-between"
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            alignItems="center"
            spacing={{ md: 0, sm: 2, xs: 2 }}
          >
            <Box>
              <Stack direction="row" spacing={6}>
                <Box>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: (theme) => alpha(theme.palette.common.black, 1),
                        fontSize: "18px",
                      }}
                    >
                      Call Us
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: (theme) =>
                          alpha(theme.palette.common.black, 0.6),
                        fontSize: "18px",
                      }}
                    >
                      0123456789
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: (theme) => alpha(theme.palette.common.black, 1),
                        fontSize: "18px",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: (theme) =>
                          alpha(theme.palette.common.black, 0.6),
                        fontSize: "18px",
                      }}
                    >
                      info@abcd.co.uk
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                <Box>
                  <LinkedIn fontSize="large" />
                </Box>
                <Box>
                  <Twitter fontSize="large" />
                </Box>
                <Box>
                  <Facebook fontSize="large" />
                </Box>
                <Box>
                  <YouTube fontSize="large" />
                </Box>
                <Box>
                  <Instagram fontSize="large" />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
        <Container>
          <Divider sx={{ mx: 0 }} />
        </Container>
      </Container>
    </Box>
  );
};

export default Subscribe;
