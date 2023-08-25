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
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useRouter } from "next/router";
import Iconify from "@/components/iconify/Iconify";
import { SelectBox, TextBox, UploadFileBox } from "@/components/form";
import {
  Add,
  ArrowDropDownCircle,
  Close,
  LocationOn,
} from "@mui/icons-material";
import DashboardCard from "@/module/dashboard/customerCard/dashboardCard";
import { BsX } from "react-icons/bs";
import moment from "moment";

const VehicleSelect = [
  {
    label: "Choose Vehicle",
    value: 0,
  },
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
  {
    label: "Choose Material",
    value: 0,
  },
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
const DropTypeSelect = [
  {
    label: "Choose Address Type",
    value: 0,
  },
  {
    label: "Pickup",
    value: "pickup",
  },
  {
    label: "Drop",
    value: "drop",
  },
];
const JobPostForm = ({
  formik,
  addProduct,
  removeProduct,
  addAddress,
  removeAddress,
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
                    {/* <Iconify width="2em" icon="ion:briefcase" color="#ff7534" /> */}
                    <Typography fontWeight={500} fontSize={24}>
                      {" "}
                      Post Your Job
                    </Typography>
                  </Stack>
                  <Box component="form" onSubmit={formik.handleSubmit}>
                    <Grid container spacing={1}>
                      <Grid item md={12}>
                        <Box>
                          <TextBox
                            fullWidth
                            placeholder={"Job Title"}
                            label="Job Title"
                            size={"small"}
                            value={formik.values.name}
                            name={`name`}
                            onChange={formik.handleChange}
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid item md={12}>
                        <Divider sx={{ my: 3 }} />
                        <Box sx={{ mb: 3 }}>
                          {formik?.values?.items &&
                            formik?.values?.items?.length > 0 &&
                            formik.values.items.map(
                              (productItem, productIndex) => {
                                console.log(
                                  "log123",
                                  moment(
                                    productItem?.product?.drop_time
                                  ).format("HH:MM")
                                );
                                return (
                                  <Box key={productIndex} sx={{ mt: 1 }}>
                                    <Card
                                      sx={{
                                        borderRadius: "0px",
                                        border: "0px",
                                        boxShadow: "none",
                                      }}
                                    >
                                      <CardHeader
                                        subheader={`Add Pickup Address-${
                                          productIndex + 1
                                        }`}
                                        action={
                                          <IconButton
                                            onClick={() =>
                                              removeProduct(productIndex)
                                            }
                                          >
                                            <Close />
                                          </IconButton>
                                        }
                                      />
                                      <CardContent
                                        sx={{ pb: "0px !important" }}
                                      >
                                        <Grid container spacing={3}>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                type="date"
                                                label="Pickup Date"
                                                value={moment(
                                                  productItem?.product
                                                    ?.pickup_date
                                                ).format("YYYY-MM-DD")}
                                                min={
                                                  new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                                }
                                                name={`items[${productIndex}].product.pickup_date`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.pickup_date`,
                                                    e.target.value
                                                  );
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.drop_date`,
                                                    ""
                                                  );
                                                }}
                                                onKeyDown={(event) =>
                                                  event.preventDefault()
                                                }
                                                size={"small"}
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                type="time"
                                                label="Pickup Time"
                                                value={
                                                  productItem?.product
                                                    ?.pickup_time
                                                }
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                                name={`items[${productIndex}].product.pickup_time`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.pickup_time`,
                                                    e.target.value
                                                  );
                                                }}
                                                size={"small"}
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                type="date"
                                                label="Drop Date"
                                                value={moment(
                                                  productItem?.product
                                                    ?.drop_date
                                                ).format("YYYY-MM-DD")}
                                                min={
                                                  productItem?.product
                                                    ?.drop_date
                                                    ? new Date(
                                                        productItem?.product?.drop_date
                                                      )
                                                        .toISOString()
                                                        .split("T")[0]
                                                    : new Date()
                                                        .toISOString()
                                                        .split("T")[0]
                                                }
                                                name={`items[${productIndex}].product.drop_date`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.drop_date`,
                                                    e.target.value
                                                  );
                                                }}
                                                onKeyDown={(event) =>
                                                  event.preventDefault()
                                                }
                                                size={"small"}
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                type="time"
                                                value={
                                                  productItem?.product
                                                    ?.drop_time
                                                }
                                                label="Drop Time"
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                                name={`items[${productIndex}].product.drop_time`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.drop_time`,
                                                    e.target.value
                                                  );
                                                }}
                                                size={"small"}
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                label="Quantity"
                                                placeholder="Enter Quantity"
                                                value={
                                                  productItem?.product?.quantity
                                                }
                                                name={`items[${productIndex}].product.quantity`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.quantity`,
                                                    e.target.value
                                                  );
                                                }}
                                                size="small"
                                              />
                                            </Box>
                                          </Grid>

                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                label="Length"
                                                placeholder="Enter Product Length"
                                                value={
                                                  productItem?.product?.length
                                                }
                                                name={`items[${productIndex}].product.length`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.length`,
                                                    e.target.value
                                                  );
                                                }}
                                                size="small"
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                label="Width"
                                                placeholder="Enter Product Width"
                                                value={
                                                  productItem?.product?.width
                                                }
                                                name={`items[${productIndex}].product.width`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.width`,
                                                    e.target.value
                                                  );
                                                }}
                                                size="small"
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <TextBox
                                                fullWidth
                                                label="Height"
                                                placeholder="Enter Product Height"
                                                value={
                                                  productItem?.product?.height
                                                }
                                                name={`items[${productIndex}].product.height`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.height`,
                                                    e.target.value
                                                  );
                                                }}
                                                size="small"
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Box>
                                              <Typography>
                                                Image Upload
                                              </Typography>
                                              <UploadFileBox
                                                fullWidth
                                                label="Choose File"
                                                url="api/auth/master/jobs/item-image"
                                                accept="image/jpeg,image/png"
                                                icon="upload"
                                                disabled={true}
                                                size="small"
                                                value={
                                                  productItem?.product?.image
                                                }
                                                name={`items[${productIndex}].product.image`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.image`,
                                                    e
                                                  );
                                                }}
                                              />
                                            </Box>
                                          </Grid>
                                          <Grid item md={6}>
                                            <Typography>
                                              Choose Material
                                            </Typography>
                                            <Box>
                                              <Stack direction="row" mb={1.3}>
                                                <SelectBox
                                                  fullWidth
                                                  placeholder="Select"
                                                  size="small"
                                                  value={
                                                    productItem?.product
                                                      ?.material
                                                  }
                                                  name={`items[${productIndex}].product.material`}
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `items[${productIndex}].product.material`,
                                                      e.target.value
                                                    );
                                                  }}
                                                  options={MaterialSelect}
                                                  vehicle="small"
                                                />

                                                {/* <Autocomplete
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
                                                    value={
                                                      productItem?.product?.material
                                                    }
                                                    name={`items[${productIndex}].product.material`}
                                                    onChange={(e) => {
                                                      formik.setFieldValue(
                                                        `items[${productIndex}].product.material`,
                                                        e.target.value
                                                      );
                                                    }}
                                                    placeholder="Choose Material"
                                                    InputProps={{
                                                      ...params.InputProps,
                                                    }}
                                                  />
                                                )}
                                              /> */}
                                              </Stack>
                                            </Box>
                                          </Grid>
                                        </Grid>
                                        <Box>
                                          <Divider
                                            sx={{
                                              my: 2,
                                            }}
                                          />
                                          <Typography
                                            component="h5"
                                            variant="h5"
                                            fontSize={15}
                                            fontWeight={400}
                                          >
                                            Add Delivery Address
                                          </Typography>
                                        </Box>
                                        <Box sx={{ my: 4 }}>
                                          {productItem?.address &&
                                            productItem?.address?.length > 0 &&
                                            productItem?.address.map(
                                              (addressItem, addressIndex) => (
                                                <Box
                                                  key={productIndex}
                                                  sx={{ mt: 1 }}
                                                >
                                                  <Card
                                                    sx={{
                                                      borderRadius: "0px",
                                                      border: "0px",
                                                      boxShadow: "none",
                                                    }}
                                                  >
                                                    {/* <CardHeader
                                                      subheader={`Delivery Address-${
                                                        addressIndex + 1
                                                      }`}
                                                      // action={
                                                      //   <IconButton
                                                      //     onClick={() =>
                                                      //       removeAddress(
                                                      //         productIndex,
                                                      //         addressIndex
                                                      //       )
                                                      //     }
                                                      //   >
                                                      //     <Close />
                                                      //   </IconButton>
                                                      // }
                                                    /> */}
                                                    <CardContent
                                                      sx={{
                                                        pb: "0px !important",
                                                      }}
                                                    >
                                                      <Grid
                                                        container
                                                        spacing={3}
                                                      >
                                                        <Grid item md={12}>
                                                          <Box>
                                                            <Typography
                                                              fontSize={14}
                                                            >
                                                              Select Address
                                                              Type
                                                            </Typography>
                                                            <Stack
                                                              direction="row"
                                                              mb={1.3}
                                                            >
                                                              <SelectBox
                                                                fullWidth
                                                                placeholder="Enter Pickup or Drop"
                                                                options={
                                                                  DropTypeSelect
                                                                }
                                                                value={
                                                                  addressItem?.type
                                                                }
                                                                name={`items[${productIndex}].address[${addressIndex}].type`}
                                                                onChange={(
                                                                  e
                                                                ) => {
                                                                  formik.setFieldValue(
                                                                    `items[${productIndex}].address[${addressIndex}].type`,
                                                                    e.target
                                                                      .value
                                                                  );
                                                                }}
                                                                helperText={
                                                                  formik.touched
                                                                    .type &&
                                                                  formik.errors
                                                                    .type
                                                                }
                                                                size="small"
                                                                startIcon={
                                                                  <Iconify
                                                                    icon="uil:focus"
                                                                    color="#ff7534"
                                                                  />
                                                                }
                                                                type="small"
                                                              />
                                                            </Stack>
                                                          </Box>
                                                        </Grid>
                                                        <Grid item md={12}>
                                                          <Box>
                                                            <TextBox
                                                              fullWidth
                                                              placeholder="Type Address"
                                                              label="Address"
                                                              value={
                                                                addressItem?.address
                                                              }
                                                              name={`items[${productIndex}].address[${addressIndex}].address`}
                                                              onChange={(e) => {
                                                                formik.setFieldValue(
                                                                  `items[${productIndex}].address[${addressIndex}].address`,
                                                                  e.target.value
                                                                );
                                                              }}
                                                              size="small"
                                                            />
                                                          </Box>
                                                        </Grid>
                                                        {/* <Grid item md={6}>
                                                          <Box>
                                                            <Typography>
                                                              Delivery Date
                                                            </Typography>
                                                            <TextBox
                                                              fullWidth
                                                              type="date"
                                                              value={
                                                                addressItem?.drop_date
                                                              }
                                                              name={`items[${productIndex}].address[${addressIndex}].drop_date`}
                                                              onChange={(e) => {
                                                                formik.setFieldValue(
                                                                  `items[${productIndex}].address[${addressIndex}].drop_date`,
                                                                  e.target.value
                                                                );
                                                              }}
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
                                                            <Typography>
                                                              Delivery Time
                                                            </Typography>
                                                            <TextBox
                                                              fullWidth
                                                              type="time"
                                                              placeholder="Drop-Out Location"
                                                              value={
                                                                addressItem?.drop_time
                                                              }
                                                              name={`items[${productIndex}].address[${addressIndex}].drop_time`}
                                                              onChange={(e) => {
                                                                formik.setFieldValue(
                                                                  `items[${productIndex}].address[${addressIndex}].drop_time`,
                                                                  e.target.value
                                                                );
                                                              }}
                                                              startIcon={
                                                                <Iconify
                                                                  icon="mdi:clock"
                                                                  color="#ff7534"
                                                                />
                                                              }
                                                              size={"small"}
                                                            />
                                                          </Box>
                                                        </Grid> */}
                                                      </Grid>
                                                    </CardContent>
                                                  </Card>
                                                </Box>
                                              )
                                            )}
                                          {/* <Box sx={{ mt: 2 }}>
                                            <Button
                                              variant="outlined"
                                              onClick={() =>
                                                addAddress({
                                                  productItem,
                                                  productIndex,
                                                })
                                              }
                                            >
                                              + Add Another
                                            </Button>
                                          </Box> */}
                                        </Box>
                                      </CardContent>
                                    </Card>
                                  </Box>
                                );
                              }
                            )}
                        </Box>
                        <Button
                          variant="outlined"
                          onClick={() => addProduct()}
                          startIcon={<Add />}
                          color="greyLight"
                        >
                          Add Another
                        </Button>
                        <Divider sx={{ my: 3 }} />
                      </Grid>

                      {/* <Grid item md={6}>
                        <Typography>Size</Typography>
                        <Box>
                          <TextBox
                            fullWidth
                            placeholder="Enter Size Eg: l x w x h Inch"
                            value={formik.values?.size}
                            name={`size`}
                            onChange={formik.handleChange}
                            helperText={
                              formik.touched.size && formik.errors.size
                            }
                            startIcon={
                              <Iconify icon="uil:focus" color="#ff7534" />
                            }
                            size="small"
                          />
                        </Box>
                      </Grid> */}

                      <Grid item md={12}>
                        <Box>
                          <Typography fontSize={15} mb={2}>
                            Vehicle Requirement
                          </Typography>
                          <Stack direction="row" mb={1.3}>
                            <SelectBox
                              fullWidth
                              label="Vehicle"
                              value={formik.values?.vehicle}
                              name={`vehicle`}
                              options={VehicleSelect}
                              onChange={formik.handleChange}
                              helperText={
                                formik.touched.vehicle && formik.errors.vehicle
                              }
                              size="small"
                              vehicle="small"
                            />
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid item md={12}>
                        <Box>
                          <TextBox
                            fullWidth
                            placeholder="Important Note:"
                            name={`description`}
                            value={formik?.values?.description}
                            onChange={formik.handleChange}
                            size={"small"}
                            multiline={true}
                            rows={7}
                            helperText={
                              formik.touched.description &&
                              formik.errors.description
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 1 }}
                      >
                        <Grid item md={2}>
                          <Box>
                            <Button
                              variant="outlined"
                              fullWidth
                              onClick={() => router.push("/dashboard/customer")}
                            >
                              Cancel
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={2}>
                          <Box sx={{ width: "180px" }}>
                            <Button
                              variant="contained"
                              fullWidth
                              type="submit"
                              // onClick={() =>
                              //   router.push("/dashboard/customer/job_post")
                              // }
                            >
                              Save
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
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
