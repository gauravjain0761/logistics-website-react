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

  return (
    <React.Fragment>
      <Box sx={{ pb: 4, background: (theme) => theme.palette.grey[400], pt: 12 }}>
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
                          placeholder={"Enter Your Full Name "}
                          name="user_name"
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
                          placeholder={"Enter Your Email Address"}
                          name="email"
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
                      <Box>
                          <Stack textAlign={"center"}>
                            <Typography textAlign="left" variant="p">
                              Company Certificate
                            </Typography>
                            {!formik.values.company_certificate && (
                              <TextBox
                                fullWidth
                                startIcon={
                                  <Iconify
                                    icon="solar:file-bold"
                                    color="#ff7534"
                                  />
                                }
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
                                startIcon={
                                  <Iconify
                                    icon="solar:file-bold"
                                    color="#ff7534"
                                  />
                                }
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
                                          formik.setFieldValue(
                                            "company_vat",
                                            ""
                                          );
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
                              checked={formik.values.term == "yes"}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  formik.setFieldValue("term", "yes");
                                } else {
                                  formik.setFieldValue("term", "no");
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
                                  <Typography color="primary" component="span" onClick={()=>router.push("/termandcondition")}>
                                    Terms and Conditions
                                  </Typography>{" "}
                                  as set out by the user agreement.
                                </Typography>
                              }
                            />
                            

                            {formik.errors.term && (
                              <FormHelperText  sx={{textAlign:"center"}}>
                                {formik.errors.term}
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Box>
                      </Box>
                      <Stack direction={"row"} justifyContent={"space-around"}>
                        <Box>
                          <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            color="primary"
                          >
                            <Typography px="1.5em">Register Now</Typography>
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
        email={formik.values.email}
        registerFormik={formik}
        open={open}
        title="OTP Verification"
      />
    </React.Fragment>
  );
};

export default Register;
