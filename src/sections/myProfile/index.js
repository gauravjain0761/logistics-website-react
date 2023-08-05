import { PasswordBox, TextBox } from "@/components/form";
import Iconify from "@/components/iconify/Iconify";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import React from "react";

const Profile = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: (theme) => theme.palette.grey[300] }}>
        <Box mt={8}>
          <Container>
            <Stack alignItems="center" spacing={4} py={4}>
              <Box>
                <Box>
                  <Typography fontWeight={500} fontSize={36}>
                    Profile
                  </Typography>
                </Box>
                {/* <Box>
                  <Typography>I am a Driver</Typography>
                </Box> */}
              </Box>
              <Stack direction="row" spacing={12}>
                <Box>
                  <Box
                    component="img"
                    src="/assets/images/dashboard/portfolio.jpeg"
                    sx={{
                      width: "130px",
                      borderRadius: "50%",
                      border: "2px solid #ff7534",
                    }}
                  />
                </Box>
                <Stack>
                  <Box>
                    <TextBox size="small" label="Profile Name" fullWidth />
                  </Box>
                  <Box>
                    <TextBox
                      size="small"
                      placeholder="xyz@gmail.com"
                      fullWidth
                      disabled
                    />
                  </Box>

                  <Box>
                    <TextBox
                      size="small"
                      placeholder="8726263731"
                      fullWidth
                      disabled
                    />
                  </Box>
                  <Box>
                    <ChangePasswordModal />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Profile;

const ChangePasswordModal = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      new_password: "",
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
        // variant="outlined"
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
            <Button fullWidth variant="outlined" onClick={handleClose}>
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
