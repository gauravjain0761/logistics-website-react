import React from 'react';
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import Blogs from '@/sections/blog';
const BlogPage = () => {
  const formik = useFormik({});
  return <Blogs formik={formik} />;
};

BlogPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default BlogPage;