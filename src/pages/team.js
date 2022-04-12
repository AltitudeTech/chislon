import React, { Fragment } from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="TEAM" title="Our Team" image="keystaff.jpeg" />
      <DoubleColumn heading="Our Teams Heading" />
      <DoubleColumn heading="Our Teams Heading" />
      <DoubleColumn heading="Our Teams Heading" />
      <DoubleColumn heading="Our Teams Heading" />
      <ContactBox />
    </Fragment>
  );
};
