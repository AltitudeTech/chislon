import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="HEALTHCARE ABROAD" country="healthcare.png" />
      <DoubleColumn heading="Healthcare Abroad Heading" />
      <DoubleColumn heading="Healthcare Abroad Heading" />
      <ContactHere />
    </Fragment>
  );
};
