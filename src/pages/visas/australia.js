import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Australia" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Australia Heading" />
      <DoubleColumn heading="Australia Heading" />
      <DoubleColumn heading="Australia Heading" />
    </Fragment>
  );
};
