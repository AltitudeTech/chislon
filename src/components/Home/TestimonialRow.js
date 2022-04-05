import React from "react";
import { Row, Col } from "reactstrap";
import Container from "reactstrap/lib/Container";

const TestimonialRow = () => {
  return (
    <Container fluid className="my-5">
      <Row noGutters>
        <Col md={6}>
          <Testimony />
        </Col>
        <Col md={6}>
          <img />
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialRow;

const Testimony = () => (
  <div>
    <p style={{ fontSize: "20px" }}>Mr. O.T., Nigeria</p>
    <p>Businessman and citizen of Antigua</p>
    <div
      style={{
        width: "150px",
        borderTop: "1px solid #FFDA42",
        marginBottom: "10px",
      }}
    ></div>
    <blockquote>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas deserunt
      cum odio tempora tempore! Magnam minima quos obcaecati, possimus illo
      atque impedit cupiditate dicta repudiandae laborum deleniti vitae suscipit
      amet?"
    </blockquote>
  </div>
);
