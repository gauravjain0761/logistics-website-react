import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobList from "@/sections/dashboard/driverDashboard/joblisting";
import AuthGuard from "@/auth/AuthGuard";

const JobListing = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <JobList formik={formik} />
    </AuthGuard>
  );
};

JobListing.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobListing;
