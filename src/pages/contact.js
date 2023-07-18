import { BannerSection } from "@/components/banner";
import ContactSection from "@/sections/contact";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <BannerSection src="/assets/images/contact/contact-us-banner.jpg" alt="" title="Contact Us" />
      <ContactSection />
    </React.Fragment>
  );
};

export default Contact;
