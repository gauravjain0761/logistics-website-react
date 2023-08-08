import { PasswordBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import axiosInstance from "@/utils/axios";
import { clearToken } from "@/utils/localStorageAvailable";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";

const Profile = ({ data, formik }) => {
  console.log("datadata", data);
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[300] }}>
        <Box mt={8}>
          <Container>
            <Stack alignItems="center" spacing={4} py={4}>
              <Card>
                <CardContent>
                  <Box>
                    <Box textAlign="center" pb={3}>
                      <Divider />
                      <Typography fontWeight={400} fontSize={36}>
                        Profile
                      </Typography>
                      <Divider />
                    </Box>
                    {/* <Box>
                  <Typography>I am a Driver</Typography>
                </Box> */}
                  </Box>
                  <Stack direction="row" spacing={8}>
                    <Box>
                      <Box
                        component="img"
                        src={
                          data?.profile?.profile_img
                            ? data?.profile?.profile_img
                            : "/assets/images/dashboard/portfolio.jpeg"
                        }
                        sx={{
                          width: "130px",
                          borderRadius: "50%",
                          border: "2px solid #ff7534",
                        }}
                      />
                    </Box>
                    <Stack>
                      <Box>
                        <TextBox
                          size="small"
                          fullWidth
                          value={data?.profile?.user_name}
                          disabled
                        />
                      </Box>
                      <Box>
                        <TextBox
                          size="small"
                          placeholder="xyz@gmail.com"
                          fullWidth
                          disabled
                          value={data?.email}
                        />
                      </Box>

                      <Box>
                        <TextBox
                          size="small"
                          placeholder="8726263731"
                          fullWidth
                          disabled
                          value={data?.mobile}
                        />
                      </Box>
                      <Box>
                        <ChangePasswordModal />
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
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
        variant="contained"
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
          <Stack spacing={2}>
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
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              pb={2}
            >
              Are you sure you want to Change Password ?
            </Typography>
          </Stack>
          <Stack direction="row" spacing={8}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              // onClick={handleClose}
            >
              Yes
            </Button>
            <Button fullWidth variant="outlined" onClick={handleClose}>
              No
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};
