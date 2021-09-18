import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import "./Statistics.scss";

const Stastics = () => {
  return (
    <SectionStyle className="fluid statistics">
      <Container>
        <Row>
          <Col md={3}>
            <div
              className="p-6 text-center text-white statBox"
              style={{ backgroundColor: "#43AB46" }}
            >
              <h1>9 +</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="p-6 text-center text-white statBox"
              style={{ backgroundColor: "#2AA9E0" }}
            >
              <h1>100 +</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="p-6 text-center text-white statBox"
              style={{ backgroundColor: "#43AB46" }}
            >
              <h1>5 +</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div
              className="p-6 text-center text-white statBox"
              style={{ backgroundColor: "#2AA9E0" }}
            >
              <h1>25 +</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .underlineBorder {
            position: relative;
            padding-bottom: 5px;
          }

          .underlineBorder::before {
            content: "";
            position: absolute;
            width: 100px;
            height: 5px;
            background-color: #ffda42;
            bottom: 0;
            left: 0;
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default Stastics;
