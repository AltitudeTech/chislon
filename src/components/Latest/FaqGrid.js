import React, { Fragment } from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import moment from "moment";

export default function FaqGrid() {
  return (
    <SectionStyle>
      <Container className="my-5">
        <Row>
          {/* <Col md={4}>
            <SearchForm />
          </Col> */}
          <Col md={12}>
            <div className="newsWrapper">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
                return <News key={i} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .newsWrapper {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </SectionStyle>
  );
}

const News = () => {
  return (
    <Fragment>
      <div className="news">
        <div className="title p-3">
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
        </div>
        <div className="content p-3">
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
          .news {
            max-width: 300px;
            width: 100%;
            position: relative;
            margin: 20px auto;
          }
          .news .title {
            background-color: #e5e5e5;
          }
          .news .title h6 {
            color: #003e52;
            text-transform: uppercase;
          }
          .news .content {
            background-color: #c4c4c4;
          }
          .news .option {
            background-color: #c4c4c4;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            font-size: 10px;
          }
          .news .option .readMore,
          .news .option .readMore:hover {
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
};
