import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="INCORPORATION & ACCOUNT"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="Incorporation & Account Heading" />
      <DoubleColumn heading="Incorporation & Account Heading" />
      <DoubleColumn heading="Incorporation & Account Heading" />
    </Fragment>
  );
};
