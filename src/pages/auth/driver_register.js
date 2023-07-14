import { WebLayout } from "@/layout";
import SecondaryWebLayout from "@/layout/secondaryweb";
import DriverRegister from "@/sections/auth/driver_register";
import { useFormik } from "formik";
import React from "react";

const DriverPage = () => {
  const formik = useFormik({
    initialValues: {
      type: "driver",
    },
  });
  return <DriverRegister formik={formik} />;
};

DriverPage.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default DriverPage;
