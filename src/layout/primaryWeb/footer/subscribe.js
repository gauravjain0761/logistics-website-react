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
    <Box>
      <Container>
        <CardContent sx={{ paddingBottom: "24px!imporatant",position:"relative" }}>
          <Stack
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              p: 3,
              borderRadius: "20px",
              position:"absolute",
              top:"-4em"
            }}
            justifyContent="space-between"
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            alignItems="center"
            spacing={{ md: 0, sm: 2, xs: 2 }}
          >
            <Box>
              <Stack direction="row" spacing={6}>
                <Box>
                  <Stack direction="column" spacing={1.5} alignItems="left">
                    <Typography
                      color={(theme) => theme.palette.common.white}
                      fontSize={24}
                      fontWeight={600}
                    >
                      Subscribe To Our newsletter
                    </Typography>{" "}
                    <Typography
                      color={(theme) => theme.palette.common.white}
                      fontSize={14}
                      fontWeight={400}
                    >
                      Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis
                      in suscipit turpis.
                    </Typography>
                  </Stack>
                </Box>
                <Stack direction="row" alignItems="center">
                  <Box>
                    <TextBox
                      fullWidth
                      sx={{ backgroundColor: "transparent" }}
                      label="Enter Your Email"
                      size="small"
                      onChange={(e) => e.target.value}
                    />
                  </Box>
                  <Box>
                    <Button variant="contained">Subscribe Now</Button>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
        <Container>
        </Container>
      </Container>
    </Box>
  );
};

export default Subscribe;
