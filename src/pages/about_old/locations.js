import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="LOCATIONS" country="leadership-team.png" />
      <DoubleColumn heading="Locations Heading" />
      <DoubleColumn heading="Locations Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
