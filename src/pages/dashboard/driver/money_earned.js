import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import DashboardJobPost from "@/sections/dashboard/driverDashboard/activejobs";

const MoneySpendList = () => {
  const formik = useFormik({});
  return <DashboardJobPost formik={formik} />;
};

MoneySpendList.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default MoneySpendList;
