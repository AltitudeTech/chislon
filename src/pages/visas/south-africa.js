import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="South Africa"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="South Africa Heading" />
      <DoubleColumn heading="South Africa Heading" />
      <DoubleColumn heading="South Africa Heading" />
    </Fragment>
  );
};
