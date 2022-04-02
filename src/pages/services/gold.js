import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Platinum" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Platinum Service Heading" />
      <DoubleColumn heading="Platinum Service Heading" />
      <DoubleColumn heading="Platinum Service Heading" />
    </Fragment>
  );
};
