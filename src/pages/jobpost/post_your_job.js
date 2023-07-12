import React from 'react';
import { WebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPost from '@/sections/jobposter';



const PostJob = () => {
  const formik = useFormik({});
  return <JobPost formik={formik} />;
};

PostJob.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default PostJob;