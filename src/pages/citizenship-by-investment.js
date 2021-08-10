import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="CITIZENSHIP BY INVESTMENT"
        country="investment.png"
      />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      <DoubleColumn heading="Citizenship By Investment Heading" />
      <ContactHere />
    </Fragment>
  );
};
