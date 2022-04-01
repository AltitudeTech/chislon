import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Canada" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Canada Heading" />
      <DoubleColumn heading="Canada Heading" />
      <DoubleColumn heading="Canada Heading" />
    </Fragment>
  );
};
