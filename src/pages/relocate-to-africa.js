import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="WELCOME TO AFRICA" hasExtension country="relocate.jpeg" />
      <DoubleColumn heading="RESIDENCY BY INVESTMENT" />
      <DoubleColumn heading="CITIZENSHIP BY INVESTMENT" />
      <DoubleColumn heading="EXPATRIATES" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
