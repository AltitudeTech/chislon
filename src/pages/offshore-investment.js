import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="OFFSHORE INVESTMENT"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="Offshore Investment Heading" />
      <DoubleColumn heading="Offshore Investment Heading" />
      <DoubleColumn heading="Offshore Investment Heading" />
    </Fragment>
  );
};
