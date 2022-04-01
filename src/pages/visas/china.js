import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="China" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="China Heading" />
      <DoubleColumn heading="China Heading" />
      <DoubleColumn heading="China Heading" />
    </Fragment>
  );
};
