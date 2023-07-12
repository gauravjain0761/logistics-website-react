import React from 'react';
import { WebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import { useFormik } from "formik";
import Job_post from '@/sections/jobposter';



const PostJob = () => {
  const formik = useFormik({});
  return <Job_post formik={formik} />;
};

PostJob.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default PostJob;