import React from 'react';
import { PrimaryWebLayout, SecondaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from '@/sections/customerdashboardnext';



const DashboardPageNext = () => {
  const formik = useFormik({});
  return <DashboardJobPost formik={formik} />;
};

DashboardPageNext.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default DashboardPageNext;