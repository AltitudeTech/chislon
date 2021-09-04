import React from "react";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import { withTheme } from "styled-components";

const WhyChooseUs = (props) => {
  return (
    <SectionStyle className="sectionStyle">
      <Row>
        <Col sm="12" md={{ size: 5, offset: 1 }}>
          <div style={{ maxWidth: "500px" }}>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "400",
                color: props.theme.colors.main,
              }}
            >
              Why Choose Chislon Broadway
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quasi deserunt cum odio tempora
              tempore! Magnam minima quos obcaecati, possimus illo atque impedit
              cupiditate dicta repudiandae laborum deleniti vitae suscipit amet?
            </p>
            <ChislonStats />
          </div>
        </Col>
        <Col sm="12" md={{ size: 6 }}>
          <div>
            <img
              className="img-fluid mt-5"
              loading="lazy"
              style={{ maxWidth: "80%" }}
              src="/static/images/Home/work-visa.jpeg"
              alt="choose us now"
            />
          </div>
        </Col>
      </Row>
      <style>
        {`
        .sectionStyle{
          background-image: url(/static/images/home/world.png) ;
          background-color: #e5e5e5 ;
          background-size : contain ;
        }
        .flexPanel{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-content: stretch;
          align-items: flex-start;
        }
        .flexItem{
          position : relative ;
          order: 0;
          flex: 0 1 150px;
          align-self: auto;
          margin :  0 10px 10px ;
        }
        .flexItem p{
          position : absolute ;
          text-align : center ;
          top: 50% ;
          left: 50% ;
          color : #fff;
          font-weight : bold ;
          transform: translateX(-50%) translateY(-50%) ;
        }
        .leftBottom{
          height : 150px ;
          width : 200px ;
          margin : auto ;
          min-width : 70% ;
          border: none ;
          border-left : 4px solid #00B8F2 ;
          border-bottom : 4px solid #00B8F2 ;
        }
      `}
      </style>
    </SectionStyle>
  );
};

export default withTheme(WhyChooseUs);

const ChislonStats = withTheme((props) => {
  return (
    <>
      <div className="statsWrapper">
        <div className="box">
          <div className="content">
            <p>30 +</p>
            <p>Office Worldwide</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>25 +</p>
            <p>Years leading the industry</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>30 +</p>
            <p>Investment migration options</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>20, 000 +</p>
            <p>Clients advised</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>15 +</p>
            <p>Government advisory mandates</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <p>USD 10 billion +</p>
            <p>FDI raised</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .statsWrapper {
          display: grid;
          grid-template-columns: auto auto;
        }
        @media screen and (max-width: 500px) {
          .statsWrapper {
            display: grid;
            grid-template-columns: auto;
          }
        }
        .statsWrapper .box {
          padding: 20px 5px;
          display: flex;
          align-items: flex-end;
          color: ${props.theme.colors.main};
        }
        .statsWrapper .box p:first-child {
          font-size: 30px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
});

const Visas = [
  { text: "Medical Visa", image: "medical-visa.png" },
  { text: "Investor Visa", image: "investor-visa.png" },
  { text: "Residency Visa", image: "residency-visa.png" },
  { text: "Student Visa", image: "student-visa.png" },
  { text: "Tourist Visa", image: "tourist-visa.png" },
  { text: "Work Visa", image: "work-visa.png" },
];
