import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="INTERNATIONAL REAL ESTATE"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      <DoubleColumn heading="International Real Estate Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
