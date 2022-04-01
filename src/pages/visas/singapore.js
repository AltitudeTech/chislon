import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Singapore" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Singapore Heading" />
      <DoubleColumn heading="Singapore Heading" />
      <DoubleColumn heading="Singapore Heading" />
    </Fragment>
  );
};
