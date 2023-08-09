import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import DriverDashboard from "@/sections/dashboard/driverDashboard";
import AuthGuard from "@/auth/AuthGuard";

const DashboardPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <DriverDashboard formik={formik} />
    </AuthGuard>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
