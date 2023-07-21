import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ClickSend from "@/sections/work";

const ClickAndSend = () => {
  const formik = useFormik({});
  return <ClickSend formik={formik} />;
};

ClickAndSend.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ClickAndSend;
