import { WebLayout } from "@/layout";
import SecondaryWebLayout from "@/layout/secondaryweb";
import Register from "@/sections/auth/register";
import { useFormik } from "formik";
import React from "react";



const RegisterPage = () => {
  const formik = useFormik({});
  return <Register formik={formik} />;
};

RegisterPage.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default RegisterPage;
