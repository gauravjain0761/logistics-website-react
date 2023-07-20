import React from 'react';
import { PrimaryWebLayout, SecondaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import CustomerDashboard from '@/sections/customerdashboard';
import JobList from '@/sections/joblisting';



const JobListing = () => {
  const formik = useFormik({});
  return <JobList formik={formik} />;
};

JobListing.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default JobListing;
