import { PasswordBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Register = () => {
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
                    <Stack direction={"row"} justifyContent={"center"}>
                      <Iconify icon="uis:unlock" width="30px" color="#ff7534" />
                      <Typography
                        color={"primary"}
                        variant="h4"
                        fontWeight={"300"}
                      >
                        Registration
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
                    <FormGroup>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={"Enter Your Email Address"}
                          startIcon={
                            <Iconify icon="mdi:user" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                      <Box>
                        <PasswordBox
                          onChange={(e) => {
                            e.target.value;
                          }}
                          fullWidth
                          placeholder={"Enter Password"}
                          startIcon={
                            <Iconify icon="solar:lock-bold" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Remember Me"
                          />
                        </Box>
                        <Box>
                          <Typography
                            // onClick={() => setOpen(true)}
                            variant="p"
                            color="primary"
                          >
                            Forget Password ?
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Button fullWidth variant="contained" color="primary">
                          Login Now
                        </Button>
                      </Box>
                      <Box textAlign={"center"} mt={4}>
                        <Typography variant="p">  
                          Don{"'"}t have An Account? Register Now
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          fullWidth
                          sx={{
                            backgroundColor: "#2A4E95",
                            color: "#fff",
                            my: 1,
                            ":hover": {
                              backgroundColor: "#2A4E95",
                            },
                          }}
                          startIcon={
                            <Iconify
                              icon="ic:baseline-facebook"
                              color="white"
                            />
                          }
                        >
                          Continue with Facebook
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          fullWidth
                          sx={{
                            backgroundColor: "#CD2C2E",
                            color: "#fff",
                            ":hover": {
                              backgroundColor: "#CD2C2E",
                            },
                          }}
                          startIcon={
                            <Iconify
                              icon="ant-design:google-outlined"
                              color="white"
                            />
                          }
                        >
                          Continue with Google
                        </Button>
                      </Box>
                    </FormGroup>
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

export default Register;
