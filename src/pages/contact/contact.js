import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ContactSection from "@/sections/contact";
const ContactUs = () => {
  const formik = useFormik({});
  return <ContactSection formik={formik} />;
};

ContactUs.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ContactUs;
