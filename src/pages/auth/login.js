import { PrimaryWebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import axiosInstance from "@/utils/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { useSnackbar } from "notistack";
import { setSession } from "@/utils/localStorageAvailable";
import { useAuthContext } from "@/auth/useAuthContext";
import GuestGuard from "@/auth/GuestGuard";

const LoginPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useAuthContext();

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
      login(data);
      // await axiosInstance
      //   .post("api/auth/login", data)
      //   .then((response) => {
      //     console.log(response.data.user.user_type, "logintype");
      //     if (response?.status === 200) {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "success",
      //       });

      //       // formik.resetForm();
      //       console.log("response.data", response.data);

      //       if (response.data.user.user_type === "customer") {
      //         router.push("/dashboard/customer");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       } else if (response.data.user.user_type === "driver") {
      //         router.push("/dashboard/driver/active_jobs");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       } else if (response.data.user.user_type === "company") {
      //         router.push("/dashboard/company");
      //         setSession(response.data.access_token);

      //         // localStorage.setItem("token", response.data.access_token);
      //       }
      //     } else {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "error",
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     const { response } = error;
      //     if (response.status === 422) {
      //       // eslint-disable-next-line no-unused-vars
      //       for (const [key, value] of Object.entries(values)) {
      //         if (response.data.error[key]) {
      //           setErrors({ [key]: response.data.error[key][0] });
      //         }
      //       }
      //     }
      //     if (response?.data?.status === 406) {
      //       enqueueSnackbar(response.data.message, {
      //         variant: "error",
      //       });
      //     }
      //   });
    },
  });

  return (
    <GuestGuard>
      <Login formik={formik} />
    </GuestGuard>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default LoginPage;
