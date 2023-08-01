import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import CompanyDashboard from "@/sections/dashboard/companyDashboard";
const DashboardPage = () => {
  const formik = useFormik({});
  return <CompanyDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
