import React, { Fragment } from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="INTERNATIONAL"
        title="International Partners"
        image="partners.jpeg"
      />
      <DoubleColumn heading="International Partner Heading" />
      <DoubleColumn heading="International Partner Heading" />
      <ContactBox />
    </Fragment>
  );
};
