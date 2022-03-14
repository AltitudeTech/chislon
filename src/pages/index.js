import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CategoryRow from "../components/Home/CategoryRow";
import ServiceOptions from "../components/Home/ServiceOptions";
import DoubleColumn from "../components/Home/DoubleColumn";
import { PopularDestination } from "../components/Countries";
import ClientSection from "../components/Home/ClientSection";
import FAQBox from "../components/Home/FAQBox";
import VisaImage from "../components/Home/VisaImage";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <DoubleColumn firstColumn={<VisaImage image="visaImage.jpeg" />} />
      <DoubleColumn secondColumn={<VisaImage image="visaImage2.jpeg" />} />
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
