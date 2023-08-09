import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ViewJobHistory from "@/sections/dashboard/driverDashboard/viewJobHistory";

const ViewJobPage = () => {
  const formik = useFormik({
   
  });
  return <ViewJobHistory formik={formik} />;
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;