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
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const DriverRegister = ({ formik }) => {
  const router = useRouter();
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
                      <Iconify
                        icon="solar:lock-bold"
                        width="32px"
                        color="#ff7534"
                      />
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
                      <Box mb={3}>
                        <FormControlLabel
                          control={
                            <Radio
                              size="large"
                              name="type"
                              onChange={(e) => {
                                formik.setFieldValue("type", "driver");
                              }}
                              checked={formik.values.type === "driver"}
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
                              size="large"
                              name="type"
                              onChange={(e) => {
                                formik.setFieldValue("type", "company");
                              }}
                              checked={formik.values.type === "company"}
                            />
                          }
                          label={
                            <Typography variant="h5" fontWeight={500}>
                              Company
                            </Typography>
                          }
                        />
                      </Box>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={
                            formik.values.type === "company"
                              ? "Enter Company Name"
                              : "Enter Your Full Name "
                          }
                          startIcon={
                            <Iconify icon="mdi:user" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>

                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={
                            formik.values.type === "company"
                              ? "Enter Company Email"
                              : "Enter Your Email Address"
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
                          size={"small"}
                        />
                      </Box>
                      {formik.values.type === "company" ? (
                        <Box>
                          <Stack textAlign={"center"}>
                            <Typography variant="p">
                              Company Certificate
                            </Typography>
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
                              onChange={() => {}}
                            />
                          </Stack>
                          <Stack textAlign={"center"}>
                            <Typography variant="p">
                              Company VAT Certificate (Optional)
                            </Typography>
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
                              onChange={() => {}}
                            />
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
                        <Box>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="I agree to the Terms and Conditions as set out by the user agreement."
                          />
                        </Box>
                      </Box>
                      <Stack direction={"row"} justifyContent={"space-around"}>
                        <Box>
                          <Button fullWidth variant="contained" color="primary">
                            Register Now
                          </Button>
                        </Box>
                        <Box>
                          <Button fullWidth variant="contained" color="dark">
                            Reset Now
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
                          Become A Customer
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

export default DriverRegister;
