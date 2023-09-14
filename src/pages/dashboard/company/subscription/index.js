import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import SubscriptionsPage from "@/sections/dashboard/companyDashboard/subscription";
import AuthGuard from "@/auth/AuthGuard";

const SubscriptionPage = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <SubscriptionsPage formik={formik} />
    </AuthGuard>
  );
};

SubscriptionPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default SubscriptionPage;
