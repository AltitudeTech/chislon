import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CITIZENSHIP BY INVESTMENT" />
      <Container>
        <Row>
          <Col md={12}>
            <h5>What is Citizenship By Investment</h5>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};