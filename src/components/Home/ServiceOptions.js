import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import HeadingStyle from "../styles/Heading3";
import "./ServiceOptions.scss";

const ServiceOptions = () => {
  return (
    <SectionStyle className="fluid" style={{ backgroundColor: "#F2F2F2" }}>
      <Container>
        <Row>
          <Col md={12}>
            <h5
              className="underlineBorder"
              style={{
                margin: "2rem 0",
                fontSize: "2.5rem",
              }}
            >
              COURSES
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="option_wrapper">
              <img
                src="/static/images/flags/homeflags/citizenship.jpeg"
                alt=""
              />
              <a href="/citizenship-by-investment" className="top_text">
                <p>PRE UNIVERSITY</p>
              </a>
              <div className="label">
                <p>PRE UNIVERSITY</p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <DummyParagraph />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="option_wrapper">
              {/* <img src="/static/images/highnetworth.jpeg" alt="" /> */}
              <img
                src="/static/images/flags/homeflags/highnetworth.jpg"
                alt=""
              />
              <a href="/high-networth-investors" className="top_text">
                <p>BACHELOR DEGREE</p>
              </a>
              <div className="label">
                <p>BACHELOR DEGREE</p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <DummyParagraph />
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/flags/homeflags/workabroad.jpg" alt="" />
              <a href="/work-abroad" className="top_text">
                <p>MASTERS DEGREE</p>
              </a>
              <div className="label">
                <p>MASTERS DEGREE</p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <DummyParagraph />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="option_wrapper">
              <img
                src="/static/images/flags/homeflags/studyabroad.jpg"
                alt=""
              />
              <a
                href="https://institute.chislonbroadway.com/"
                className="top_text"
              >
                <p>DOCTORAL</p>
              </a>
              <div className="label">
                <p>DOCTORAL</p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div>
              <DummyParagraph />
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

export default ServiceOptions;

const DummyParagraph = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis placeat
        aspernatur perspiciatis eos velit nihil, quos harum facere illum fugiat
        ducimus rem sequi iusto error? Error nobis reiciendis veniam. Eligendi!
      </p>
    </>
  );
};
