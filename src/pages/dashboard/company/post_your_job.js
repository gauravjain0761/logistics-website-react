import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPostForm from "@/sections/dashboard/companyDashboard/jobPostForm";

const PostJobCompany = () => {
  const formik = useFormik({});
  return <JobPostForm formik={formik} />;
};

PostJobCompany.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default PostJobCompany;
