import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="RELOCATE TO AFRICA"
        title="Welcome To Africa"
        image="africa2.jpeg"
      />
      <DoubleColumn heading="RESIDENCY BY INVESTMENT" />
      <DoubleColumn heading="CITIZENSHIP BY INVESTMENT" />
      <DoubleColumn heading="EXPATRIATES" />
      <ContactBox />
    </Fragment>
  );
};
