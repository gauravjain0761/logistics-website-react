import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import JobDeleteDetail from "@/sections/dashboard/customerDashboard/job_delete/delete_detail";

const ViewJobPage = () => {
  return (
    <AuthGuard>
      <JobDeleteDetail />
    </AuthGuard>
  );
};

ViewJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ViewJobPage;
