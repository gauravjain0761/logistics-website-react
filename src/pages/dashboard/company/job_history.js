import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobHistory from "@/sections/dashboard/companyDashboard/jobhistory";

const JobHistoryPage = () => {
  const formik = useFormik({
    initialValues: {
      month: 0,
    },
  });

  return <JobHistory formik={formik} />;
};

JobHistoryPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobHistoryPage;
