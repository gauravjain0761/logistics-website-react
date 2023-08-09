import React from "react";
import { useFormik } from "formik";
import { PrimaryWebLayout } from "@/layout";
import CustomerDashboard from "@/sections/dashboard/customerDashboard";
import AuthGuard from "@/auth/AuthGuard";

const DashboardPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <CustomerDashboard formik={formik} />
    </AuthGuard>
  );
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;
