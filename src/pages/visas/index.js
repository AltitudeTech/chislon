import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="VISAS" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Visas Heading" />
      <DoubleColumn heading="Visas Heading" />
      <DoubleColumn heading="Visas Heading" />
    </Fragment>
  );
};
