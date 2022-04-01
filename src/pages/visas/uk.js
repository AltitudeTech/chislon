import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="United Kingdom"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="UK Heading" />
      <DoubleColumn heading="UK Heading" />
      <DoubleColumn heading="UK Heading" />
    </Fragment>
  );
};
