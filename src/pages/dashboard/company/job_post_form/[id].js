import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPostForm from "@/sections/dashboard/companyDashboard/jobPostForm";

import { reject } from "lodash";
import axiosInstance from "@/utils/axios";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import AuthGuard from "@/auth/AuthGuard";
import { useAuthContext } from "@/auth/useAuthContext";

const PostJob = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      user_id: user?.id,
      created_by: "customer",
      name: "",
      vehicle: 0,
      vehical_type: 0,
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
      // let url, method;
      // if (id === "create") {
      //   url = "/api/auth/jobs/add";
      //   method = "POST";
      // } else {
      //   url = `/api/auth/jobs/update/${id}`;
      //   method = "POST";
      // }
      // if (id !== "create") {
      //   values["items"] = JSON.stringify(values?.items);
      //   await axiosInstance
      //     .request({
      //       url: url,
      //       method: method,
      //       data: values,
      //     })
      //     .then((response) => {
      //       if (response?.status === 200) {
      //         setFieldValue("items", JSON.parse(values?.items));
      //         router.push("/dashboard/customer/job_posted");
      //         enqueueSnackbar(response.data.message, {
      //           variant: "success",
      //         });
      //         // formik.resetForm();
      //       } else {
      //         setFieldValue("items", JSON.parse(values?.items));
      //         enqueueSnackbar(response.data.message, {
      //           variant: "error",
      //         });
      //       }
      //     })
      //     .catch((error) => {
      //       setFieldValue("items", JSON.parse(values?.items));
      //       const { response } = error;
      //       if (response.status === 422) {
      //         console.log("response", response.data.error);
      //         // eslint-disable-next-line no-unused-vars
      //         for (const [key] of Object.entries(values)) {
      //           if (response.data.error[key]) {
      //             setErrors({ [key]: response.data.error[key][0] });
      //           }
      //         }
      //       }
      //       if (response?.data?.status === 406) {
      //         enqueueSnackbar(response.data.message, {
      //           variant: "error",
      //         });
      //       }
      //     });
      // } else {
      //   if (isLastStep) {
      //     values["items"] = JSON.stringify(values?.items);
      //     await axiosInstance
      //       .request({
      //         url: url,
      //         method: method,
      //         data: values,
      //       })
      //       .then((response) => {
      //         if (response?.status === 200) {
      //           setFieldValue("items", JSON.parse(values?.items));
      //           router.push("/dashboard/customer/job_posted");
      //           enqueueSnackbar(response.data.message, {
      //             variant: "success",
      //           });
      //           // formik.resetForm();
      //         } else {
      //           setFieldValue("items", JSON.parse(values?.items));
      //           enqueueSnackbar(response.data.message, {
      //             variant: "error",
      //           });
      //         }
      //       })
      //       .catch((error) => {
      //         setFieldValue("items", JSON.parse(values?.items));
      //         const { response } = error;
      //         if (response.status === 422) {
      //           console.log("response", response.data.error);
      //           // eslint-disable-next-line no-unused-vars
      //           for (const [key] of Object.entries(values)) {
      //             if (response.data.error[key]) {
      //               setErrors({ [key]: response.data.error[key][0] });
      //             }
      //           }
      //         }
      //         if (response?.data?.status === 406) {
      //           enqueueSnackbar(response.data.message, {
      //             variant: "error",
      //           });
      //         }
      //       });
      //   } else {
      //     setValue(value + 1);
      //   }
      // }
    },
  });

  React.useEffect(() => {
    formik.setFieldValue("user_id", user?.id);
  }, [user, user?.id]);

  const bindData = async () => {
    await axiosInstance
      .get(`/api/auth/master/jobs/edit/${id}`)
      .then((response) => {
        if (response.status === 200) {
          if (response?.data?.view_data) {
            let newData = response?.data?.view_data;
            for (const [key] of Object.entries(formik.values)) {
              // if (key === "items") {
              //   formik.setFieldValue("items", newData?.items);
              // } else {
              formik.setFieldValue([key], newData[key]);
              // }
            }
          }
        }
      });
  };

  React.useEffect(() => {
    if (id && id !== "create") {
      // bindData();
    }
  }, [id]);

  return (
    <AuthGuard>
      <JobPostForm formik={formik} />
    </AuthGuard>
  );
};

PostJob.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default PostJob;
