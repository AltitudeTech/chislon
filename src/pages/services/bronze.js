import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Bronze" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Bronze Service Heading" />
      <DoubleColumn heading="Bronze Service Heading" />
      <DoubleColumn heading="Bronze Service Heading" />
    </Fragment>
  );
};
