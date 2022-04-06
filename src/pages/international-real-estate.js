import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

export default () => {
  return (
    <Fragment>
      <TopBanner />
      {/* <CountryJumbo
        title="INTERNATIONAL REAL ESTATE"
        hasExtension
        country="citizenship.jpeg"
      /> */}
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      <ContactBox />
    </Fragment>
  );
};
