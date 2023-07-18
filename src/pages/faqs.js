import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import FaqsPage from '@/sections/faqs';

const Faqs = () => {
  const formik = useFormik({});
  return <FaqsPage formik={formik} />;
};

Faqs.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default Faqs;
