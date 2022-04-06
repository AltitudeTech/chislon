import React from "react";
import { Col, Container, Row } from "reactstrap";
import DoubleColumn from "./DoubleColumn";

export default function TopBanner({ title = "International Real Estate" }) {
  return (
    <Container
      fluid
      className="mb-5"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <Row>
        <Col md={{ size: 8, offset: 1 }}>
          <Row>
            <Col>
              <h2>{title}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ size: 3 }}
          style={{
            backgroundImage: "url(/static/images/sideimage.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            minHeight: "400px",
          }}
        ></Col>
      </Row>
    </Container>
  );
}
