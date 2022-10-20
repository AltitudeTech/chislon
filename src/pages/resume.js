import React, { Fragment } from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="RESUME" title="RESUME" image="services.jpeg" />
      <DoubleColumn heading="Resume Heading" noContactButton />
      <DoubleColumn heading="Resume Heading" noContactButton />
      <DoubleColumn heading="Resume Heading" noContactButton />
      <ContactBox />
    </Fragment>
  );
};
