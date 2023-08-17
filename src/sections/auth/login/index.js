import { useAuthContext } from "@/auth/useAuthContext";
import { useFirebaseContext } from "@/auth/useFirebaseContext";
import ForgetPasswordDialogBox from "@/components/dialog/forgetPasswordModal";
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
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const { login } = useAuthContext();

  const { loginWithGoogle, user } = useFirebaseContext();

  console.log("firebaseAppuser", user);

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      // call api
      const data = {
        email: values.email,
        password: values.password,
      };
      login(data);
      // await axiosInstance
      //   .post("api/auth/login", data)
      //   .then((response) => {
      //     console.log(response.data.user.user_type, "logintype");
      //     if (response?.status === 200) {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "success",
      //       });

      //       // formik.resetForm();
      //       console.log("response.data", response.data);

      //       if (response.data.user.user_type === "customer") {
      //         router.push("/dashboard/customer");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       } else if (response.data.user.user_type === "driver") {
      //         router.push("/dashboard/driver/active_jobs");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       } else if (response.data.user.user_type === "company") {
      //         router.push("/dashboard/company");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       }
      //     } else {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "error",
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     const { response } = error;
      //     if (response.status === 422) {
      //       // eslint-disable-next-line no-unused-vars
      //       for (const [key, value] of Object.entries(values)) {
      //         if (response.data.error[key]) {
      //           setErrors({ [key]: response.data.error[key][0] });
      //         }
      //       }
      //     }
      //     if (response?.data?.status === 406) {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "error",
      //       });
      //     }
      //   });
    },
  });

  return (
    <React.Fragment>
      <Box
        sx={{ pb: 4, background: (theme) => theme.palette.grey[400], pt: 12 }}
      >
        <Container>
          <Grid sx={{ justifyContent: "center" }} container>
            <Grid item md={5.4} sm={12} xs={12}>
              <Stack spacing={0.9}>
                <Card
                  sx={{
                    borderRadius: 0,
                    boxShadow: 0,
                    background: (theme) => theme.palette.grey[100],
                  }}
                >
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems="center"
                    >
                      <Iconify icon="uis:unlock" width="30px" color="#ff7534" />
                      <Typography
                        color={"primary"}
                        variant="h4"
                        fontWeight={500}
                        sx={{ fontSize: "1.95rem!important" }}
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
                  <CardContent sx={{ px: "3em" }}>
                    <Stack spacing={1} py={2}>
                      <Box
                        component="form"
                        noValidate
                        onSubmit={formik.handleSubmit}
                      >
                        <Box>
                          <TextBox
                            fullWidth
                            placeholder={"Enter Your Email Address"}
                            startIcon={
                              <Iconify icon="mdi:user" color="#ff7534" />
                            }
                            size={"small"}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            name="email"
                            helperText={formik?.errors?.email}
                          />
                        </Box>
                        <Box>
                          <PasswordBox
                            onChange={formik.handleChange}
                            fullWidth
                            placeholder={"Enter Password"}
                            startIcon={
                              <Iconify icon="solar:lock-bold" color="#ff7534" />
                            }
                            size={"small"}
                            value={formik.values.password}
                            name="password"
                            helperText={formik?.errors?.password}
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
                              control={<Checkbox size="" defaultChecked />}
                              label="Remember me"
                            />
                          </Box>
                          <Box>
                            <Typography
                              onClick={() => setOpen(true)}
                              variant="p"
                              color="primary"
                              sx={{ cursor: "pointer", fontSize: "15px" }}
                            >
                              Forget Password ?
                            </Typography>
                          </Box>
                        </Box>
                        <Box mt={2}>
                          <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            // onClick={() =>
                            //   router.push("/dashboard/driver/driver")
                            // }
                            type="submit"
                          >
                            <Typography>Login Now</Typography>
                          </Button>
                        </Box>
                        <Box>
                          <Box textAlign={"center"} mt={4}>
                            <Typography variant="p" sx={{ fontSize: "1rem" }}>
                              Don{"'"}t have An Account?{" "}
                              <Typography
                                component="span"
                                color="primary"
                                onClick={() => router.push("/auth/register")}
                                sx={{ cursor: "pointer", fontSize: "15px" }}
                              >
                                Register Now
                              </Typography>
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
                                  backgroundColor: "#2a4e95de",
                                },
                              }}
                              startIcon={
                                <Iconify
                                  icon="ic:baseline-facebook"
                                  color="white"
                                />
                              }
                            >
                              <Typography fontSize={"15px"}>
                                Continue with Facebook
                              </Typography>
                            </Button>
                          </Box>
                          <Box>
                            <Button
                              fullWidth
                              sx={{
                                backgroundColor: "#CD2C2E",
                                color: "#fff",
                                ":hover": {
                                  backgroundColor: "#cd2c2edb",
                                },
                              }}
                              startIcon={
                                <Iconify
                                  icon="ant-design:google-outlined"
                                  color="white"
                                />
                              }
                              onClick={() => handleGoogleLogin()}
                            >
                              <Typography fontSize={"15px"}>
                                Continue with Google
                              </Typography>
                            </Button>
                          </Box>
                          {/* <Box>
                            <Button
                              fullWidth
                              sx={{
                                backgroundColor: "#0f0f0f",
                                color: "#fff",
                                my: 1,
                                ":hover": {
                                  backgroundColor: "#0f0f0fba",
                                },
                              }}
                              startIcon={
                                <Iconify
                                  icon="ic:baseline-apple"
                                  color="white"
                                />
                              }
                            >
                              <Typography fontSize={"15px"}>
                                Continue with Apple
                              </Typography>
                            </Button>
                          </Box> */}
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ForgetPasswordDialogBox
        title="Forget Password"
        open={open}
        onClose={() => handleClose()}
      />
    </React.Fragment>
  );
};

export default Login;
