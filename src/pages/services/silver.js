import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Silver" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Silver Service Heading" />
      <DoubleColumn heading="Silver Service Heading" />
      <DoubleColumn heading="Silver Service Heading" />
    </Fragment>
  );
};
