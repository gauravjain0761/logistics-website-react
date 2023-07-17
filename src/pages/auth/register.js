import { PrimaryWebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import { useFormik } from "formik";
import React from "react";



const RegisterPage = () => {
  const formik = useFormik({});
  return <Register formik={formik} />;
};

RegisterPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default RegisterPage;
