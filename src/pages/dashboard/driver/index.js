import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import DriverDashboard from "@/sections/dashboard/driverDashboard";

const DashboardPage = () => {
  const formik = useFormik({});
  return <DriverDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
