import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Jumbotron, Row, Col } from "reactstrap";
import "./index.scss";
import { CountryList } from "../Footer";
import { WhyChislon } from "../Home/HowWeWork";

const Countries = () => {
  return (
    <Fragment>
      <CountryJumbo title="COUNTRIES HEADER" country="usa" />
      <Container className="mt-5">
        <Row className="row">
          <Col md={12}>
            {/* <div className="country_wrapper">
              {CountryList.map((country, index) => {
                return (
                  <div href={country.href} key={index} className="country_flag">
                    <p>{country.name}</p>
                  </div>
                );
              })}
            </div> */}
            <WhyChislon CustomArray={CountryList} bgColor="#B848FF" />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Countries;

export const CountryJumbo = ({ title, country = "usa.jpg" }) => (
  <Fragment>
    <Jumbotron
      fluid
      className="addOverlay"
      // style={{ backgroundImage: `url('/static/images/flags/study about.png')` }}
      style={{ backgroundImage: `url('/static/images/flags/${country}')` }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <div className="jumboText text-center text-white">
          <h1 className="display-6">{title}</h1>
          <p className="lead">
            Review available options. Obtain personalized advice. Make the right
            choice.
          </p>
        </div>
      </Container>
    </Jumbotron>
  </Fragment>
);

export const flags = [
  { name: "Antigua Barbuda", href: "/country/antigua-barbuda" },
  { name: "Bulgaria", href: "/country/bulgaria" },
  { name: "Quebec, Canada", href: "/country/quebec-canada" },
  { name: "Cyprus", href: "/country/cyprus" },
  { name: "Dominica", href: "/country/dominica" },
  { name: "Grenada", href: "/country/grenada" },
  { name: "Hungary", href: "/country/hungary" },
  { name: "Montenegro", href: "/country/montenegro" },
  { name: "Portugal", href: "/country/portugal" },
  { name: "Saint Lucia", href: "/country/saint-lucia" },
  { name: "United Kingdom", href: "/country/united-kingdom" },
  { name: "USA", href: "/country/usa" },
];
