import React from "react";
import Banner from "./Banner";
import Fleet from "./Fleet";
import Helpful from "./Helpful";
import ListTransport from "./ListTransport";
import Location from "./Location";
import Mobile from "./Mobile";
import MobileTwo from "./MobileTwo";
import Shipment from "./Shipment";
import Testimonials from "./Testimonials";
import TotalCard from "./TotalCard";

const HomeSection = () => {
  return (
    <>
      <Banner />
      <Fleet/>
      <Mobile/>
      <Location/>
      <TotalCard/>
      <Shipment/>
      <ListTransport/>
      <MobileTwo/>
      <Testimonials/>
      <Helpful/>
    </>
  );
};

export default HomeSection;
