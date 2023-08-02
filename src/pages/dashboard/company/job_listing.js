import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobList from "@/sections/dashboard/companyDashboard/joblisting";
// import JobList from "@/sections/dashboard/joblisting";

const JobListing = () => {
  const formik = useFormik({});
  return <JobList formik={formik} />;
};

JobListing.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobListing;