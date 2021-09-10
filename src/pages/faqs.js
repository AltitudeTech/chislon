import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CountryJumbo } from "../components/Countries";
import Jumbotron from "../components/Jumbotron";
import SectionStyle from "../components/styles/SectionStyle";
import Faq from "../components/Faq";
import FaqGrid from "../components/Latest/FaqGrid";

const Index = () => {
  return (
    <div>
      {/* <Jumbotron title="FAQs" /> */}
      <CountryJumbo title="FAQs" hasExtension country="faq.jpeg" />
      <Container>
        <SectionStyle>
          <Row>
            <Col md={12}>
              {/* <Faq /> */}
              <FaqGrid />
            </Col>
          </Row>
        </SectionStyle>
      </Container>
    </div>
  );
};
export default Index;
