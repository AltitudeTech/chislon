import React from "react";
import { Row, Col, Container } from "reactstrap";

const TestimonialRow = () => {
  return (
    <>
      <TestimonyContainer />
      <TestimonyContainerFluid />
      <TestimonyContainer />
      <TestimonyContainerFluid />
      <TestimonyContainer />
      <TestimonyContainerFluid />
    </>
  );
};

export default TestimonialRow;

const TestimonyContainer = () => (
  <Container className="my-5">
    <Row>
      <Col md={6}>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Testimony />
        </div>
      </Col>
      <Col md={6}>
        <img src="/static/images/client.jpg" className="img-fluid" />
      </Col>
    </Row>
  </Container>
);

const TestimonyContainerFluid = () => (
  <Container fluid className="my-5" style={{ overflow: "hidden" }}>
    <Row>
      <Col
        md={6}
        style={{
          backgroundImage: "url(/static/images/client.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        {/* <img src="/static/images/client.jpg" className="img-fluid" /> */}
      </Col>
      <Col md={{ size: 5 }}>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Testimony />
        </div>
      </Col>
    </Row>
  </Container>
);

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
    <blockquote style={{ textIndent: "40px" }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas deserunt
      cum odio tempora tempore! Magnam minima quos obcaecati, possimus illo
      atque impedit cupiditate dicta repudiandae laborum deleniti vitae suscipit
      amet?"
    </blockquote>
  </div>
);
