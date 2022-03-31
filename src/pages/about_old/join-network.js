import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="JOIN CHISLON" country="joinchision.png" />
      <DoubleColumn heading="Join Us Heading" />
      <DoubleColumn heading="Join Us Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
