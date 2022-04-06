import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <ContactBox subtitle="ABOUT" title="About Us" image="client.jpg" />
      {/* <CountryJumbo title="ABOUT" hasExtension country="client.jpg" /> */}
      <DoubleColumn heading="Vision & Mission" />
      <DoubleColumn heading="Leadership Team" />
      <DoubleColumn heading="Voluntary Code of Conduct" />
      <DoubleColumn heading="Clients" />
      <DoubleColumn heading="Career" />
      <DoubleColumn heading="How We Work" />
      <ContactBox />
    </Fragment>
  );
};
