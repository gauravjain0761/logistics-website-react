import React from "react";
import Banner from "../home/Banner";
import Fleet from "../home/Fleet";
import LocationPresence from "./locationpresence";
import TotalSet from "./totalset";
import Shipment from "../home/Shipment";
import MobileTwo from "../home/MobileTwo";
import Helpful from "../home/Helpful";
import MobileWork from "./mobilework";
import TestimonialSlider from "./testimonialwork";

const ClickSend = () => {
  return (
    <React.Fragment>
      <Banner />
      <Fleet />
      <MobileWork />
      <LocationPresence />
      <TotalSet />
      <Shipment />
      <MobileTwo />
      <TestimonialSlider />
      <Helpful />
    </React.Fragment>
  );
};

export default ClickSend;
