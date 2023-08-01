import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from "@/sections/dashboard/jobPost";

const DashboardPageNext = () => {
  const formik = useFormik({
    initialValues: {
      month: 0,
    },
   
  });
  return <DashboardJobPost formik={formik} />;
};

DashboardPageNext.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPageNext;
