import OTPDialogBox from "@/components/dialog/otpModal";
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
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpenClose = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <Box sx={{ py: 4, background: (theme) => theme.palette.grey[400] }}>
        <Container>
          <Grid sx={{ justifyContent: "center" }} container>
            <Grid item md={5.6} sm={12} xs={12}>
              <Stack spacing={0.9}>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    background: (theme) => theme.palette.grey[100],
                  }}
                >
                  <CardContent>
                    <Stack direction="row" justifyContent="center">
                      <Iconify
                        icon="solar:lock-bold"
                        width="32px"
                        color="#ff7534"
                      />
                      <Typography
                        color={"primary"}
                        variant="h4"
                        fontWeight={500}
                        sx={{ fontSize: "1.75rem!important" }}
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
                  <CardContent sx={{ p: 6 }}>
                    <FormGroup>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={"Enter Your Full Name "}
                          startIcon={
                            <Iconify icon="mdi:user" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={"Enter Your Email Address"}
                          startIcon={
                            <Iconify
                              icon="fluent:mail-20-filled"
                              color="#ff7534"
                            />
                          }
                          size={"small"}
                        />
                      </Box>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={"Enter Your Contact Number"}
                          startIcon={
                            <Iconify
                              icon="material-symbols:call"
                              color="#ff7534"
                            />
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
                      <Box>
                        <PasswordBox
                          onChange={(e) => {
                            e.target.value;
                          }}
                          fullWidth
                          placeholder={"Enter Confirm Password"}
                          startIcon={
                            <Iconify icon="solar:lock-bold" color="#ff7534" />
                          }
                          size="small"
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box my={2}>
                          <FormControlLabel
                            control={
                              <Checkbox size="" sx={{ paddingBottom: "2em" }} />
                            }
                            label={
                              <Typography textAlign="center">
                                I agree to the{" "}
                                <Typography color="primary" component="span">
                                  Terms and Conditions
                                </Typography>{" "}
                                as set out by the user agreement.
                              </Typography>
                            }
                          />
                        </Box>
                      </Box>
                      <Stack direction={"row"} justifyContent={"space-around"}>
                        <Box>
                          <Button fullWidth variant="contained" color="primary">
                            <Typography px="1.5em" onClick={handleOpenClose}>
                              Register Now
                            </Typography>
                          </Button>
                        </Box>
                        <Box>
                          <Button fullWidth variant="contained" color="dark">
                            <Typography px="2.1em">Reset Now</Typography>
                          </Button>
                        </Box>
                      </Stack>

                      <Stack my={4} direction={"row"} justifyContent={"center"}>
                        <Typography variant="p">
                          Already have An Account?
                        </Typography>
                        <Typography
                          color={"primary"}
                          onClick={() => router.push("/auth/login")}
                          sx={{ cursor: "pointer" }}
                        >
                          Login Here
                        </Typography>
                      </Stack>
                      <Box>
                        <Typography textAlign={"center"}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Box>
                      <Box>
                        <Button
                          onClick={() => router.push("/auth/driver_register")}
                          fullWidth
                          sx={{
                            backgroundColor: "#ff7534",
                            color: "#fff",
                            my: 1,
                            ":hover": {
                              backgroundColor: "#ff7534",
                            },
                          }}
                          startIcon={
                            <Iconify icon="ion:bicycle" color="white" />
                          }
                        >
                          <Typography>Want To Become A Driver</Typography>
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

      <OTPDialogBox
        onClose={handleOpenClose}
        open={open}
        title="OTP Verification"
      />
    </React.Fragment>
  );
};

export default Register;
