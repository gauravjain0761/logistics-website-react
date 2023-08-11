import { PasswordBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import { clearToken } from "@/utils/localStorageAvailable";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const Profile = ({ data, formik, loader }) => {
  console.log("loaderloader", loader);
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[300] }}>
        <Box mt={8}>
          <Container>
            {loader ? (
              <Box sx={{ py: 4 }}>
                <SkeletonLoader />
              </Box>
            ) : (
              <Stack alignItems="center" spacing={4} py={4}>
                <Box>
                  <Card
                    sx={{
                      borderRadius: 0,
                      boxShadow: 0,
                      background: (theme) => theme.palette.grey[100],
                      width: "100%",
                      mb: 2,
                    }}
                  >
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems="center"
                      >
                        <Iconify
                          icon="uis:unlock"
                          width="30px"
                          color="#ff7534"
                        />
                        <Typography
                          color={"primary"}
                          variant="h4"
                          fontWeight={500}
                          sx={{ fontSize: "1.95rem!important" }}
                        >
                          My Profile
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                  >
                    <Card
                      sx={{
                        borderRadius: 0,
                        boxShadow: 0,
                        background: (theme) => theme.palette.grey[100],
                      }}
                    >
                      <CardContent>
                        <Stack direction="row" spacing={8}>
                          <Box sx={{ position: "relative" }}>
                            <input
                              type="file"
                              hidden
                              accept=".png,.jpg,.jpeg"
                              id="actual-btn"
                              name="profile_img"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "profile_img",
                                  e.target.files[0]
                                );
                                formik.setFieldValue(
                                  "profile_img_url",
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                            />

                            <label for="actual-btn">
                              {!formik.values.profile_img && (
                                <Stack
                                  alignItems="center"
                                  justifyContent="center"
                                  sx={{
                                    position: "relative",
                                    backgroundColor: "#f1f1f1",
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                    border: "2px solid #ff7534",
                                  }}
                                >
                                  <Iconify
                                    icon="et:profile-male"
                                    width="110px"
                                  />
                                  <Box
                                    sx={{
                                      position: "absolute",
                                      bottom: "0px",
                                      right: "0px",
                                    }}
                                  >
                                    <Iconify
                                      width={30}
                                      icon="carbon:add-filled"
                                    />
                                  </Box>
                                </Stack>
                              )}
                              {formik.values.profile_img_url && (
                                <Box sx={{ position: "relative" }} >
                                  <Box
                                    component="img"
                                    src={formik.values.profile_img_url}
                                    sx={{
                                      width: "150px",
                                      height: "150px",
                                      objectFit: "contain",
                                      borderRadius: "50%",
                                      border: "2px solid #ff7534",
                                      cursor:"pointer"
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      position: "absolute",
                                      bottom: "0px",
                                      right: "4px",
                                      cursor:"pointer"
                                    }}
                                  >
                                    <Iconify
                                      width={30}
                                      icon="carbon:add-filled"
                                    />
                                  </Box>
                                </Box>
                              )}
                            </label>
                          </Box>
                          <Stack spacing={1}>
                            <Box>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                              >
                                <Typography component="body1" fontWeight={500}>
                                  Plan Type:
                                </Typography>
                                <Typography component="body2">
                                  {formik.values.plan || "N/A"}
                                </Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <TextBox
                                size="small"
                                fullWidth
                                value={formik.values?.user_name}
                                name="user_name"
                                onChange={formik.handleChange}
                                placeholder="Enter Name"
                              />
                            </Box>
                            <Box>
                              <TextBox
                                size="small"
                                placeholder="Enter email"
                                fullWidth
                                disabled
                                value={formik.values?.email}
                                name="email"
                                onChange={formik.handleChange}
                              />
                            </Box>

                            <Box>
                              <TextBox
                                size="small"
                                placeholder="Enter number"
                                fullWidth
                                disabled
                                value={formik.values?.mobile}
                                name="mobile"
                                onChange={formik.handleChange}
                              />
                            </Box>
                            <Stack direction="column" spacing={2}>
                              <Box>
                                <Button
                                  fullWidth
                                  variant="contained"
                                  type="submit"
                                >
                                  Update Profile
                                </Button>
                              </Box>
                              <Box>
                                <ChangePasswordModal />
                              </Box>
                            </Stack>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              </Stack>
            )}
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Profile;

const ChangePasswordModal = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
      new_password: "",
      new_password_confirmation: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.password) {
        errors.password = "Password is required";
      }

      if (!values.new_password) {
        errors.new_password = "New password is required";
      }

      if (!values.new_password_confirmation) {
        errors.new_password_confirmation = "Confirm password is required";
      }
      if (
        values.new_password_confirmation &&
        values.new_password &&
        values.new_password_confirmation !== values.new_password
      ) {
        errors.new_password_confirmation =
          "Confirm password didn't match with new password";
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      await axiosInstance
        .post("api/auth/profile/change-password", values)
        .then((response) => {
          if (response.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            handleClose();
            clearToken();
            router.push("/auth/login");
          }
        })
        .catch((error) => {
          const { response } = error;
          enqueueSnackbar(response.data.message, {
            variant: "error",
          });
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.error[key]) {
                setErrors({ [key]: response.data.error[key][0] });
              }
            }
          }
          if (response?.data?.status === 406) {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        });
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Button
        // color="dark"
        fullWidth
        variant="outlined"
        startIcon={<Iconify icon="carbon:password" />}
        onClick={handleOpen}
        sx={{
          fontWeight: 500,
        }}
      >
        Change Password
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            textAlign: "center",
            transform: "translate(-50%, -50%)",

            bgcolor: "background.paper",
            border: "1px solid #f5f5f5",
            boxShadow: 24,
            p: 4,
          }}
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography component="h5" variant="h5">
              Change Password
            </Typography>
            <Box>
              <Card sx={{ borderRadius: "50%" }}>
                <IconButton
                  size="small"
                  onClick={() => {
                    handleClose();
                    formik.resetForm();
                  }}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Card>
            </Box>
          </Stack>
          <Stack spacing={1}>
            <Box>
              <PasswordBox
                fullWidth
                size="small"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter Current Password"
                helperText={formik?.errors?.password}
              />
            </Box>
            <Box>
              <PasswordBox
                fullWidth
                size="small"
                name="new_password"
                value={formik.values.new_password}
                onChange={formik.handleChange}
                placeholder="Enter New Password"
                helperText={formik?.errors?.new_password}
              />
            </Box>
            <Box>
              <PasswordBox
                fullWidth
                size="small"
                name="new_password_confirmation"
                value={formik.values.new_password_confirmation}
                onChange={formik.handleChange}
                placeholder="Enter Confirm Password"
                helperText={formik?.errors?.new_password_confirmation}
              />
            </Box>
            {/* <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              pb={2}
            >
              Are you sure you want to Change Password ?
            </Typography> */}
          </Stack>
          <Stack direction="row" mt={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={handleClose}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
