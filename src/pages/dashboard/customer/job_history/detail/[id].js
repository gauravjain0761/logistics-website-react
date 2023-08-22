import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import ViewJobHistory from "@/sections/dashboard/customerDashboard/viewJobHistory";

const ViewJobPage = () => {
  return (
    <AuthGuard>
      <ViewJobHistory />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
