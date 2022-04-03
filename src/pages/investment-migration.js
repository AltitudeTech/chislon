import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="INVESTEMENT MIGRATION"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="Investment Migration Heading" />
      <DoubleColumn heading="Investment Migration Heading" />
      <DoubleColumn heading="Investment Migration Heading" />
    </Fragment>
  );
};
