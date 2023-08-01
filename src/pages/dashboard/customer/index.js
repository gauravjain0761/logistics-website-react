import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import CustomerDashboard from "@/sections/dashboard/customerDashboard";

const DashboardPage = () => {
  const formik = useFormik({});
  return <CustomerDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
