import React from 'react';
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import CustomerDashboard from '@/sections/customerdashboard';
import SecondaryWebLayout from '@/layout/primaryWeb';



const DashboardPage = () => {
  const formik = useFormik({});
  return <CustomerDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DashboardPage;