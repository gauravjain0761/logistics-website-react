import { PrimaryWebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import { ApiPost } from "@/utils/apiHelper";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

const LoginPage = () => {

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email Required";
      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
      }
      return errors;
    },
    onSubmit: (values) => {
      // call api
      const data = {
        email: values.email,
        password: values.password,
      };
      ApiPost("auth/login", data).then((res) => {
        if (res?.code === 200) {
          toast.success("Login Successfull");
          localStorage.setItem("token", res?.data?.access_token);
          // save user data
          localStorage.setItem("userData", JSON.stringify(res?.data?.user));

          router.push("/dashboard/customer_dashboard")
        }
      }).catch((err) => {
        if(err?.code === 401){
          toast.error("Invalid Credentials");
        }
      });
    }
  });

   


  return <Login formik={formik} />;
};

LoginPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default LoginPage;
