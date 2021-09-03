import React, { Fragment } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import moment from "moment";
import { withTheme } from "styled-components";

export default function FaqGrid() {
  return (
    <SectionStyle>
      <Container className="my-5">
        <Row>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
            return (
              <Col md={4}>
                <FaqBox key={i} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </SectionStyle>
  );
}

const FaqBox = withTheme((props) => {
  return (
    <Fragment>
      <div className="faqBox">
        <div className="captionImage"></div>
        <div className="title p-3">
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
        </div>
        <div className="content px-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            ducimus cum adipisci fuga dignissimos doloribus quia laudantium et
            porro distinctio quos repellat eius maxime sapiente voluptate id,
            eum modi explicabo.
          </p>
        </div>
        <div className="option p-3">
          <span className="date">{moment().format("Do MMMM YYYY")}</span>
          <Link href="">
            <a className="readMore">READ MORE</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .faqBox {
            width: 100%;
            position: relative;
            margin: 20px auto;
            background-color: #e5e5e5;
          }
          .faqBox .captionImage {
            height: 200px;
            width: 100%;
            background-image: url(/static/images/flags/joinchision.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-bottom: 10px solid ${props.theme.colors.main};
          }
          .faqBox .title h6 {
            color: #003e52;
            text-transform: uppercase;
            padding-bottom: 10px;
            border-bottom: 5px solid ${props.theme.colors.main};
          }
          .faqBox .option {
            background-color: #c4c4c4;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
          }
          .faqBox .option .readMore,
          .faqBox .option .readMore:hover {
            text-decoration: none;
            padding: 5px 10px;
            background-color: #ffda42;
            border-radius: 5px;
            font-weight: bold;
          }
        `}
      </style>
    </Fragment>
  );
});
