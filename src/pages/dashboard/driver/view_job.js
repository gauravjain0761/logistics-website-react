import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ViewJobDetail from "@/sections/dashboard/driverDashboard/viewJob";

const ViewJobPage = () => {
  const formik = useFormik({
   
  });
  return <ViewJobDetail formik={formik} />;
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;