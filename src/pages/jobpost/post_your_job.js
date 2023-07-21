import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPost from "@/sections/jobposter";

const PostJob = () => {
  const formik = useFormik({});
  return <JobPost formik={formik} />;
};

PostJob.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default PostJob;
