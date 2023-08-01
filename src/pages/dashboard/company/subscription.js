import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import SubscriptionsPage from "@/sections/dashboard/companyDashboard/subscription";

const SubscriptionPage = () => {
  const formik = useFormik({});
  return <SubscriptionsPage formik={formik} />;
};

SubscriptionPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default SubscriptionPage;
