import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="HIGH NETWORTH INVESTMENT"
        country="highnetworth.png"
      />
      <DoubleColumn heading="High Networth Heading" />
      <DoubleColumn heading="High Networth Heading" />
      <ContactHere />
    </Fragment>
  );
};
