import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CategoryRow from "../components/Home/CategoryRow";
import ServiceOptions from "../components/Home/ServiceOptions";
import DoubleColumn from "../components/Home/DoubleColumn";
import ImageBox from "../components/Home/ImageBox";
import ClientSection from "../components/Home/ClientSection";
import FAQBox from "../components/Home/FAQBox";
import VisaImage from "../components/Home/VisaImage";
import { CountryJumbo, PopularDestination } from "../components/Countries";
import PopularCitizenship from "../components/Home/PopularCitizenship";
import HomeImage from "../components/Home/HomeImage";

const Index = () => {
  return (
    <Fragment>
      {/* <Carousel /> */}
      {/* <CountryJumbo
        title="BECOME A GLOBAL CITIZEN"
        hasExtension
        country="home.jpeg"
      /> */}
      <HomeImage />
      <ImageBox />
      <DoubleColumn firstColumn={<VisaImage image="visaImage.jpeg" />} />
      <DoubleColumn secondColumn={<VisaImage image="visaImage2.jpeg" />} />
      <WhyChooseUs />
      {/* <FAQBox /> */}
      {/* <ClientSection /> */}
      {/* <ServiceOptions /> */}
      <PopularCitizenship />
      {/* <CategoryRow /> */}
      {/* <PopularDestination /> */}
    </Fragment>
  );
};
export default Index;
