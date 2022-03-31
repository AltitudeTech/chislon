import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="LEADERSHIP TEAM"
        hasExtension
        country="leadership.jpeg"
      />
      <DoubleColumn heading="Leadership Team Heading" />
      <DoubleColumn heading="Leadership Team Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
