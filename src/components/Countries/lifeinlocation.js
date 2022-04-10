import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Heading3Style from "../styles/Heading3";
import "./lifeinlocation.scss";

export default function LifeInLocation() {
  return (
    <Container>
      {Destinations.map(({ image, path, label }, index) => {
        return index % 2 == 0 ? (
          <Row className="my-5" key={index}>
            <Col md={6} className="my-5">
              <div>
                <Heading3Style>{label}</Heading3Style>
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
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
              </div>
            </Col>
            <Col md={6} className="my-5">
              <div className="option_wrapper">
                <img src={`/static/images/flags/homeflags/${image}`} alt="" />
                <Link href={path}>
                  <a className="top_text">
                    <p>LIFE IN {label}</p>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="my-5" key={index}>
            <Col md={6} className="my-5">
              <div className="option_wrapper">
                <img src={`/static/images/flags/homeflags/${image}`} alt="" />
                <Link href={path}>
                  <a className="top_text">
                    <p>LIFE IN {label}</p>
                  </a>
                </Link>
              </div>
            </Col>
            <Col md={6} className="my-5">
              <div>
                <Heading3Style>{label}</Heading3Style>
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
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quasi deserunt cum odio tempora tempore! Magnam minima quos
                  obcaecati, possimus illo atque impedit cupiditate dicta
                  repudiandae laborum deleniti vitae suscipit amet?
                </p>
              </div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

const Destinations = [
  { label: "United States of America", href: "", image: "usa.jpeg", path: "" },
  { label: "United Kingdom", href: "", image: "uk.jpeg", path: "" },
  { label: "Canada", href: "", image: "canada.jpeg", path: "" },
  { label: "Australia", href: "", image: "australia.jpeg", path: "" },
  { label: "Newzealand", href: "", image: "newzealand.jpeg", path: "" },
];
