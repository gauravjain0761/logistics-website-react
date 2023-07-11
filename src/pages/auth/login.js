import { WebLayout } from "@/layout";
import Login from "@/sections/auth/login";
import { useFormik } from "formik";
import React from "react";

const Page = () => {
  const formik = useFormik({});
  return <Login formik={formik} />;
};

Page.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default Page;
