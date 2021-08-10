import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="VOLUNTARY CODE OF CONDUCT"
        country="voluntary-code-of-conduct.png"
      />
      <DoubleColumn heading="Voluntary Code Of Conduct Heading" />
      <DoubleColumn heading="Voluntary Code Of Conduct Heading" />
      <ContactHere />
    </Fragment>
  );
};
