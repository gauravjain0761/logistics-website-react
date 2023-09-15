import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import TrackJob from "@/sections/dashboard/companyDashboard/trackJob";
import AuthGuard from "@/auth/AuthGuard";

const StartJobPage = () => {
  const formik = useFormik({
    initialValues: {
     
    },
  });
  return (
    <AuthGuard>
      <TrackJob formik={formik} />
    </AuthGuard>
  );
};

StartJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default StartJobPage;