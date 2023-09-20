import { useAuthContext } from "@/auth/useAuthContext";
import OTPDialogBox from "@/components/dialog/otpModal";
import { PasswordBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import { Close } from "@mui/icons-material";
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
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Register = ({ formik, open, handleOpenClose }) => {
  const router = useRouter();
  const { signUpWithGoogle, user, signUpWithFacebook } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (signUpWithGoogle) {
        signUpWithGoogle();
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      if (signUpWithFacebook) {
        signUpWithFacebook();
      }
      console.log("FACEBOOK LOGIN");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <React.Fragment>
      <Box sx={{ pb: 4, py: 12 }}>
        <Container>
          <Grid sx={{ justifyContent: "center" }} spacing={0} container>
            <Grid item md={6}>
              <Box>
                <Box src="/login/bro.png" component="img" />
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Stack spacing={3}>
                <Box textAlign="center">
                  <Typography fontSize={20} fontWeight={600}>
                    Welcome to Click & Send
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: (theme) => theme.palette.grey[100],
                        border: (theme) =>
                          `1px solid ${theme.palette.grey[300]}`,
                        borderRadius: "20px",
                        px: 2,
                        color: "#fff",
                        ":hover": {
                          backgroundColor: (theme) => theme.palette.grey[400],
                        },
                      }}
                      startIcon={<Iconify icon="flat-color-icons:google" />}
                      onClick={() => handleGoogleLogin()}
                    >
                      <Typography
                        fontSize={9}
                        color={(theme) => theme.palette.grey[600]}
                      >
                        Sign up with Google
                      </Typography>
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: (theme) => theme.palette.grey[100],
                        border: (theme) =>
                          `1px solid ${theme.palette.grey[300]}`,
                        borderRadius: "20px",
                        px: 2,
                        color: "#fff",
                        ":hover": {
                          backgroundColor: (theme) => theme.palette.grey[400],
                        },
                      }}
                      startIcon={<Iconify icon="logos:facebook" />}
                      onClick={() => handleFacebookLogin()}
                    >
                      <Typography
                        fontSize={9}
                        color={(theme) => theme.palette.grey[600]}
                      >
                        Sign up with Facebook
                      </Typography>
                    </Button>
                  </Box>
                </Stack>

                <Box component="form" noValidate onSubmit={formik.handleSubmit}>
                  <Box>
                    <TextBox
                      variant="standard"
                      fullWidth
                      placeholder={"Enter Your Full Name "}
                      name="user_name"
                      label="Username"
                      value={formik.values.user_name}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.user_name && formik.errors.user_name
                      }
                      size="small"
                    />
                  </Box>
                  <Box>
                    <TextBox
                      variant="standard"
                      fullWidth
                      placeholder={"Enter Your Email Address"}
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      helperText={formik.touched.email && formik.errors.email}
                      size={"small"}
                    />
                  </Box>
                  <Box>
                    <TextBox
                      variant="standard"
                      fullWidth
                      name="mobile"
                      label="Contact Number"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      helperText={formik.touched.mobile && formik.errors.mobile}
                      placeholder={"Enter Your Contact Number"}
                      size={"small"}
                    />
                  </Box>
                  <Box>
                    <PasswordBox
                      fullWidth
                      name="password"
                      variant="standard"
                      label="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      placeholder={"Enter Password"}
                      size={"small"}
                    />
                  </Box>
                  <Box>
                    <PasswordBox
                      name="password_confirmation"
                      label="Confirm Password"
                      variant="standard"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                      }
                      fullWidth
                      placeholder={"Enter Confirm Password"}
                      size="small"
                    />
                  </Box>
                  <Box>
                    <Stack textAlign={"center"} sx={{ mt: 2 }}>
                      <Typography textAlign="left" variant="p">
                        Company Certificate
                      </Typography>
                      {!formik.values.company_certificate && (
                        <TextBox
                          variant="standard"
                          fullWidth
                          type="file"
                          size="small"
                          value=""
                          name="company_certificate"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "company_certificate",
                              e.target.files[0]
                            );
                            formik.setFieldValue(
                              "company_certificate_url",
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                          helperText={
                            formik.touched.company_certificate &&
                            formik.errors.company_certificate
                          }
                          isAdditional={true}
                          textBoxSx={{
                            "& .MuiInput-root:after": {
                              borderBottom: "0px !important",
                            },
                            "& .MuiInput-root:before": {
                              borderBottom: "0px !important",
                              content: '""',
                            },
                          }}
                        />
                      )}

                      {formik.values.company_certificate_url && (
                        <Card sx={{ width: "max-content" }}>
                          <CardContent
                            sx={{
                              pb: "10px !important",
                              pt: "30px !important",
                              px: "10px !important",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: 5,
                                right: 6,
                              }}
                            >
                              <Card sx={{ borderRadius: "50%" }}>
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    formik.setFieldValue(
                                      "company_certificate",
                                      ""
                                    );
                                    formik.setFieldValue(
                                      "company_certificate_url",
                                      ""
                                    );
                                  }}
                                >
                                  <Close fontSize="small" />
                                </IconButton>
                              </Card>
                            </Box>
                            <Box
                              component="img"
                              style={{ margin: "10px" }}
                              src={formik.values.company_certificate_url}
                              alt={formik.values.company_certificate.name}
                              width="150px"
                              height="150px"
                              thumbnail
                            />
                          </CardContent>
                        </Card>
                      )}
                    </Stack>
                    <Stack textAlign={"center"} sx={{ mt: 2 }}>
                      <Typography textAlign="left" variant="p">
                        Company VAT Certificate (Optional)
                      </Typography>
                      {!formik.values.company_vat && (
                        <TextBox
                          variant="standard"
                          fullWidth
                          type="file"
                          size="small"
                          value=""
                          name="company_vat"
                          onChange={(e) => {
                            formik.setFieldValue(
                              "company_vat",
                              e.target.files[0]
                            );
                            formik.setFieldValue(
                              "company_vat_url",
                              URL.createObjectURL(e.target.files[0])
                            );
                          }}
                          helperText={
                            formik.touched.company_vat &&
                            formik.errors.company_vat
                          }
                          isAdditional={true}
                          textBoxSx={{
                            "& .MuiInput-root:after": {
                              borderBottom: "0px !important",
                            },
                            "& .MuiInput-root:before": {
                              borderBottom: "0px !important",
                              content: '""',
                            },
                          }}
                        />
                      )}

                      {formik.values.company_vat_url && (
                        <Card sx={{ width: "max-content" }}>
                          <CardContent
                            sx={{
                              pb: "10px !important",
                              pt: "30px !important",
                              px: "10px !important",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                top: 5,
                                right: 6,
                              }}
                            >
                              <Card sx={{ borderRadius: "50%" }}>
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    formik.setFieldValue("company_vat", "");
                                    formik.setFieldValue("company_vat_url", "");
                                  }}
                                >
                                  <Close fontSize="small" />
                                </IconButton>
                              </Card>
                            </Box>
                            <Box
                              component="img"
                              style={{ margin: "10px" }}
                              src={formik.values.company_vat_url}
                              alt={formik.values.company_vat.name}
                              width="150px"
                              height="150px"
                              thumbnail
                            />
                          </CardContent>
                        </Card>
                      )}
                    </Stack>
                  </Box>
                  <Stack justifyContent="space-between" alignItems="left">
                    <Box my={1}>
                      <FormControl
                        error={formik.errors.term ? true : false}
                        fullWidth
                      >
                        <FormControlLabel
                          name="term"
                          checked={formik.values.term == "yes"}
                          onChange={(e) => {
                            if (e.target.checked) {
                              formik.setFieldValue("term", "yes");
                            } else {
                              formik.setFieldValue("term", "no");
                            }
                          }}
                          control={<Checkbox size="" />}
                          label={
                            <Typography textAlign="center">
                              I accept the
                              <Typography
                                color="primary"
                                ml={0.5}
                                component="span"
                                onClick={() => router.push("/termandcondition")}
                              >
                                terms & Condition
                              </Typography>{" "}
                            </Typography>
                          }
                        />

                        {formik.errors.term && (
                          <FormHelperText sx={{ textAlign: "center" }}>
                            {formik.errors.term}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="space-around"
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      Sign up
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="dark"
                      onClick={formik.resetForm}
                    >
                      <Typography>Reset Now</Typography>
                    </Button>
                  </Stack>

                  <Stack
                    my={1.5}
                    direction={"row"}
                    justifyContent={"center"}
                    spacing={0.5}
                  >
                    <Typography variant="p">Already a member?</Typography>{" "}
                    <Typography
                      color={"primary"}
                      onClick={() => router.push("/auth/login")}
                      sx={{ cursor: "pointer" }}
                    >
                      Login Here
                    </Typography>
                  </Stack>
                  {/* <Box>
                        <Typography textAlign={"center"}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Typography>
                      </Box> */}
                  <Box>
                    <Button
                      onClick={() => router.push("/auth/register/driver")}
                      fullWidth
                      variant="outlined"
                      startIcon={<Iconify icon="ion:bicycle" color="primary" />}
                    >
                      <Typography>Want To Become A Driver</Typography>
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <OTPDialogBox
        onClose={handleOpenClose}
        email={formik.values.email}
        registerFormik={formik}
        open={open}
        title="OTP Verification"
      />
    </React.Fragment>
  );
};

export default Register;
