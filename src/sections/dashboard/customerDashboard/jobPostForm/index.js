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
import { SelectBox, TextBox } from "@/components/form";
import { ArrowDropDownCircle, Close, LocationOn } from "@mui/icons-material";
import DashboardCard from "@/module/dashboard/customerCard/dashboardCard";
import { BsX } from "react-icons/bs";

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
  addProduct,
  removeProduct,
  addAddress,
  removeAddress,
}) => {
  console.log("formikformik", formik.values.items);
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
                  <Box component="form" onSubmit={formik.handleSubmit}>
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
                        <Button
                          variant="contained"
                          onClick={() => addProduct()}
                        >
                          Add Pick Up Address
                        </Button>

                        <Box>
                          {formik?.values?.items &&
                            formik?.values?.items?.length > 0 &&
                            formik.values.items.map(
                              (productItem, productIndex) => {
                                console.log(
                                  "productItem?.image_url",
                                  productItem?.image_url,
                                  productItem?.image
                                );
                                return (
                                  <Box key={productIndex} sx={{ mt: 1 }}>
                                    <Card>
                                      <CardHeader
                                        subheader={`Pick up Address-${
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
                                      <CardContent>
                                        <Grid container spacing={3}>
                                          <Grid item md={12}>
                                            <Box>
                                              <Typography>
                                                Pick-Up Address
                                              </Typography>

                                              <TextBox
                                                fullWidth
                                                placeholder="Pick-Up Location"
                                                value={productItem?.job_title}
                                                name={`items[${productIndex}].product.job_title`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.job_title`,
                                                    e.target.value
                                                  );
                                                }}
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
                                              <Typography>
                                                Pick-Up Date
                                              </Typography>
                                              <TextBox
                                                fullWidth
                                                format="MM/DD/YYYY"
                                                type="date"
                                                value={productItem?.pickup_date}
                                                name={`items[${productIndex}].product.pickup_date`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.pickup_date`,
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
                                                Pick-Up Time
                                              </Typography>
                                              <TextBox
                                                fullWidth
                                                type="time"
                                                value={productItem?.pickup_time}
                                                name={`items[${productIndex}].product.pickup_time`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.pickup_time`,
                                                    e.target.value
                                                  );
                                                }}
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
                                                value={productItem?.quantity}
                                                name={`items[${productIndex}].product.quantity`}
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `items[${productIndex}].product.quantity`,
                                                    e.target.value
                                                  );
                                                }}
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
                                              {!productItem?.image && (
                                                <TextBox
                                                  fullWidth
                                                  type="file"
                                                  accept=".png, .jpg, .jpeg"
                                                  startIcon={
                                                    <LocationOn
                                                      fontSize="small"
                                                      color="primary"
                                                    />
                                                  }
                                                  value={productItem?.image}
                                                  name={`items[${productIndex}].product.image`}
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `items[${productIndex}].product.image`,
                                                      e.target.files[0]
                                                    );
                                                    formik.setFieldValue(
                                                      `items[${productIndex}].product.image_url`,
                                                      URL.createObjectURL(
                                                        e.target.files[0]
                                                      )
                                                    );
                                                  }}
                                                  size="small"
                                                />
                                              )}
                                            </Box>
                                            {productItem?.image_url && (
                                              <Box sx={{ display: "flex" }}>
                                                <div
                                                  style={{
                                                    position: "relative",
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  <Box
                                                    component="img"
                                                    style={{ margin: "10px" }}
                                                    src={productItem?.image_url}
                                                    alt={productItem?.image_url}
                                                    width="150px"
                                                    thumbnail
                                                  />

                                                  <Button
                                                    variant="link"
                                                    style={{
                                                      position: "absolute",
                                                      top: "5px",
                                                      right: "-5px",
                                                      backgroundColor:
                                                        "transparent",
                                                      border: "none",
                                                    }}
                                                    onClick={() => {
                                                      formik.setFieldValue(
                                                        `items[${productIndex}].product.image`,
                                                        ""
                                                      );
                                                      formik.setFieldValue(
                                                        `items[${productIndex}].product.image_url`,
                                                        ""
                                                      );
                                                    }}
                                                  >
                                                    <BsX
                                                      style={{
                                                        color: "#ff0000",
                                                        fontSize: "25px",
                                                        fontWeight: "bold",
                                                      }}
                                                    />
                                                  </Button>
                                                </div>
                                              </Box>
                                            )}
                                          </Grid>
                                          <Grid item md={6}>
                                            <Typography>
                                              Choose Material
                                            </Typography>
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

                                                <SelectBox
                                                  fullWidth
                                                  value={productItem?.material}
                                                  name={`items[${productIndex}].product.material`}
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `items[${productIndex}].product.material`,
                                                      e.target.value
                                                    );
                                                  }}
                                                  placeholder="Choose Material"
                                                  options={MaterialSelect}
                                                  startIcon={
                                                    <Iconify
                                                      icon="uil:focus"
                                                      color="#ff7534"
                                                    />
                                                  }
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
                                                      productItem?.material
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

                                        <Box sx={{ my: 4 }}>
                                          <Button
                                            variant="outlined"
                                            onClick={() =>
                                              addAddress({
                                                productItem,
                                                productIndex,
                                              })
                                            }
                                          >
                                            Add Delivery Address
                                          </Button>
                                          {productItem?.address &&
                                            productItem?.address?.length > 0 &&
                                            productItem?.address.map(
                                              (addressItem, addressIndex) => (
                                                <Box
                                                  key={productIndex}
                                                  sx={{ mt: 1 }}
                                                >
                                                  <Card>
                                                    <CardHeader
                                                      subheader={`Delivery Address-${
                                                        addressIndex + 1
                                                      }`}
                                                      action={
                                                        <IconButton
                                                          onClick={() =>
                                                            removeAddress(
                                                              productIndex,
                                                              addressIndex
                                                            )
                                                          }
                                                        >
                                                          <Close />
                                                        </IconButton>
                                                      }
                                                    />
                                                    <CardContent>
                                                      <Grid
                                                        container
                                                        spacing={3}
                                                      >
                                                        <Grid item md={12}>
                                                          <Box>
                                                            <Typography>
                                                              Delivery Address
                                                            </Typography>
                                                            <TextBox
                                                              fullWidth
                                                              placeholder="Delivery Address"
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
                                                        </Grid>
                                                      </Grid>
                                                    </CardContent>
                                                  </Card>
                                                </Box>
                                              )
                                            )}
                                        </Box>
                                      </CardContent>
                                    </Card>
                                  </Box>
                                );
                              }
                            )}
                        </Box>
                        <Divider sx={{ my: 3 }} />
                      </Grid>

                      <Grid item md={6}>
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
                                padding: ".15rem .75rem",
                                height: "40px",
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
                            <SelectBox
                              fullWidth
                              placeholder="Enter Size Eg: l x w x h Inch"
                              value={formik.values?.vehicle}
                              name={`vehicle`}
                              options={VehicleSelect}
                              onChange={formik.handleChange}
                              helperText={
                                formik.touched.vehicle && formik.errors.vehicle
                              }
                              size="small"
                              startIcon={
                                <Iconify icon="uil:focus" color="#ff7534" />
                              }
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
                            startIcon={
                              <Iconify
                                icon="material-symbols:note"
                                color="#ff7534"
                              />
                            }
                            size={"small"}
                            multiline={true}
                            rows={5}
                            helperText={
                              formik.touched.description &&
                              formik.errors.description
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item md={2}>
                          <Box>
                            <Button
                              startIcon={
                                <Iconify icon="ic:baseline-telegram" />
                              }
                              variant="contained"
                              fullWidth
                              type="submit"
                              // onClick={() =>
                              //   router.push("/dashboard/customer/job_post")
                              // }
                            >
                              Send Request
                            </Button>
                          </Box>
                        </Grid>
                        <Grid item md={1}>
                          <Box>
                            <Button
                              startIcon={
                                <Iconify icon="material-symbols:sync" />
                              }
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
