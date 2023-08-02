import React from "react";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import Iconify from "@/components/iconify/Iconify";
import { TextBox } from "@/components/form";
import { ArrowDropDownCircle, Close } from "@mui/icons-material";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";

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
const JobPostForm = ({
  formik,
  addPickupAddress,
  removePickupAddress,
  addDeliveryAddress,
  removeDeliveryAddress,
}) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ background: (theme) => theme.palette.grey[400], mt: 8 }}>
        <Container sx={{ py: 3 }}>
          <Stack spacing={4}>
            <Box>
              <DashboardCard />
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
                    <Grid md={12}>
                      <Box sx={{ my: 4 }}>
                        <Box sx={{ textAlign: "right" }}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={addPickupAddress}
                          >
                            Add Pick Up Address
                          </Button>
                        </Box>
                        {formik?.values?.pick_up_address &&
                          formik?.values?.pick_up_address?.length > 0 &&
                          formik.values.pick_up_address.map((item, index) => (
                            <Box key={index} sx={{ mt: 1 }}>
                              <Card>
                                <CardHeader
                                  subheader={`Pickup Address-${index + 1}`}
                                  action={
                                    <IconButton
                                      onClick={() => removePickupAddress(index)}
                                    >
                                      <Close />
                                    </IconButton>
                                  }
                                />
                                <CardContent>
                                  <Grid container columnSpacing={2}>
                                    <Grid item md={12}>
                                      <Box>
                                        <Typography>Pick-Up Address</Typography>

                                        <TextBox
                                          fullWidth
                                          placeholder="Pick-Up Location"
                                          startIcon={
                                            <Iconify
                                              icon="mdi:location"
                                              color="#ff7534"
                                            />
                                          }
                                          size="small"
                                        />
                                      </Box>
                                    </Grid>
                                    <Grid item md={6}>
                                      <Box>
                                        <Typography>Pick-Up Date</Typography>
                                        <TextBox
                                          fullWidth
                                          format="MM/DD/YYYY"
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
                                            <Iconify
                                              icon="mdi:clock"
                                              color="#ff7534"
                                            />
                                          }
                                          size={"small"}
                                        />
                                      </Box>
                                    </Grid>
                                    <Grid item md={6}>
                                      <Box>
                                        <Typography>
                                          Pick-Up Quantity
                                        </Typography>
                                        <TextBox
                                          fullWidth
                                          placeholder="Enter Quantity"
                                          startIcon={
                                            <Iconify
                                              icon="material-symbols:production-quantity-limits"
                                              color="#ff7534"
                                            />
                                          }
                                          size="small"
                                        />
                                      </Box>
                                    </Grid>
                                    <Grid item md={6}>
                                      <Box>
                                        <Typography>Image</Typography>
                                        <TextBox
                                          fullWidth
                                          type="file"
                                          // placeholder="Enter Quantity"
                                          startIcon={
                                            <Iconify
                                              icon="material-symbols:image-outline"
                                              color="#ff7534"
                                            />
                                          }
                                          size="small"
                                        />
                                      </Box>
                                    </Grid>
                                    <Grid item md={6}>
                                    <Typography>Choose Material</Typography>
                                      <Box>
                                        <Stack direction="row" mb={1.3}>
                                          <Box
                                            sx={{
                                              ml: 0,
                                              background: (theme) =>
                                                theme.palette.grey[100],
                                              border: "1px solid",
                                              borderColor: (theme) =>
                                                alpha(
                                                  theme.palette.grey[500],
                                                  0.32
                                                ),
                                              padding: ".375rem .75rem",
                                              borderRadius: ".25rem",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "center",
                                            }}
                                          >
                                            <Iconify
                                              icon="ooui:lab-flask"
                                              color="#ff7534"
                                            />
                                          </Box>
                                          <Autocomplete
                                            sx={{ mb: 0 }}
                                            size="small"
                                            fullWidth
                                            options={MaterialSelect}
                                            name={`Material`}
                                            value={formik?.values?.otp}
                                            onChange={formik.handleChange}
                                            error={
                                              formik.touched.otp &&
                                              formik.errors.otp
                                            }
                                            helperText={
                                              formik.touched.otp &&
                                              formik.errors.otp
                                            }
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
                                  </Grid>
                                </CardContent>
                              </Card>
                            </Box>
                          ))}
                        <Divider sx={{ mt: 2 }} />
                      </Box>
                    </Grid>

                    <Grid md={12}>
                      <Box sx={{ my: 4 }}>
                        <Box sx={{ textAlign: "right" }}>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={addDeliveryAddress}
                          >
                            Add Delivery Address
                          </Button>
                        </Box>
                        {formik?.values?.delivery_address &&
                          formik?.values?.delivery_address?.length > 0 &&
                          formik.values.delivery_address.map((item, index) => (
                            <Box key={index} sx={{ mt: 1 }}>
                              <Card>
                                <CardHeader
                                  subheader={`Delivery Address-${index + 1}`}
                                  action={
                                    <IconButton
                                      onClick={() =>
                                        removeDeliveryAddress(index)
                                      }
                                    >
                                      <Close />
                                    </IconButton>
                                  }
                                />
                                <CardContent>
                                  <Grid container columnSpacing={2}>
                                    <Grid item md={12}>
                                      <Box>
                                        <Typography>
                                          Delivery Address
                                        </Typography>
                                        <TextBox
                                          fullWidth
                                          placeholder="Delivery Address"
                                          startIcon={
                                            <Iconify
                                              icon="mdi:location"
                                              color="#ff7534"
                                            />
                                          }
                                          size="small"
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
                                            <Iconify
                                              icon="mdi:clock"
                                              color="#ff7534"
                                            />
                                          }
                                          size={"small"}
                                        />
                                      </Box>
                                    </Grid>
                                  </Grid>
                                </CardContent>
                              </Card>
                            </Box>
                          ))}
                        <Divider sx={{ mt: 2 }} />
                      </Box>
                    </Grid>

                    {/* <Grid item md={12}>
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
                    </Grid> */}

                    <Grid item md={6}>
                    <Typography>Size</Typography>
                      <Box>
                        <TextBox
                          fullWidth
                          placeholder="Enter Size Eg: l x w x h Inch"
                          startIcon={
                            <Iconify icon="uil:focus" color="#ff7534" />
                          }
                          size="small"
                        />
                      </Box>
                    </Grid>

                    {/* <Grid item md={6}>
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
                          size="small"
                        />
                      </Box>
                    </Grid> */}
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
                              router.push("/dashboard/customer/job_post")
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
                            onClick={() => router.push("/dashboard/customer")}
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

export default JobPostForm;
