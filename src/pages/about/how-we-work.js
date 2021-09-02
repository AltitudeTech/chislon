import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="HOW WE WORK" country="joinchision.png" />
      <DoubleColumn heading="How We Work Heading" />
      <DoubleColumn heading="How We Work Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
