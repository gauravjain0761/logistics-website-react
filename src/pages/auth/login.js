import { PrimaryWebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useSnackbar } from "notistack";

const LoginPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      // call api
      const data = {
        email: values.email,
        password: values.password,
      };
      await axiosInstance
        .post("api/auth/login", data)
        .then((response) => {
          console.log("response", response);
          if (response?.status === 200) {
            enqueueSnackbar(response.data.message, {
              variant: "success",
            });

            formik.resetForm();
            router.push("/dashboard/customer_dashboard");
            localStorage.setItem("token", response.data.access_token);
          } else {
            enqueueSnackbar(response.data.message, {
              variant: "error",
            });
          }
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
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

  return <Login formik={formik} />;
};

LoginPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default LoginPage;
