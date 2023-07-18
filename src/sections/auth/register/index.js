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
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Register = ({ formik }) => {
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
                    <Box
                      component="form"
                      noValidate
                      onSubmit={formik.handleSubmit}
                    >
                      <Box>
                        <TextBox
                          fullWidth
                          name="user_name"
                          placeholder={"Enter Your Full Name "}
                          value={formik.values.user_name}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.user_name && formik.errors.user_name
                          }
                          startIcon={
                            <Iconify icon="mdi:user" color="#ff7534" />
                          }
                          size="small"
                        />
                      </Box>
                      <Box>
                        <TextBox
                          fullWidth
                          name="email"
                          placeholder={"Enter Your Email Address"}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.email && formik.errors.email
                          }
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
                          name="mobile"
                          value={formik.values.mobile}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.mobile && formik.errors.mobile
                          }
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
                          fullWidth
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.password && formik.errors.password
                          }
                          placeholder={"Enter Password"}
                          startIcon={
                            <Iconify icon="solar:lock-bold" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                      <Box>
                        <PasswordBox
                          name="password_confirmation"
                          value={formik.values.password_confirmation}
                          onChange={formik.handleChange}
                          helperText={
                            formik.touched.password_confirmation &&
                            formik.errors.password_confirmation
                          }
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
                          <FormControl
                            error={formik.errors.term ? true : false}
                            fullWidth
                          >
                            <FormControlLabel
                              name="term"
                              checked={formik.values.term}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  formik.setFieldValue("term", true);
                                } else {
                                  formik.setFieldValue("term", false);
                                }
                              }}
                              control={
                                <Checkbox
                                  size=""
                                  sx={{ marginBottom: "1.6em" }}
                                />
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
                            {formik.errors.term && (
                              <FormHelperText>
                                {formik.errors.term}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Box>
                      </Box>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        <Typography px="1.5em">Register Now fs</Typography>
                      </Button>
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

                      <Stack
                        my={4}
                        direction={"row"}
                        justifyContent={"center"}
                        spacing={0.5}
                      >
                        <Typography variant="p">
                          Already have An Account?
                        </Typography>{" "}
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
                    </Box>
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
