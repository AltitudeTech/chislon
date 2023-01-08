import React, { Fragment } from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="EMPLOYER"
        title="Non-Sponsored Employer"
        image="services.jpeg"
      />
      <DoubleColumn heading="Non-Sponsored Employer Heading" noContactButton />
      <DoubleColumn heading="Non-Sponsored Employer Heading" noContactButton />
      <DoubleColumn heading="Non-Sponsored Employer Heading" noContactButton />
      <ContactBox />
    </Fragment>
  );
};
