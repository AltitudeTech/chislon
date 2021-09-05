import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CITIZENSHIP BY INVESTMENT" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="Citizenship By Residency Heading" />
      <DoubleColumn heading="Citizenship By Residency Heading" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
