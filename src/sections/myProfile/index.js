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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
                  <Box
                    component="form"
                    noValidate
                    onSubmit={formik.handleSubmit}
                  >
                    <Card
                      sx={{
                        borderRadius: "20px",
                        boxShadow: 0,
                        width: "518px",
                        height: "560px",
                        position: "relative",
                        background: (theme) => theme.palette.common.white,
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          zIndex: -1,
                        }}
                      >
                        <Box
                          component="img"
                          src="/profile/profilebg.png"
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundRepeat: "no-repeat",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <CardContent>
                        <Box sx={{ position: "relative", mt: 3 }}>
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
                            {!formik.values.profile_img_url && (
                              <Stack
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                  position: "relative",
                                  backgroundColor: "#f1f1f1",
                                  width: "138px",
                                  height: "138px",
                                  borderRadius: "50%",
                                  border: "2px solid #fff",
                                  m: "auto",
                                }}
                              >
                                <Iconify icon="et:profile-male" width="110px" />
                                <Box
                                  sx={{
                                    position: "absolute",
                                    bottom: "0px",
                                    right: "11em",
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
                              <Box sx={{ position: "relative" }}>
                                <Box
                                  component="img"
                                  src={formik.values.profile_img_url}
                                  sx={{
                                    width: "138px",
                                    height: "138px",
                                    objectFit: "contain",
                                    borderRadius: "50%",
                                    border: "2px solid #fff",
                                    backgroundColor: "#fff",
                                    cursor: "pointer",
                                    m: "auto",
                                  }}
                                />
                                <Box
                                  sx={{
                                    position: "absolute",
                                    bottom: "0px",
                                    right: "11em",
                                    cursor: "pointer",
                                  }}
                                >
                                  <Iconify width={30} icon="ion:camera-sharp" />
                                </Box>
                              </Box>
                            )}
                          </label>
                        </Box>
                        <Box py={2}>
                          <TextBox
                            size="small"
                            fullWidth
                            label="User Name"
                            name="user_name"
                            value={formik.values.user_name}
                            onChange={formik.handleChange}
                          />
                        </Box>
                        <Stack direction="row" spacing={8} width="100%">
                          <Stack spacing={1} width="100%">
                            <Box>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    backgroundColor: "#FFEBE2",
                                    p: "8px",
                                  }}
                                  height="35px"
                                  width="35px"
                                  borderRadius="50%"
                                  component="div"
                                >
                                  <Iconify
                                    icon="material-symbols:subscriptions-outline"
                                    width={18}
                                    color={(theme) =>
                                      theme.palette.primary.main
                                    }
                                  />
                                </Box>
                                <Typography component="body2" fontSize={15}>
                                  {formik.values.plan_name || "N/A"}
                                </Typography>
                              </Stack>
                            </Box>
                            <Box py={2}>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    backgroundColor: "#FFEBE2",
                                    p: "8px",
                                  }}
                                  height="35px"
                                  width="35px"
                                  borderRadius="50%"
                                  component="div"
                                >
                                  <Iconify
                                    icon="tabler:mail"
                                    width={18}
                                    color={(theme) =>
                                      theme.palette.primary.main
                                    }
                                  />
                                </Box>
                                <Typography component="body2" fontSize={15}>
                                  {formik.values.email || "N/A"}
                                </Typography>
                              </Stack>
                            </Box>
                            <Box>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    backgroundColor: "#FFEBE2",
                                    p: "8px",
                                  }}
                                  height="35px"
                                  width="35px"
                                  borderRadius="50%"
                                  component="div"
                                >
                                  <Iconify
                                    icon="material-symbols:call-outline"
                                    width={18}
                                    color={(theme) =>
                                      theme.palette.primary.main
                                    }
                                  />
                                </Box>
                                <Typography component="body2" fontSize={15}>
                                  {formik.values.mobile || "N/A"}
                                </Typography>
                              </Stack>
                            </Box>

                            <Stack
                              direction="row"
                              // justifyContent="space-between"
                              width="100%"
                              spacing={2}
                              sx={{ pt: 6 }}
                            >
                              <Box width="100%">
                                <ChangePasswordModal />
                              </Box>
                              <Box width="100%">
                                <Button
                                  fullWidth
                                  variant="contained"
                                  type="submit"
                                >
                                  Update Profile
                                </Button>
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
            width: "417px",
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
            <Typography component="h5" fontSize={25} fontWeight={600}>
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
          <Box>
            <Typography textAlign="left" fontSize={12}>
              In order to protect your account, make sure your password:
            </Typography>
          </Box>
          <Box>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Iconify icon="radix-icons:dot-filled" />
                </ListItemIcon>
                <Typography fontSize={12}>
                  Is longer than 7 characters{" "}
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Iconify icon="radix-icons:dot-filled" />
                </ListItemIcon>
                <Typography fontSize={12}>
                  Does not match or significantly contain your username, e.g. do
                  not use {"‘"}username123{"’"}.
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Stack spacing={1}>
            <Box>
              <Typography fontSize={12} textAlign="left" fontWeight={500}>
                Current Password
              </Typography>
              <PasswordBox
                fullWidth
                size="small"
                name="password"
                label="Current Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter Current Password"
                helperText={formik?.errors?.password}
              />
            </Box>
            <Box>
              <Typography fontSize={12} textAlign="left" fontWeight={500}>
                New Password
              </Typography>
              <PasswordBox
                fullWidth
                size="small"
                name="new_password"
                label="New Password"
                value={formik.values.new_password}
                onChange={formik.handleChange}
                placeholder="Enter New Password"
                helperText={formik?.errors?.new_password}
              />
            </Box>
            <Box>
              <Typography fontSize={12} textAlign="left" fontWeight={500}>
                Confirm New Password
              </Typography>
              <PasswordBox
                fullWidth
                size="small"
                label="New Password Confirm"
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
