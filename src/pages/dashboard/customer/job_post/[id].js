import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPostForm from "@/sections/dashboard/customerDashboard/jobPostForm";

import { reject } from "lodash";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import AuthGuard from "@/auth/AuthGuard";

const PostJob = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { id } = router.query;
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
    address: [],
  };
  const address = {
    address: "",
    lat: 3434.34,
    long: 23423,
    type: "drop or pickup",
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      vehicle: 0,
      items: [],
      description: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.vehicle) {
        errors.vehicle = "Vehicle is required";
      }

      if (!values.description) {
        errors.description = "Description is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      values["items"] = JSON.stringify(values?.items);
      // let formData = new FormData();

      // formData.append("job_title", values?.job_title);
      // formData.append("image", values?.image);
      // formData.append("size", values?.size);
      // formData.append("quantity", values?.quantity);
      console.log("valuesvalues", values);

      await axiosInstance
        .post("/api/auth/master/jobs/add", values)
        .then((response) => {
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });
            formik.resetForm();
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
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
    },
  });
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
              if (key === "items") {
                formik.setFieldValue(
                  "items",
                  newData?.jobitems || newData?.items
                );
              } else {
                formik.setFieldValue([key], newData[key]);
              }
            }
          }
        }
      });
  };

  React.useEffect(() => {
    if (id !== "create") {
      bindData();
    }
  }, [id]);

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
