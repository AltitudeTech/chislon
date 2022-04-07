import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      {/* <CountryJumbo
        title="OFFSHORE INVESTMENT"
        hasExtension
        country="citizenship.jpeg"
      /> */}
      <TopBanner subtitle="OFFSHORE INVESTMENT" title="Offshore Investment" />
      <DoubleColumn heading="Offshore Investment Heading" />
      <DoubleColumn heading="Offshore Investment Heading" />
      <DoubleColumn heading="Offshore Investment Heading" />
      <ContactBox />
    </Fragment>
  );
};
