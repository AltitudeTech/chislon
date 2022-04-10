import React from "react";
import { Row, Col } from "reactstrap";
import Heading3Style from "../styles/Heading3";
import Container from "reactstrap/lib/Container";

const TwoColumn = ({
  headinga = "STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD",
  headingb = "STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD",
  firstColumn,
  secondColumn,
}) => {
  return (
    <Container>
      <Row style={{ padding: "2rem 0" }}>
        <Col md={{ size: 6 }}>
          {firstColumn ? (
            firstColumn
          ) : (
            <div>
              <div className="pb-5">
                <img src="/static/images/client.jpg" className="img-fluid" />
              </div>
              <Heading3Style>{headinga}</Heading3Style>
              <div style={{ maxWidth: "300px" }}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
              </div>
            </div>
          )}
        </Col>
        <Col md={{ size: 6 }}>
          {secondColumn ? (
            secondColumn
          ) : (
            <div>
              <div className="pb-5">
                <img src="/static/images/client.jpg" className="img-fluid" />
              </div>
              <Heading3Style>{headingb}</Heading3Style>
              <div style={{ maxWidth: "300px" }}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TwoColumn;
