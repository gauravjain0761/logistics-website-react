import React from "react";
import NewBanner from "./newbanner";
import OurFleet from "./ourfleet";
import TotalDrivers from "./totaldrivers";
import ForCard from "./forcard";
import HelpfulHome from "./helpfulhome";
import NewTestimonial from "./newtestimonials";

const PrimaryHomePage = () => {
  return (
    <React.Fragment>
      <NewBanner />
      <OurFleet />
      <TotalDrivers />
      <ForCard />
      <HelpfulHome />
      <NewTestimonial />
    </React.Fragment>
  );
};

export default PrimaryHomePage;
