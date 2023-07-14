import React from 'react';
import { WebLayout } from "@/layout";
import { useFormik } from "formik";
import ClickSend from '@/sections/work';
import SecondaryWebLayout from '@/layout/secondaryweb';



const ClickAndSend = () => {
  const formik = useFormik({});
  return <ClickSend formik={formik} />;
};

ClickAndSend.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default ClickAndSend;