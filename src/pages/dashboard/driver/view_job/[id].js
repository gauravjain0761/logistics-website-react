import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ViewJobDetail from "@/sections/dashboard/driverDashboard/viewJob";
import AuthGuard from "@/auth/AuthGuard";

const ViewJobPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <ViewJobDetail formik={formik} />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
