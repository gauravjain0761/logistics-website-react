import React from 'react';
import { WebLayout } from "@/layout";
import { useFormik } from "formik";
import JobPost from '@/sections/jobposter';
import SecondaryWebLayout from '@/layout/secondaryweb';



const PostJob = () => {
  const formik = useFormik({});
  return <JobPost formik={formik} />;
};

PostJob.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default PostJob;