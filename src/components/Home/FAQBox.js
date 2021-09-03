import React from "react";
import Link from "next/link";
import { Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import { withTheme } from "styled-components";

const FAQBox = (props) => {
  return (
    <SectionStyle className="faqBoxStyle p-0">
      <Row className="mt-0" noGutters>
        <Col sm="12" md={{ size: 8 }}>
          <div className="faqBox">
            {/* <img
              className="bgImage"
              src="/static/images/flags/joinchision.png"
            /> */}
            <div className="content">
              <h1
                style={{
                  fontWeight: "400",
                  color: props.theme.colors.main,
                }}
              >
                Investor <br /> Immigration
              </h1>
              <Link href="/faqs">
                <a className="browseFAQ">Browse FREQUENTLY ASKED QUESTION</a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <style>
        {`
        .faqBoxStyle{

        //   background-color: #b2b2b2 ;
        }
        .faqBox{
            overflow:hidden;
            max-width: 800px; 
            background-color: #AFA280;
            // background-image: url(/static/images/flags/joinchision.png) ;
            // background-repeat: no-repeat;
            // background-size : cover ;
            position: relative;
            padding: 6rem 20px ;
        }
        .faqBox::after{
            content : "";
            position: absolute ;
            width: 100% ;
            height: 100%;
            background-color: rgba(175, 162, 128, 0.8) ;
            top : 0 ;
            right: 0;
            left : 0 ;
            bottom: 0;
            z-index: 0 ;
        }
        .faqBox .bgImage{
            position: absolute;
            top : 0 ;
            left: 0 ;
            bottom: 0;
            width : 100% ;
            transform: scale(1.3);
            transition: all 0.2s linear;
        }
        .faqBox:hover .bgImage{
            transform: scale(1.4);
        }
        .faqBox .content{
            z-index: 2;
            position: relative;
            padding-left: 100px;
        }
        .browseFAQ{
            background-color: #1D061E ;
            color: #fff !important;
            padding: 7px 25px ;
            font-size: 20px;
            margin-top: 15px ;
            display: inline-block;
            font-weight: 700px ;
            text-decoration: none;
        }
        .browseFAQ:hover{
            text-decoration: none ;
        }
      `}
      </style>
    </SectionStyle>
  );
};

export default withTheme(FAQBox);
