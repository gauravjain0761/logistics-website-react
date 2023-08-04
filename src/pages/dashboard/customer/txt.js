import { TextBox } from "@/components/form";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { reject } from "lodash";

const Demo = () => {
  const product = {
    product: {
      name: "",
      address: [],
    },
  };

  const address = {
    address: "",
  };

  const addProduct = () => {
    formik.setFieldValue("items", [...(formik.values.items || []), product]);
  };

  const addAddress = ({ productItem, productIndex }) => {
    formik.setFieldValue(`items[${productIndex}].product.address`, [
      ...(productItem.product.address || []),
      address,
    ]);
  };

  const formik = useFormik({
    initialValues: {
      items: [],
    },
    onSubmit: (values) => {
      console.log("valuesvalues", values);
    },
  });

  const removeProduct = (index) => {
    if (formik?.values?.items) {
      const data = formik.values.items.splice(index, 1);
      formik.setFieldValue("items", reject(formik.values.items, data));
    }
  };

  const removeAddress = (productIndex, addressIndex) => {
    if (formik?.values?.items) {
      const data = formik.values.items[productIndex]?.product?.address.splice(
        addressIndex,
        1
      );
      formik.setFieldValue(
        `items[${productIndex}].product.address`,
        reject(formik.values.items[productIndex]?.product?.address, data)
      );
    }
  };

  console.log("formik.values", formik.values.items);
  return (
    <Box sx={{ my: 4 }}>
      <Container>
        <Button variant="contained" onClick={() => addProduct()}>
          Add Item
        </Button>

        <Box component="form" noValidate onSubmit={formik.handleSubmit}>
          {formik?.values?.items &&
            formik?.values?.items?.length > 0 &&
            formik.values.items.map((productItem, productIndex) => (
              <Box key={productIndex} sx={{ mt: 1 }}>
                <Card>
                  <CardHeader
                    subheader={`Pick up Address-${productIndex + 1}`}
                    action={
                      <IconButton onClick={() => removeProduct(productIndex)}>
                        <Close />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <TextBox
                      fullWidth
                      placeholder="Delivery Address"
                      size="small"
                      value={productItem?.product?.name}
                      name={`items[${productIndex}].product.name`}
                      onChange={(e) => {
                        formik.setFieldValue(
                          `items[${productIndex}].product.name`,
                          e.target.value
                        );
                      }}
                    />

                    <Box sx={{ my: 4 }}>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          addAddress({ productItem, productIndex })
                        }
                      >
                        Add Address
                      </Button>
                      {productItem?.product?.address &&
                        productItem?.product?.address?.length > 0 &&
                        productItem?.product?.address.map(
                          (addressItem, addressIndex) => (
                            <Box key={productIndex} sx={{ mt: 1 }}>
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
                                  <TextBox
                                    fullWidth
                                    placeholder="Delivery Address"
                                    size="small"
                                    value={addressItem?.address}
                                    name={`items[${productIndex}].product.address[${addressIndex}].address`}
                                    onChange={(e) => {
                                      formik.setFieldValue(
                                        `items[${productIndex}].product.address[${addressIndex}].address`,
                                        e.target.value
                                      );
                                    }}
                                  />
                                </CardContent>
                              </Card>
                            </Box>
                          )
                        )}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          <Box sx={{ mt: 6 }}>
            <Button type="submit">Submit</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Demo;
const array = [
  {
    product: {
      image: "dsf",
      size: "sd",
      material: "sdfsdf",
      pickup_date: "343",
      pickup_time: "343",
      drop_date: "343",
      drop_time: "343",
    },
    address: [
      {
        address: "dsfsdfsdf",
        lat: 3434.34,
        long: 23423,
        type: "drop or pickup",
      },
      {
        address: "dsfsdfsdf",
        lat: 3434.34,
        long: 23423,
        type: "drop or pickup",
      },
    ],
  },
  {
    product: {
      image: "dsf",
      size: "sd",
      material: "sdfsdf",
      pickup_date: 343,
      pickup_time: 343,
      drop_date: 343,
      drop_time: 343,
    },
    address: [
      {
        address: "dsfsdfsdf",
        lat: 3434.34,
        long: 23423,
        type: "drop or pickup",
      },
      {
        address: "dsfsdfsdf",
        lat: 3434.34,
        long: 23423,
        type: "drop or pickup",
      },
    ],
  },
];
