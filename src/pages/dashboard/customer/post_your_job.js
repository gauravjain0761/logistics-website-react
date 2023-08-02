import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPostForm from "@/sections/dashboard/customerDashboard/jobPostForm";

import { reject } from "lodash";

const PostJob = () => {
  const defaultPickupAddressValues = {
    address: "",
    date: "",
    time: "",
    quantity: "",
    image: "",
  };

  const defaultDeliveryAddressValues = {
    address: "",
    date: "",
    time: "",
  };

  const formik = useFormik({
    initialValues: {
      pick_up_address: [],
      delivery_address: [],
    },
    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "title is required";
      }
      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
      // await apiAdminConfig
      //   .post("/api/auth/master/page/update/faq", values)
      //   .then((response) => {
      //     if (response?.status === 200) {
      //       snackbar({
      //         message: response.data.message,
      //         severity: "success",
      //       });
      //       formik.resetForm();
      //       bindData();
      //     } else {
      //       snackbar({
      //         message: response.data.message,
      //         severity: "error",
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     const { response } = error;
      //     if (response.status === 422) {
      //       console.log("response", response.data.error);
      //       // eslint-disable-next-line no-unused-vars
      //       for (const [key, value] of Object.entries(values)) {
      //         if (response.data.error[key]) {
      //           setErrors({ [key]: response.data.error[key][0] });
      //         }
      //       }
      //     }
      //     if (response?.data?.status === 406) {
      //       snackbar({
      //         message: response.data.message,
      //         severity: "success",
      //       });
      //     }
      //   });
    },
  });

  const addPickupAddress = () => {
    formik.setFieldValue("pick_up_address", [
      ...(formik.values.pick_up_address || []),
      defaultPickupAddressValues,
    ]);
  };

  const removePickupAddress = (index) => {
    if (formik?.values?.pick_up_address) {
      const data = formik.values.pick_up_address.splice(index, 1);
      formik.setFieldValue(
        "pick_up_address",
        reject(formik.values.pick_up_address, data)
      );
    }
  };
  const addDeliveryAddress = () => {
    formik.setFieldValue("delivery_address", [
      ...(formik.values.delivery_address || []),
      defaultDeliveryAddressValues,
    ]);
  };

  const removeDeliveryAddress = (index) => {
    if (formik?.values?.delivery_address) {
      const data = formik.values.delivery_address.splice(index, 1);
      formik.setFieldValue(
        "delivery_address",
        reject(formik.values.delivery_address, data)
      );
    }
  };

  return (
    <JobPostForm
      addPickupAddress={addPickupAddress}
      removePickupAddress={removePickupAddress}
      addDeliveryAddress={addDeliveryAddress}
      removeDeliveryAddress={removeDeliveryAddress}
      formik={formik}
    />
  );
};

PostJob.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default PostJob;
