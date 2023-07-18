import { PrimaryWebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import { useFormik } from "formik";
import React from "react";

const LoginPage = () => {
  const formik = useFormik({});
  return <Login formik={formik} />;
};

LoginPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default LoginPage;
