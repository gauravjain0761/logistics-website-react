import React, { useContext } from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPostForm from "@/sections/dashboard/customerDashboard/jobPostForm";

import { every, isEmpty, reject } from "lodash";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import AuthGuard from "@/auth/AuthGuard";
import { useAuthContext } from "@/auth/useAuthContext";
import { StepperContext } from "@/components/stepper/stepperContext";

const PostJob = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuthContext();
  const { value, setValue } = useContext(StepperContext);
  const isLastStep = value === 3 - 1;

  const PickupAddress = {
    address: "",
    lat: 0,
    long: 0,
    type: "pickup",
    postal_code: "",
  };

  const DropAddress = {
    address: "",
    lat: 0,
    long: 0,
    type: "drop",
    postal_code: "",
  };

  const product = {
    product: {
      image: "",
      height: "",
      length: "",
      width: "",
      material: "",
      pickup_date: "",
      pickup_time: "",
      drop_date: "",
      drop_time: "",
    },
    address: [PickupAddress, DropAddress],
  };

  const itemsValidation = (values, errors) => {
    errors.items = [];
    let address = [];

    let itemObject = {};
    let addressObject = {};

    values?.items &&
      values?.items?.length > 0 &&
      values?.items.forEach((element, elementIndex) => {
        itemObject["product"] = {};

        if (element?.address?.length) {
          element.address.forEach((addressElement, addressIndex) => {
            // itemObject["address"]["index"] = elementIndex;
            if (!addressElement?.address) {
              addressObject = {
                address: "Address is required",
                index: addressIndex,
              };
            } else {
              addressObject = {
                address: "",
                index: addressIndex,
              };
            }

            if (!addressElement?.postal_code) {
              addressObject = {
                ...addressObject,
                postal_code: "Post Code is required",
                index: addressIndex,
              };
            } else if (
              addressElement?.postal_code?.length < 5 ||
              addressElement?.postal_code?.length > 8
            ) {
              addressObject = {
                ...addressObject,
                postal_code: "Min 5 digit and Max 8 digit is required",
                index: addressIndex,
              };
            } else {
              addressObject = {
                ...addressObject,
                postal_code: "",
                index: addressIndex,
              };
            }
            address.push(addressObject);
            itemObject["address"] = address;
            addressObject = {};
          });
        }

        itemObject["product"]["index"] = elementIndex;

        if (!element?.product?.image) {
          itemObject["product"]["image"] = "Image is required";
        } else {
          itemObject["product"]["image"] = "";
        }

        if (!element?.product?.height) {
          itemObject["product"]["height"] = "Height is required";
        } else {
          itemObject["product"]["height"] = "";
        }

        if (!element?.product?.length) {
          itemObject["product"]["length"] = "Length is required";
        } else {
          itemObject["product"]["length"] = "";
        }

        if (!element?.product?.width) {
          itemObject["product"]["width"] = "Width is required";
        } else {
          itemObject["product"]["width"] = "";
        }

        if (!element?.product?.material) {
          itemObject["product"]["material"] = "Material is required";
        } else {
          itemObject["product"]["material"] = "";
        }

        if (!element?.product?.pickup_date) {
          itemObject["product"]["pickup_date"] = "Pickup date is required";
        } else {
          itemObject["product"]["pickup_date"] = "";
        }

        if (!element?.product?.pickup_time) {
          itemObject["product"]["pickup_time"] = "Pickup time is required";
        } else {
          itemObject["product"]["pickup_time"] = "";
        }

        if (!element?.product?.drop_date) {
          itemObject["product"]["drop_date"] = "Delivery date is required";
        } else {
          itemObject["product"]["drop_date"] = "";
        }

        if (!element?.product?.drop_time) {
          itemObject["product"]["drop_time"] = "Delivery time is required";
        } else {
          itemObject["product"]["drop_time"] = "";
        }

        if (!element?.product?.quantity) {
          itemObject["product"]["quantity"] = "Quantity is required";
        } else {
          itemObject["product"]["quantity"] = "";
        }

        errors.items.push({
          ...itemObject,
          address: address,
        });
        itemObject = {};
        address = [];
        addressObject = {};
      });

    if (errors?.items?.length) {
      let isAllProductEmpty = every(errors?.items, (product) => {
        let isProduct = false;
        let address = false;

        if (product?.address) {
          address = every(product?.address, (address) => !address?.address);
        }

        isProduct =
          isEmpty(product?.product?.image) &&
          isEmpty(product?.product?.height) &&
          isEmpty(product?.product?.length) &&
          isEmpty(product?.product?.width) &&
          isEmpty(product?.product?.material) &&
          isEmpty(product?.product?.pickup_date) &&
          isEmpty(product?.product?.pickup_time) &&
          isEmpty(product?.product?.drop_date) &&
          isEmpty(product?.product?.drop_time);

        if (isProduct && address) {
          return true;
        }
        return false;
      });
      if (isAllProductEmpty) {
        errors = delete errors.items;
      }
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      user_id: user?.id,
      created_by: "customer",
      name: "",
      vehicle: 0,
      vehical_type: 0,
      items: [product],
      budget: "",
      description: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Job Title is required";
      }

      if (values?.items?.length) {
        itemsValidation(values, errors);
      }
      if (!values.vehicle) {
        errors.vehicle = "Vehicle is required";
      }
      if (!values.vehical_type) {
        errors.vehical_type = "Vehicle Type is required";
      }

      if (!values.budget) {
        errors.budget = "Job budget is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }

      return errors;
    },
    onSubmit: async (values, { setErrors, setFieldValue }) => {
      let url, method;

      if (id === "create") {
        url = "/api/auth/jobs/add";
        method = "POST";
      } else {
        url = `/api/auth/jobs/update/${id}`;
        method = "POST";
      }
      if (id !== "create") {
        values["items"] = JSON.stringify(values?.items);
        await axiosInstance
          .request({
            url: url,
            method: method,
            data: values,
          })
          .then((response) => {
            if (response?.status === 200) {
              setFieldValue("items", JSON.parse(values?.items));
              router.push("/dashboard/customer/job_posted");
              enqueueSnackbar(response.data.message, {
                variant: "success",
              });
            } else {
              setFieldValue("items", JSON.parse(values?.items));
              enqueueSnackbar(response.data.message, {
                variant: "error",
              });
            }
          })
          .catch((error) => {
            setFieldValue("items", JSON.parse(values?.items));
            const { response } = error;
            if (response.status === 422) {
              console.log("response", response.data.error);
              // eslint-disable-next-line no-unused-vars
              for (const [key] of Object.entries(values)) {
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
      } else {
        if (isLastStep) {
          values["items"] = JSON.stringify(values?.items);
          await axiosInstance
            .request({
              url: url,
              method: method,
              data: values,
            })
            .then((response) => {
              if (response?.status === 200) {
                setFieldValue("items", JSON.parse(values?.items));
                router.push("/dashboard/customer/job_posted");
                enqueueSnackbar(response.data.message, {
                  variant: "success",
                });
              } else {
                setFieldValue("items", JSON.parse(values?.items));
                enqueueSnackbar(response.data.message, {
                  variant: "error",
                });
              }
            })
            .catch((error) => {
              setFieldValue("items", JSON.parse(values?.items));
              const { response } = error;
              if (response.status === 422) {
                console.log("response", response.data.error);
                // eslint-disable-next-line no-unused-vars
                for (const [key] of Object.entries(values)) {
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
        } else {
          setValue(value + 1);
        }
      }
    },
  });

  React.useEffect(() => {
    formik.setFieldValue("user_id", user?.id);
  }, [user, user?.id]);
  const addProduct = () => {
    formik.setFieldValue("items", [...(formik.values.items || []), product]);
  };

  const addAddress = ({ productItem, productIndex }) => {
    formik.setFieldValue(`items[${productIndex}].address`, [
      ...(productItem.address || []),
      address,
    ]);
  };
  const removeProduct = (index) => {
    if (formik?.values?.items) {
      const data = formik.values.items.splice(index, 1);
      formik.setFieldValue("items", reject(formik.values.items, data));
    }
  };

  const removeAddress = (productIndex, addressIndex) => {
    if (formik?.values?.items) {
      const data = formik.values.items[productIndex]?.address.splice(
        addressIndex,
        1
      );
      formik.setFieldValue(
        `items[${productIndex}].address`,
        reject(formik.values.items[productIndex]?.address, data)
      );
    }
  };

  const bindData = async () => {
    await axiosInstance
      .get(`/api/auth/master/jobs/edit/${id}`)
      .then((response) => {
        if (response.status === 200) {
          if (response?.data?.view_data) {
            let newData = response?.data?.view_data;
            for (const [key] of Object.entries(formik.values)) {
              formik.setFieldValue([key], newData[key]);
            }
          }
        }
      });
  };

  React.useEffect(() => {
    if (id && id !== "create") {
      bindData();
    }
  }, [id]);

  console.log("formik", formik);

  return (
    <AuthGuard>
      <JobPostForm
        addProduct={addProduct}
        removeProduct={removeProduct}
        addAddress={addAddress}
        removeAddress={removeAddress}
        formik={formik}
      />
    </AuthGuard>
  );
};

PostJob.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default PostJob;
