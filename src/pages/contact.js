import React from 'react';
import { PrimaryWebLayout, SecondaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ContactSection from '@/sections/contact';
const ContactUs = () => {
  const formik = useFormik({});
  return <ContactSection formik={formik} />;
};

ContactUs.getLayout = function getLayout(page) {
  return <SecondaryWebLayout>{page}</SecondaryWebLayout>;
};
export default ContactUs;

