import React from 'react';
import { WebLayout } from "@/layout";
import { useFormik } from "formik";
import ClickNewSend from '@/sections/clicksendnew';



const ClickSendNew = () => {
  const formik = useFormik({});
  return <ClickNewSend formik={formik} />;
};

ClickSendNew.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default ClickSendNew;