import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import AuthGuard from "@/auth/AuthGuard";
import DriverJobListSection from "@/sections/dashboard/companyDashboard/driver/list";

const DriverJobList = () => {
  const formik = useFormik({
    initialValues: {
      month: 0,
    },
  });
  return (
    <AuthGuard>
      <DriverJobListSection formik={formik} />
    </AuthGuard>
  );
};

DriverJobList.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default DriverJobList;
