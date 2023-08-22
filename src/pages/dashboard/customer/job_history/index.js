import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import JobHistory from "@/sections/dashboard/customerDashboard/jobhistory";

const JobHistoryPage = () => {
  const formik = useFormik({
    initialValues: {
      month: 0,
    },
  });

  console.log("formikformik", formik);
  return (
    <AuthGuard>
      <JobHistory formik={formik} />
    </AuthGuard>
  );
};

JobHistoryPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobHistoryPage;
