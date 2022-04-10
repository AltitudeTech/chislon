import React from "react";
import { Row, Col } from "reactstrap";
import Heading3Style from "../styles/Heading3";
import Container from "reactstrap/lib/Container";
import ButtonStyle from "../styles/ButtonStyle";

const DoubleColumn = ({
  heading = "STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD",
  firstColumn,
  secondColumn,
  noContactButton,
  buttonLabel = "ENQUIRY",
}) => {
  return (
    <Container>
      <Row style={{ padding: "2rem 0" }}>
        <Col md={{ size: 6 }}>
          {firstColumn ? (
            firstColumn
          ) : (
            <div>
              <Heading3Style>{heading}</Heading3Style>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              {!noContactButton ? (
                <ButtonStyle
                  className="transparent"
                  onClick={() => router.push("/contact")}
                >
                  {buttonLabel}
                </ButtonStyle>
              ) : (
                ""
              )}
            </div>
          )}
        </Col>
        <Col md={{ size: 6 }}>
          {secondColumn ? (
            secondColumn
          ) : (
            <div>
              <Heading3Style>{heading}</Heading3Style>
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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet?
              </p>
              {!noContactButton ? (
                <ButtonStyle
                  className="transparent"
                  onClick={() => router.push("/contact")}
                >
                  {buttonLabel}
                </ButtonStyle>
              ) : (
                ""
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DoubleColumn;
