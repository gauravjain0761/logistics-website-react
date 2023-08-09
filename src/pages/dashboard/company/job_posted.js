import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
// import DashboardJobPost from "@/sections/dashboard/customerDashboard/jobPost";
import AuthGuard from "@/auth/AuthGuard";
import DashboardJobPost from "@/sections/dashboard/companyDashboard/jobPost";

const DashboardPageNext = () => {
  const formik = useFormik({
    initialValues: {
      month: 0,
    },
  });
  return (
    <AuthGuard>
      <DashboardJobPost formik={formik} />
    </AuthGuard>
  );
};

DashboardPageNext.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPageNext;
