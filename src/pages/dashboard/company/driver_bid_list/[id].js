import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import BidList from "@/sections/dashboard/companyDashboard/driverBidList";

const JobListing = () => {
  const formik = useFormik({});
  return (
    <AuthGuard>
      <BidList formik={formik} />
    </AuthGuard>
  );
};

JobListing.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default JobListing;
