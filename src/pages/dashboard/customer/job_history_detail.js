import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import ViewJobHistory from "@/sections/dashboard/customerDashboard/viewJobHistory";

const ViewJobPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <ViewJobHistory formik={formik} />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
