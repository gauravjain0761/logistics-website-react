import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobRequest from "@/sections/dashboard/driverDashboard/jobRequest";


const JobRequestPage = () => {
  const formik = useFormik({
  
   
  });

  console.log("formikformik", formik);
  return <DashboardJobRequest formik={formik} />;
};

JobRequestPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobRequestPage;
