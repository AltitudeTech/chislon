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
            <HeadingStyle style={{ margin: "2rem 0" }}>
              NEW HEADING HERE
            </HeadingStyle>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/residency-by-investment" className="top_text">
                <p>RESIDENCY BY INVESTMENT</p>
              </a>
              <div className="label">
                <p>RESIDENCY BY INVESTMENT</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/citizenship-by-investment" className="top_text">
                <p>CITIZENSHIP BY INVESTMENT</p>
              </a>
              <div className="label">
                <p>CITIZENSHIP BY INVESTMENT</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/high-networth-investors" className="top_text">
                <p>HIGH NETWORTH INVESTORS</p>
              </a>
              <div className="label">
                <p>HIGH NETWORTH INVESTORS</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/work-abroad" className="top_text">
                <p>WORK ABROAD</p>
              </a>
              <div className="label">
                <p>WORK ABROAD</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/study-abroad" className="top_text">
                <p>STUDY ABROAD</p>
              </a>
              <div className="label">
                <p>STUDY ABROAD</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/temp_bg.jpg" alt="" />
              <a href="/healthcare-abroad" className="top_text">
                <p>HEALTHCARE ABROAD</p>
              </a>
              <div className="label">
                <p>HEALTHCARE ABROAD</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionStyle>
  );
};

export default ServiceOptions;
