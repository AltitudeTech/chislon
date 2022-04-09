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
import ContactBox from "../components/Home/ContactBox";

const Index = () => {
  return (
    <Fragment>
      <HomeImage />
      <DoubleColumn firstColumn={<VisaImage image="passport.jpeg" />} />
      <DoubleColumn secondColumn={<VisaImage image="visaImage.jpeg" />} />
      <WhyChooseUs />
      {/* <FAQBox /> */}
      {/* <ClientSection /> */}
      {/* <ServiceOptions /> */}
      <PopularCitizenship />
      {/* <CategoryRow /> */}
      {/* <PopularDestination /> */}
      {/* <ImageBox /> */}
      <DoubleColumn heading="" secondColumn={<VisaImage image="work-visa.jpeg" />} />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
