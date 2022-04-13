import { useRouter } from "next/router";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionStyle from "../styles/SectionStyle";
import ButtonStyle from "../styles/ButtonStyle";
import "./ServiceOptions.scss";
import Link from "next/link";

const PopularCitizenship = () => {
  const router = useRouter();
  return (
    <SectionStyle className="fluid" style={{ backgroundColor: "#F2F2F2" }}>
      <Container>
        <Row>
          <Col md={12}>
            <h5
              className="underlineBorder"
              style={{
                margin: "2rem 0",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              POPULAR CITIZENSHIP PROGRAMS
            </h5>
          </Col>
          {CitizenshipPrograms.map(({ image, name, path }, index) => (
            <Col md={3} key={index}>
              <Link href={path}>
                <a style={{ textDecoration: "none !important" }}>
                  <div className="option_wrapper">
                    <img
                      src={`/static/images/flags/homeflags/${image}`}
                      alt=""
                    />
                  </div>
                  <div className="text-center country_details">
                    <p className="my-4 name">{name}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
          {/* <Col md={12} className="text-center mt-5">
            <ButtonStyle
              onClick={() => router.push("/country")}
              className="transparent"
            >
              OTHERS{" "}
            </ButtonStyle>
          </Col> */}
        </Row>
        <Row className="my-4">
          <Col md={12}>
            <h5
              className="underlineBorder"
              style={{
                margin: "2rem 0",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              POPULAR RESIDENCY PROGRAMS
            </h5>
          </Col>
          {VisaPrograms.map(({ image, name, path }, index) => (
            <Col md={3} key={index}>
              <Link href={path}>
                <a style={{ textDecoration: "none !important" }}>
                  <div className="option_wrapper">
                    <img
                      src={`/static/images/flags/homeflags/${image}`}
                      alt=""
                    />
                  </div>
                  <div className="text-center country_details">
                    <p className="my-4 name">{name}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
          {/* <Col md={12} className="text-center mt-5">
            <ButtonStyle
              onClick={() => router.push("/country")}
              className="transparent"
            >
              OTHERS{" "}
            </ButtonStyle>
          </Col> */}
        </Row>
        <Row>
          <Col md={12}>
            <h5
              className="underlineBorder"
              style={{
                margin: "2rem 0",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              POPULAR VISA PROGRAMS
            </h5>
          </Col>
          {VisaPrograms.map(({ image, name, path }, index) => (
            <Col md={3} key={index}>
              <Link href={path}>
                <a style={{ textDecoration: "none !important" }}>
                  <div className="option_wrapper">
                    <img
                      src={`/static/images/flags/homeflags/${image}`}
                      alt=""
                    />
                  </div>
                  <div className="text-center country_details">
                    <p className="my-4 name">{name}</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
        <Row>
          <Col md={12} className="text-center mt-5">
            <ButtonStyle
              onClick={() => {
                router.push("/country");
                global.window.scrollTo(0, 0);
              }}
              className="transparent"
            >
              ALL PROGRAMS
            </ButtonStyle>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .country_details {
          }
          .country_details .name {
            font-size: 18px;
            font-weight: 500;
          }
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
            left: calc(50% - 50px);
          }
        `}
      </style>
    </SectionStyle>
  );
};

export default PopularCitizenship;

const VisaPrograms = [
  {
    name: "UNITED STATES OF AMERICA",
    image: "residency.jpg",
    path: "/country/usa",
  },
  {
    name: "UNITED KINGDOM",
    image: "citizenship.jpeg",
    path: "/country/united-kingdom",
  },
  { name: "CANADA", image: "highnetworth.jpg", path: "/country/canada" },
  { name: "AUSTRALIA", image: "residency.jpg", path: "/country/australia" },
];

const CitizenshipPrograms = [
  {
    name: "ANTIGUA & BARBUDA",
    image: "residency.jpg",
    path: "/country/antigua-barbuda",
  },
  { name: "DOMINICA", image: "citizenship.jpeg", path: "/country/dominica" },
  { name: "MALTA", image: "highnetworth.jpg", path: "/country/malta" },
  { name: "AUSTRIA", image: "residency.jpg", path: "/country/austria" },
];
