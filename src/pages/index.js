import React, { Fragment } from "react";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import DoubleColumn from "../components/Home/DoubleColumn";
import VisaImage from "../components/Home/VisaImage";
import GetLatest from "../components/GetLatest";
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
      <PopularCitizenship />
      <DoubleColumn
        heading=""
        secondColumn={<VisaImage image="work-visa.jpeg" />}
      />
      <GetLatest />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
