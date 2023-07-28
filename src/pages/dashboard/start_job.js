import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import StartJob from "@/sections/startjob";

const StartJobPage = () => {
  const formik = useFormik({});
  return <StartJob formik={formik} />;
};

StartJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default StartJobPage;
