import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from "@/sections/dashboard/driverDashboard/activejobs";
import AuthGuard from "@/auth/AuthGuard";

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
