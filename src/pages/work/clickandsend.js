import React from 'react';
import { WebLayout } from "@/layout";
import { useFormik } from "formik";
import ClickSend from '@/sections/work';



const ClickAndSend = () => {
  const formik = useFormik({});
  return <ClickSend formik={formik} />;
};

ClickAndSend.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default ClickAndSend;