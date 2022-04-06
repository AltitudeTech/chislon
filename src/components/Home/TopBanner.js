import React from "react";
import { Col, Container, Row } from "reactstrap";
import ButtonStyle from "../styles/ButtonStyle";

export default function TopBanner({
  image = "sideimage.jpg",
  subtitle = "",
  title = "International Real Estate",
  buttonLabel = "REAL ESTATE ENQUIRY",
}) {
  return (
    <Container
      fluid
      className="my-5"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <Row>
        <Col md={{ size: 7, offset: 1 }}>
          <Row>
            <Col>
              <p style={{ fontSize: "12px", textTransform: "uppercase" }}>
                {subtitle}
              </p>
              <p style={{ fontSize: "40px" }}>{title}</p>
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
          <Row>
            <Col>
              <ButtonStyle className="transparent">{buttonLabel}</ButtonStyle>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ size: 4 }}
          style={{
            backgroundImage: `url(/static/images/${image})`,
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
