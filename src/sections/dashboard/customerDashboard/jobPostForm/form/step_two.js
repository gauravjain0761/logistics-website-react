import {
  FormControl,
  GoogleAutocomplete,
  SelectBox,
  TextBox,
  UploadFileBox,
} from "@/components/form";
import { Add, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
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
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.pickup_date
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <FormControl
                          fullWidth
                          size="small"
                          error={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.pickup_time
                          }
                        >
                          <TimePicker
                            sx={{
                              "& .MuiOutlinedInput-input": {
                                padding: "8.5px 14px !important",
                              },
                            }}
                            fullWidth
                            format="hh:mm A"
                            label="Pickup Time"
                            value={productItem?.product?.pickup_time}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name={`items[${productIndex}].product.pickup_time`}
                            onChange={(e) => {
                              formik.setFieldValue(
                                `items[${productIndex}].product.pickup_time`,
                                moment(e).format("hh:mm a")
                              );
                            }}
                            size={"small"}
                            helperText={
                              !isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.pickup_time
                            }
                          />
                          <Box sx={{ display: "flex" }}>
                            {!isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.pickup_time && (
                                <FormHelperText>
                                  {!isEmpty(formik.touched) &&
                                    formik?.errors?.items &&
                                    formik?.errors?.items?.length > 0 &&
                                    formik?.errors?.items[productIndex]?.product
                                      ?.index === productIndex &&
                                    formik?.errors?.items[productIndex]?.product
                                      ?.pickup_time}
                                </FormHelperText>
                              )}
                          </Box>
                        </FormControl>
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.drop_date
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item md={6}>
                      <Box>
                        <FormControl
                          fullWidth
                          size="small"
                          error={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.drop_time
                          }
                        >
                          <TimePicker
                            sx={{
                              "& .MuiOutlinedInput-input": {
                                padding: "8.5px 14px !important",
                              },
                            }}
                            fullWidth
                            format="hh:mm A"
                            label="Drop Time"
                            value={productItem?.product?.drop_time}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name={`items[${productIndex}].product.drop_time`}
                            onChange={(e) => {
                              formik.setFieldValue(
                                `items[${productIndex}].product.drop_time`,
                                moment(e).format("hh:mm a")
                              );
                            }}
                            size={"small"}
                            helperText={
                              !isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.drop_time
                            }
                          />
                          <Box sx={{ display: "flex" }}>
                            {!isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.drop_time && (
                                <FormHelperText>
                                  {!isEmpty(formik.touched) &&
                                    formik?.errors?.items &&
                                    formik?.errors?.items?.length > 0 &&
                                    formik?.errors?.items[productIndex]?.product
                                      ?.index === productIndex &&
                                    formik?.errors?.items[productIndex]?.product
                                      ?.drop_time}
                                </FormHelperText>
                              )}
                          </Box>
                        </FormControl>
                      </Box>
                      {/* <Box>
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.drop_time
                          }
                        />
                      </Box> */}
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product
                              ?.quantity
                          }
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product?.length
                          }
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product?.width
                          }
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product?.height
                          }
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
                          helperText={
                            !isEmpty(formik.touched) &&
                            formik?.errors?.items &&
                            formik?.errors?.items?.length > 0 &&
                            formik?.errors?.items[productIndex]?.product
                              ?.index === productIndex &&
                            formik?.errors?.items[productIndex]?.product?.image
                          }
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
                            helperText={
                              !isEmpty(formik.touched) &&
                              formik?.errors?.items &&
                              formik?.errors?.items?.length > 0 &&
                              formik?.errors?.items[productIndex]?.product
                                ?.index === productIndex &&
                              formik?.errors?.items[productIndex]?.product
                                ?.material
                            }
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
                                      size="small"
                                      type="small"
                                    />
                                  </Stack>
                                </Box>
                              </Grid>
                              <Grid item md={12}>
                                <GoogleAutocomplete
                                  fullWidth
                                  size="small"
                                  name={`items[${productIndex}].address[${addressIndex}].address`}
                                  value={addressItem?.address}
                                  onSelect={(address, lat, long) => {
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].address`,
                                      address
                                    );
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].lat`,
                                      lat
                                    );
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].long`,
                                      long
                                    );
                                  }}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      `items[${productIndex}].address[${addressIndex}].address`,
                                      e
                                    );
                                  }}
                                  endIcon={
                                    addressItem?.address && (
                                      <IconButton
                                        size="small"
                                        inputEndAdornmentPosition="end"
                                        onClick={() => {
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].address`,
                                            ""
                                          );
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].lat`,
                                            ""
                                          );
                                          formik.setFieldValue(
                                            `items[${productIndex}].address[${addressIndex}].long`,
                                            ""
                                          );
                                        }}
                                      >
                                        <Close fontSize="small" />
                                      </IconButton>
                                    )
                                  }
                                  helperText={
                                    !isEmpty(formik.touched) &&
                                    formik?.errors?.items &&
                                    formik?.errors?.items[productIndex]
                                      ?.address[addressIndex].address
                                  }
                                />
                                {/* <Box>
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
                                    helperText={
                                      !isEmpty(formik.touched) &&
                                      formik?.errors?.items &&
                                      formik?.errors?.items[productIndex]
                                        ?.address[addressIndex].address
                                    }
                                  />
                                </Box> */}
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
