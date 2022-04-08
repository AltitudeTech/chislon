import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="CITIZENSHIP"
        title="Citizenship by Investment"
        image="citizenship2.jpeg"
      />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      <ContactBox />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
