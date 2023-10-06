import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import TrackJob from "@/sections/dashboard/companyDashboard/trackJob";

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
