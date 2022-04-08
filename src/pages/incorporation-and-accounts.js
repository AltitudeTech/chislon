import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

export default () => {
  return (
    <Fragment>
      {/* <CountryJumbo
        title="INCORPORATION & ACCOUNT"
        hasExtension
        country="citizenship.jpeg"
      /> */}
      <TopBanner
        subtitle="INCORPORATION & ACCOUNT"
        title="Incorporation & Account"
        image="incorporation.jpeg"
      />
      <DoubleColumn heading="Incorporation & Account Heading" />
      <DoubleColumn heading="Incorporation & Account Heading" />
      <DoubleColumn heading="Incorporation & Account Heading" />
      <ContactBox />
    </Fragment>
  );
};
