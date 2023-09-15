import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import TermAndConditionSection from "@/sections/term_and_condition";

const TermConditionPage = () => {
  const formik = useFormik({});
  return <TermAndConditionSection formik={formik} />;
};

TermConditionPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default TermConditionPage;
