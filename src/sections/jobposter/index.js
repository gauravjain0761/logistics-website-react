import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import Iconify from "@/components/iconify/Iconify";
import { TextBox } from "@/components/form";
import { ArrowDropDownCircle } from "@mui/icons-material";

const VehicleSelect = [
  // {
  //   label: "Choose Option for Get OTP",
  //   value: 0,
  // },
  {
    label: "Bike",
    value: "Bike",
  },
  {
    label: "Van",
    value: "Van",
  },
  {
    label: "Truck",
    value: "Truck",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const MaterialSelect = [
  // {
  //   label: "Choose Option for Get OTP",
  //   value: 0,
  // },
  {
    label: "Liquid",
    value: "Liquid",
  },
  {
    label: "Solid",
    value: "Solid",
  },
  {
    label: "Gas",
    value: "Gas",
  },
  {
    label: "Solution",
    value: "Solution",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const JobPost = ({ formik }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ background: (theme) => theme.palette.grey[400], mt: 8 }}>
        <Container sx={{ py: 4 }}>
          <Stack spacing={4}>
            <Box>
              <Grid container spacing={2}>
                <Grid item md={3}>
                  <Card sx={{ backgroundColor: "#ff7534" }}>
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={1}
                      >
                        <Box
                          sx={{ backgroundColor: "#fff" }}
                          height="60px"
                          px={1.3}
                          py={0.8}
                          borderRadius={2}
                          component={"img"}
                          src="/assets/images/dashboard/jobposted.png"
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={300}
                            color={"#fff"}
                          >
                            JOB POSTED
                          </Typography>
                          <Typography
                            variant="h4"
                            color={"#fff"}
                            textAlign={"center"}
                          >
                            2
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card sx={{ backgroundColor: "#ff7534" }}>
                    <CardContent>
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Box
                          sx={{ backgroundColor: "#fff" }}
                          height="60px"
                          px={1.3}
                          py={0.8}
                          borderRadius={2}
                          component={"img"}
                          src="/assets/images/dashboard/moneyspend.png"
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={300}
                            color={"#fff"}
                          >
                            MONEY SPEND
                          </Typography>
                          <Typography
                            variant="h4"
                            color={"#fff"}
                            textAlign={"center"}
                          >
                            $ 20000
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card sx={{ backgroundColor: "#ff7534" }}>
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={2}
                      >
                        <Box
                          sx={{ backgroundColor: "#fff" }}
                          height="60px"
                          px={1.3}
                          py={0.8}
                          borderRadius={2}
                          component={"img"}
                          src="/assets/images/dashboard/jobhistory.png"
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={300}
                            color={"#fff"}
                          >
                            JOB HISTORY
                          </Typography>
                          <Typography
                            variant="h4"
                            color={"#fff"}
                            textAlign={"center"}
                          >
                            20
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={3}>
                  <Card sx={{ backgroundColor: "#ff7534" }}>
                    <CardContent>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={2}
                      >
                        <Box
                          sx={{ backgroundColor: "#fff" }}
                          height="60px"
                          px={1.3}
                          py={0.8}
                          borderRadius={2}
                          component={"img"}
                          src="/assets/images/dashboard/subscription.png"
                        />
                        <Box>
                          <Typography
                            variant="h6"
                            fontWeight={300}
                            color={"#fff"}
                          >
                            SUBSCRIPTION
                          </Typography>
                          <Typography
                            variant="h4"
                            color={"#fff"}
                            textAlign={"center"}
                          >
                            3 Month
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Card sx={{ borderRadius: "0px" }}>
                <CardContent>
                  <Stack direction="row" spacing={1} py={2}>
                    <Iconify width="2em" icon="ion:briefcase" color="#ff7534" />
                    <Typography variant="h4" color="primary">
                      {" "}
                      Post Your New Job
                    </Typography>
                  </Stack>
                  <Grid container spacing={1}>
                    <Grid item md={12}>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder={"Enter Job Title"}
                          startIcon={
                            <Iconify icon="tabler:heading" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={12}>
                      <Box>
                        <Typography>Pick-Up Address</Typography>
                        <TextBox
                          fullWidth
                          placeholder={"Drop-Out Location"}
                          startIcon={
                            <Iconify icon="mdi:location" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Pick-Up Date</Typography>
                        <TextBox
                          fullWidth
                          type="date"
                          startIcon={
                            <Iconify
                              icon="mingcute:calendar-fill"
                              color="#ff7534"
                            />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Pick-Up Time</Typography>
                        <TextBox
                          fullWidth
                          type="time"
                          placeholder="Drop-Out Location"
                          startIcon={
                            <Iconify icon="mdi:clock" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={12}>
                      <Box>
                        <Typography>Delivery Address</Typography>
                        <TextBox
                          fullWidth
                          placeholder="Drop-Out Location"
                          startIcon={
                            <Iconify icon="mdi:location" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Delivery Date</Typography>
                        <TextBox
                          fullWidth
                          type="date"
                          startIcon={
                            <Iconify
                              icon="mingcute:calendar-fill"
                              color="#ff7534"
                            />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Delivery Time</Typography>
                        <TextBox
                          fullWidth
                          type="time"
                          placeholder="Drop-Out Location"
                          startIcon={
                            <Iconify icon="mdi:clock" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Stack direction="row" mb={1.3}>
                          <Box
                            sx={{
                              ml: 0,
                              background: (theme) => theme.palette.grey[100],
                              border: "1px solid",
                              borderColor: (theme) =>
                                alpha(theme.palette.grey[500], 0.32),
                              padding: ".375rem .75rem",
                              borderRadius: ".25rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Iconify icon="ooui:lab-flask" color="#ff7534" />
                          </Box>
                          <Autocomplete
                            sx={{ mb: 0 }}
                            size="small"
                            fullWidth
                            options={MaterialSelect}
                            name={`Material`}
                            value={formik?.values?.otp}
                            onChange={formik.handleChange}
                            error={formik.touched.otp && formik.errors.otp}
                            helperText={formik.touched.otp && formik.errors.otp}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Choose Material"
                                InputProps={{
                                  ...params.InputProps,
                                }}
                              />
                            )}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder="Enter Size Eg: l x w x h Inch"
                          startIcon={
                            <Iconify icon="uil:focus" color="#ff7534" />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Product Image</Typography>
                        <TextBox
                          fullWidth
                          type="file"
                          startIcon={
                            <Iconify
                              icon="solar:gallery-bold"
                              color="#ff7534"
                            />
                          }
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <Typography>Vehicle Requirement</Typography>
                        <Stack direction="row" mb={1.3}>
                          <Box
                            sx={{
                              ml: 0,
                              background: (theme) => theme.palette.grey[100],
                              border: "1px solid",
                              borderColor: (theme) =>
                                alpha(theme.palette.grey[500], 0.32),
                              padding: ".375rem .75rem",
                              borderRadius: ".25rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Iconify
                              icon="solar:gallery-bold"
                              color="#ff7534"
                            />
                          </Box>
                          <Autocomplete
                            sx={{ mb: 0 }}
                            size="small"
                            fullWidth
                            options={VehicleSelect}
                            name={`Vehicle`}
                            value={formik?.values?.otp}
                            onChange={formik.handleChange}
                            error={formik.touched.otp && formik.errors.otp}
                            helperText={formik.touched.otp && formik.errors.otp}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                placeholder="Choose Vehicle Type"
                                InputProps={{
                                  ...params.InputProps,
                                }}
                              />
                            )}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item md={12}>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder="Important Note:"
                          startIcon={
                            <Iconify
                              icon="material-symbols:note"
                              color="#ff7534"
                            />
                          }
                          size={"small"}
                          multiline={true}
                          rows={5}
                        />
                      </Box>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item md={2}>
                        <Box>
                          <Button
                            startIcon={<Iconify icon="ic:baseline-telegram" />}
                            variant="contained"
                            fullWidth
                            onClick={() =>
                              router.push("/dashboard/customer_dashboard_next")
                            }
                          >
                            Send Request
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item md={1}>
                        <Box>
                          <Button
                            startIcon={<Iconify icon="material-symbols:sync" />}
                            sx={{
                              backgroundColor: "#343a40",
                              ":hover": { backgroundColor: "#343a40" },
                            }}
                            variant="contained"
                            fullWidth
                          >
                            Reset
                          </Button>
                        </Box>
                      </Grid>
                      <Grid item md={1}>
                        <Box>
                          <Button
                            startIcon={<Iconify icon="carbon:close-filled" />}
                            sx={{
                              backgroundColor: "#343a40",
                              ":hover": { backgroundColor: "#343a40" },
                            }}
                            variant="contained"
                            fullWidth
                          >
                            Close
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default JobPost;
