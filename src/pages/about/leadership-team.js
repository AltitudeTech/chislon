import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="LEADERSHIP TEAM" country="leadership-team.png" />
      <DoubleColumn heading="Leadership Team Heading" />
      <DoubleColumn heading="Leadership Team Heading" />
      <ContactHere />
    </Fragment>
  );
};
