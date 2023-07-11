import { WebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import { useFormik } from "formik";
import React from "react";



const Page = () => {
  const formik = useFormik({});
  return <Register formik={formik} />;
};

Page.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default Page;
