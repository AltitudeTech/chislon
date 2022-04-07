import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";
import TopBanner from "../../components/Home/TopBanner";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      {/* <CountryJumbo title="VISAS" hasExtension country="citizenship.jpeg" /> */}
      <TopBanner subtitle="VISAS" title="Visas" />
      <DoubleColumn heading="Visas Heading" />
      <DoubleColumn heading="Visas Heading" />
      <DoubleColumn heading="Visas Heading" />
      <ContactBox />
    </Fragment>
  );
};
