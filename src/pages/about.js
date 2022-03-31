import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="ABOUT" hasExtension country="client.jpg" />
      <DoubleColumn heading="Vision & Mission" />
      <DoubleColumn heading="Leadership Team" />
      <DoubleColumn heading="Voluntary Code of Conduct" />
      <DoubleColumn heading="Clients" />
      <DoubleColumn heading="Career" />
      <DoubleColumn heading="How We Work" />
    </Fragment>
  );
};
