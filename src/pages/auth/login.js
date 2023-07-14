import { WebLayout } from "@/layout";
import SecondaryWebLayout from "@/layout/secondaryweb";
import Login from "@/sections/auth/login";
import { useFormik } from "formik";
import React from "react";

const LoginPage = () => {
  const formik = useFormik({});
  return <Login formik={formik} />;
};

LoginPage.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default LoginPage;
