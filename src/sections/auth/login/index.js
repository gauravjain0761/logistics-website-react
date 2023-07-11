import { TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Login = ({ formik }) => {
  return (
    <React.Fragment>
      <Box sx={{ py: 4, background: (theme) => theme.palette.grey[400] }}>
        <Container>
          <Grid sx={{ justifyContent: "center" }} container>
            <Grid item md={6} sm={12} xs={12}>
              <Stack spacing={0.9}>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    background: (theme) => theme.palette.grey[100],
                  }}
                >
                  <CardContent>
                    <Stack direction={"row"}>
                      <Iconify icon="uis:unlock" width="30px" color="#ff7534" />
                      <Typography
                        color={"primary"}
                        variant="h4"
                        fontWeight={"300"}
                      >
                        Hello Again!
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    background: (theme) => theme.palette.grey[100],
                  }}
                >
                  <CardContent>
                    <Box>
                      <TextBox fullWidth placeholder={"Enter Your Email Address"} startIcon={<Iconify icon="mdi:user" color="#ff7534"/>} size={"small"} />
                    </Box>
                    <Box>
                      <TextBox fullWidth placeholder={"Enter Password"} startIcon={<Iconify icon="solar:lock-bold" color="#ff7534"/>}  size={"small"}/>
                    </Box>
                    <Box>
                      <Checkbox label={"Remember me"} />
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Login;
