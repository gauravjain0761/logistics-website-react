import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobRequest from "@/sections/dashboard/driverDashboard/jobRequest";
import AuthGuard from "@/auth/AuthGuard";
import { Box } from "@mui/material";
import DashboardCard from "@/module/dashboard/driverCard/dashboardCard";

const JobRequestPage = () => {
  const formik = useFormik({});

  console.log("formikformik", formik);
  return (
    <AuthGuard>
      <DashboardJobRequest formik={formik} />
    </AuthGuard>
  );
};

JobRequestPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobRequestPage;
