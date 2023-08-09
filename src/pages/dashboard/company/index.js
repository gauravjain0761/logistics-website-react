import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import CompanyDashboard from "@/sections/dashboard/companyDashboard";
import AuthGuard from "@/auth/AuthGuard";
const DashboardPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <CompanyDashboard formik={formik} />
    </AuthGuard>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
