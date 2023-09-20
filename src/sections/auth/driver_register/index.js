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
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { Close } from "@mui/icons-material";
import DocumentModal from "@/module/driverDocument/driverDocumentmodal";
import { useAuthContext } from "@/auth/useAuthContext";

const DriverRegister = ({ formik, open, handleOpenClose }) => {
  const router = useRouter();
  const { signUpWithGoogle, user, signUpWithFacebook } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (signUpWithGoogle) {
        signUpWithGoogle(formik.values.user_type);
      }
      console.log("GOOGLE LOGIN");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      if (signUpWithFacebook) {
        signUpWithFacebook(formik.values.user_type);
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
          <Grid sx={{ justifyContent: "center" }} container spacing={0}>
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
                  <Box mb={3}>
                    <FormControlLabel
                      control={
                        <Radio
                          size="medium"
                          name="user_type"
                          onChange={(e) => {
                            formik.resetForm();
                            formik.setFieldValue("user_type", "driver");
                          }}
                          checked={formik.values.user_type === "driver"}
                        />
                      }
                      label={
                        <Typography variant="h5" fontWeight={500}>
                          Driver
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          size="medium"
                          name="user_type"
                          onChange={(e) => {
                            formik.resetForm();
                            formik.setFieldValue("user_type", "company");
                          }}
                          checked={formik.values.user_type === "company"}
                        />
                      }
                      label={
                        <Typography variant="h5" fontWeight={500}>
                          Company
                        </Typography>
                      }
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <TextBox
                      fullWidth
                      placeholder={
                        formik.values.user_type === "company"
                          ? "Enter Company Name"
                          : "Enter Your Full Name "
                      }
                      name="user_name"
                      value={formik.values.user_name}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.user_name && formik.errors.user_name
                      }
                      size={"small"}
                    />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <TextBox
                      fullWidth
                      placeholder={
                        formik.values.user_type === "company"
                          ? "Enter Company Email"
                          : "Enter Your Email Address"
                      }
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      helperText={formik.touched.email && formik.errors.email}
                      size={"small"}
                    />
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <TextBox
                      fullWidth
                      placeholder={"Enter Your Contact Number"}
                      name="mobile"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      helperText={formik.touched.mobile && formik.errors.mobile}
                      size={"small"}
                    />
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <PasswordBox
                      fullWidth
                      placeholder={"Enter Password"}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                      size={"small"}
                    />
                  </Box>
                  <Box sx={{ my: 2 }}>
                    <PasswordBox
                      fullWidth
                      placeholder={"Enter Confirm Password"}
                      name="password_confirmation"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      helperText={
                        formik.touched.password_confirmation &&
                        formik.errors.password_confirmation
                      }
                      size={"small"}
                    />
                  </Box>
                  {formik.values.user_type === "driver" ? (
                    <Box textAlign="center">
                      <DocumentModal formik={formik} />
                    </Box>
                  ) : (
                    ""
                  )}

                  {formik.values.user_type === "company" ? (
                    <Box>
                      <Stack textAlign={"center"}>
                        <Typography textAlign="left" variant="p">
                          Company Certificate
                        </Typography>
                        {!formik.values.company_certificate && (
                          <TextBox
                            fullWidth
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
                      <Stack textAlign={"center"} mt={2}>
                        <Typography textAlign="left" variant="p">
                          Company VAT Certificate (Optional)
                        </Typography>
                        {!formik.values.company_vat && (
                          <TextBox
                            fullWidth
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
                                      formik.setFieldValue(
                                        "company_vat_url",
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
                  ) : (
                    ""
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box my={3}>
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
                          control={
                            <Checkbox size="" sx={{ marginBottom: "1.6em" }} />
                          }
                          label={
                            <Typography textAlign="center">
                              I agree to the{" "}
                              <Typography
                                color="primary"
                                component="span"
                                onClick={() => router.push("/termandcondition")}
                              >
                                Terms and Conditions
                              </Typography>{" "}
                              as set out by the user agreement.
                            </Typography>
                          }
                        />
                        {formik.touched.term && formik.errors.term && (
                          <FormHelperText sx={{ textAlign: "center" }}>
                            {formik.errors.term}
                          </FormHelperText>
                        )}
                      </FormControl>
                    </Box>
                  </Box>

                  <Stack direction={"row"} justifyContent={"space-around"}>
                    <Box>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        <Typography px="1.5em">Register Now</Typography>
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        fullWidth
                        variant="contained"
                        color="dark"
                        onClick={formik.resetForm}
                      >
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => router.push("/auth/register")}
                      fullWidth
                      sx={{
                        backgroundColor: "#ff7534",
                        color: "#fff",
                        my: 1,
                        ":hover": {
                          backgroundColor: "#ff7534",
                        },
                      }}
                      startIcon={<Iconify icon="mdi:user" color="#fff" />}
                    >
                      <Typography>Become A Customer</Typography>
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

export default DriverRegister;
