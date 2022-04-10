import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

export default () => {
  return (
    <Fragment>
      <TopBanner image="real-estate.jpeg" />
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      <ContactBox />
    </Fragment>
  );
};
