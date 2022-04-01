import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="New Zealand"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="New Zealand Heading" />
      <DoubleColumn heading="New Zealand Heading" />
      <DoubleColumn heading="New Zealand Heading" />
    </Fragment>
  );
};
