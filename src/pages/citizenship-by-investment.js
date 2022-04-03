import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="CITIZENSHIP BY INVESTMENT"
        hasExtension
        country="citizenship.jpeg"
      />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
