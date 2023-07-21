import React from "react";
import { PrimaryWebLayout, SecondaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import FaqsPage from '@/sections/faqs';

const Faqs = () => {
  const formik = useFormik({});
  return <FaqsPage formik={formik} />;
};

Faqs.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default Faqs;
