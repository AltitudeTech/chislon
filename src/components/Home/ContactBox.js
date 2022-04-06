import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "reactstrap";
import ButtonStyle from "../styles/ButtonStyle";

export default function ContactBox({
  title = "Contact Us",
  buttonLabel = "ENQUIRY",
}) {
  const router = useRouter();
  return (
    <Container
      fluid
      className="my-5"
      style={{ width: "100%", overflow: "hidden" }}
    >
      <Row>
        <Col md={{ size: 6, offset: 1 }}>
          <Row>
            <Col>
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
          </Row>
          <Row>
            <Col>
              <ButtonStyle
                className="transparent"
                onClick={() => router.push("/contact")}
              >
                {buttonLabel}
              </ButtonStyle>
            </Col>
          </Row>
        </Col>
        <Col
          md={{ size: 5 }}
          style={{
            backgroundImage: "url(/static/images/2.png)",
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
