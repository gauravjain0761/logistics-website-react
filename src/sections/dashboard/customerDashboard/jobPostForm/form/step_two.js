import { SelectBox, TextBox, UploadFileBox } from "@/components/form";
import { Add, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import moment from "moment";
import React from "react";

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
const StepTwo = ({ formik, id, addProduct, removeProduct }) => {
  return (
    <>
      <Divider sx={{ my: 3 }} />
      <Typography fontSize={16} fontWeight={500}>
        Add Pickup Address
      </Typography>
      <Box sx={{ mb: 3 }}>
        {formik?.values?.items &&
          formik?.values?.items?.length > 0 &&
          formik.values.items.map((productItem, productIndex) => {
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
                    sx={{ mb: 3, p: 0 }}
                    subheader={`Add Pickup Address-${productIndex + 1}`}
                    action={
                      <IconButton onClick={() => removeProduct(productIndex)}>
                        <Close />
                      </IconButton>
                    }
                  />

                  <Grid container spacing={3}>
                    <Grid item md={6}>
                      <Box>
                        <TextBox
                          fullWidth
                          type="date"
                          label="Pickup Date"
                          value={moment(
                            productItem?.product?.pickup_date
                          ).format("YYYY-MM-DD")}
                          min={new Date().toISOString().split("T")[0]}
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
                          // onKeyDown={(event) => event.preventDefault()}
                          size={"small"}
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.pickup_date
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <TextBox
                          fullWidth
                          type="time"
                          label="Pickup Time"
                          value={productItem?.product?.pickup_time}
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
                          value={moment(productItem?.product?.drop_date).format(
                            "YYYY-MM-DD"
                          )}
                          // min={
                          //   productItem?.product?.drop_date
                          //     ? new Date(productItem?.product?.drop_date)
                          //         .toISOString()
                          //         .split("T")[0]
                          //     : new Date().toISOString().split("T")[0]
                          // }
                          name={`items[${productIndex}].product.drop_date`}
                          onChange={(e) => {
                            formik.setFieldValue(
                              `items[${productIndex}].product.drop_date`,
                              e.target.value
                            );
                          }}
                          // onKeyDown={(event) => event.preventDefault()}
                          size={"small"}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <TextBox
                          fullWidth
                          type="time"
                          value={productItem?.product?.drop_time}
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
                          value={productItem?.product?.quantity}
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
                          value={productItem?.product?.length}
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
                          value={productItem?.product?.width}
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
                          value={productItem?.product?.height}
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
                        <Typography>Image Upload</Typography>
                        <UploadFileBox
                          fullWidth
                          url="api/auth/master/jobs/item-image"
                          accept="image/jpeg,image/png"
                          icon="upload"
                          disabled={true}
                          size="small"
                          value={productItem?.product?.image}
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
                      <Typography>Choose Material</Typography>
                      <Box>
                        <Stack direction="row" mb={1.3}>
                          <SelectBox
                            fullWidth
                            placeholder="Select"
                            size="small"
                            value={productItem?.product?.material}
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
                      productItem?.address.map((addressItem, addressIndex) => (
                        <Box key={productIndex} sx={{ mt: 1 }}>
                          <Card
                            sx={{
                              borderRadius: "0px",
                              border: "0px",
                              boxShadow: "none",
                            }}
                          >
                            <Grid container spacing={3}>
                              <Grid item md={12}>
                                <Box>
                                  <Typography fontSize={14}>
                                    Address Type
                                  </Typography>
                                  <Stack direction="row" mb={1.3}>
                                    <TextBox
                                      fullWidth
                                      disabled
                                      placeholder="Enter Pickup or Drop"
                                      options={DropTypeSelect}
                                      value={addressItem?.type}
                                      name={`items[${productIndex}].address[${addressIndex}].type`}
                                      onChange={(e) => {
                                        formik.setFieldValue(
                                          `items[${productIndex}].address[${addressIndex}].type`,
                                          e.target.value
                                        );
                                      }}
                                      helperText={
                                        formik.touched.type &&
                                        formik.errors.type
                                      }
                                      size="small"
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
                                    value={addressItem?.address}
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
                            </Grid>
                          </Card>
                        </Box>
                      ))}
                  </Box>
                </Card>
              </Box>
            );
          })}
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
    </>
  );
};

export default StepTwo;
