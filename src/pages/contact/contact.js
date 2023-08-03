import React from "react";
import { PrimaryWebLayout } from "@/layout";
import { useFormik } from "formik";
import ContactSection from "@/sections/contact";
import axiosInstance from "@/utils/axios";
const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      mobile: "",
      email: "",
      address: "",
      recover_email: "",
    },
    validate: (values) => {
      const errors = {};

      return errors;
    },
    onSubmit: async (values, { setErrors }) => {
     
      console.log("formData", formData);
      await axiosInstance
        .post("/api/auth/master/contact/add", values)
        .then((response) => {
          if (response?.status === 200) {
          }
        })
        .catch((error) => {
          const { response } = error;
          if (response.status === 422) {
            console.log("response", response.data.error);
            // eslint-disable-next-line no-unused-vars
            for (const [key, value] of Object.entries(values)) {
              if (response.data.error[key]) {
                setErrors({ [key]: response.data.error[key][0] });
              }
            }
          }
          if (response?.data?.status === 406) {
           
          }
        });
    },
  });
  return <ContactSection formik={formik} />;
};

ContactUs.getLayout = function getLayout(page) {
  return <PrimaryWebLayout>{page}</PrimaryWebLayout>;
};
export default ContactUs;
