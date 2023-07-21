import React from "react";
import { PrimaryWebLayout, SecondaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import BlogDetail from "@/sections/blog/blogdetail";
const BlogDetailPage = () => {
  const formik = useFormik({});
  return <BlogDetail formik={formik} />;
};

BlogDetailPage.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default BlogDetailPage;
