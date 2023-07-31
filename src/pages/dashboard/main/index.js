import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import MainDashboard from "@/sections/dashboard/driver/mainDashboard";

const DashboardPage = () => {
  const formik = useFormik({});
  return <MainDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
