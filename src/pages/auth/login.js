import { WebLayout } from "@/layout";
import SecondaryWebLayout from "@/layout/secondaryWeb";
import Login from "@/sections/auth/login";
import { useFormik } from "formik";
import React from "react";

const LoginPage = () => {
  const formik = useFormik({});
  return <Login formik={formik} />;
};

LoginPage.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default LoginPage;
