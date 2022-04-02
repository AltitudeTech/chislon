import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="Jorunal of Migration" hasExtension country="healthcare.jpeg" />
      <DoubleColumn heading="Journal of Migration Heading" />
      <DoubleColumn heading="Journal of Migration Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
