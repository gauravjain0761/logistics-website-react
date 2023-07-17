import React from 'react';
import { WebLayout } from "@/layout";
import Register from "@/sections/auth/register";
import { useFormik } from "formik";
import CustomerDashboard from '@/sections/customerdashboard';
import SecondaryWebLayout from '@/layout/secondaryWeb';



const DashboardPage = () => {
  const formik = useFormik({});
  return <CustomerDashboard formik={formik} />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <WebLayout>{page}</WebLayout>;
};
export default DashboardPage;