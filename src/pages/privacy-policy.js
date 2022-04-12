import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Jumbotron from "../components/Jumbotron";
import SectionStyle from "../components/styles/SectionStyle";
import ContentPages from "../components/Footer/ContentPages";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

export default function Disclaimer() {
  return (
    <Fragment>
      <TopBanner title="Privacy Policy" subtitle="PRIVACY" image="services.jpeg" />
      <Container>
        <SectionStyle>
          <Row>
            <Col md={12}>
              <ContentPages />
            </Col>
          </Row>
        </SectionStyle>
      </Container>
      <ContactBox />
    </Fragment>
  );
}
