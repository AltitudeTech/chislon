import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CategoryRow from "../components/Home/CategoryRow";
import ServiceOptions from "../components/Home/ServiceOptions";
import DoubleColumn from "../components/Home/DoubleColumn";
import { PopularDestination } from "../components/Countries";
import ClientSection from "../components/Home/ClientSection";
import FAQBox from "../components/Home/FAQBox";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <DoubleColumn />
      <WhyChooseUs />
      <FAQBox />
      <ClientSection />
      <ServiceOptions />
      {/* <CategoryRow /> */}
      {/* <PopularDestination /> */}
    </Fragment>
  );
};
export default Index;
