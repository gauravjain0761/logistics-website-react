import React from 'react';
import { useFormik } from "formik";
import CustomerDashboard from '@/sections/customerdashboard';
import { SecondaryWebLayout } from '@/layout';



const DashboardPage = () => {
  const formik = useFormik({});
  return <CustomerDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default DashboardPage;