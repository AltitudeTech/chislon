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
            {/* <HeadingStyle className="underlineBorder"
              style={{
                margin: "2rem 0",
                // textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              SERVICES
            </HeadingStyle> */}
            <h5 className="underlineBorder"
              style={{
                margin: "2rem 0",
                // textAlign: "center",
                fontSize: "2.5rem",
              }}
            >
              SERVICES
            </h5>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/flags/homeflags/residency.jpg" alt="" />
              <a href="/residency-by-investment" className="top_text">
                <p>RESIDENCY BY INVESTMENT</p>
              </a>
              {/* <div className="label">
                <p>RESIDENCY BY INVESTMENT</p>
              </div> */}
            </div>
          </Col>
          <Col md={4}>
            <div className="option_wrapper">
              <img src="/static/images/flags/homeflags/citizenship.jpeg" alt="" />
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
              <img src="/static/images/highnetworth.jpeg" alt="" />
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
              <img src="/static/images/flags/homeflags/workabroad.jpg" alt="" />
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
              <img src="/static/images/flags/homeflags/studyabroad.jpg" alt="" />
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
              <img src="/static/images/flags/homeflags/healthcare.jpeg" alt="" />
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
      <style jsx>{`
      .underlineBorder{
        position: relative;
        padding-bottom: 5px;
      }

      .underlineBorder::before{
        content: "" ;
        position: absolute ;
        width: 100px ;
        height :  5px ;
        background-color: #01172A ;
        bottom : 0 ;
        left : 0 ;
      }
      `}
      </style>
    </SectionStyle>
  );
};

export default ServiceOptions;
