import React from 'react';
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ClickNewSend from '@/sections/clicksendnew';



const ClickSendNew = () => {
  const formik = useFormik({});
  return <ClickNewSend formik={formik} />;
};

ClickSendNew.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ClickSendNew;