import React from "react";
import { Container, Row, Col } from "reactstrap";
import { CountryJumbo } from "../components/Countries";
import Jumbotron from "../components/Jumbotron";
import SectionStyle from "../components/styles/SectionStyle";
import Faq from "../components/Faq";
import FaqGrid from "../components/Latest/FaqGrid";
import ContactBox from "../components/Home/ContactBox";
import TopBanner from "../components/Home/TopBanner";

const Index = () => {
  return (
    <div>
      <TopBanner
        subtitle="FAQ"
        title="Frequently Asked Questions"
        image="faq.jpeg"
      />
      <Container>
        <SectionStyle>
          <Row>
            <Col md={12}>
              <Faq />
              {/* <FaqGrid /> */}
            </Col>
          </Row>
        </SectionStyle>
      </Container>
      <ContactBox />
    </div>
  );
};
export default Index;
