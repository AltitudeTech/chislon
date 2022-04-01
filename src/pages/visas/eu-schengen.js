import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="EU Schengen"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="EU Schengen Heading" />
      <DoubleColumn heading="EU Schengen Heading" />
      <DoubleColumn heading="EU Schengen Heading" />
    </Fragment>
  );
};
