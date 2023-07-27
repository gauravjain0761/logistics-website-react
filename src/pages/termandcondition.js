import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import TermCondition from "@/sections/termandcondition";

const TermConditionPage = () => {
  const formik = useFormik({});
  return <TermCondition formik={formik} />;
};

TermConditionPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default TermConditionPage;