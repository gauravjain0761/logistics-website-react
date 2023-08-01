import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import TrackJob from "@/sections/dashboard/customerDashboard/trackJob";

const StartJobPage = () => {
  const formik = useFormik({
    initialValues: {
      location: "",
    },
  });
  return <TrackJob formik={formik} />;
};

StartJobPage.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default StartJobPage;
