import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import TestimonialPage from "@/sections/testimonial/testimonialpage";
const Testimonial = () => {
  const formik = useFormik({});
  return <TestimonialPage formik={formik} />;
};

Testimonial.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default Testimonial;