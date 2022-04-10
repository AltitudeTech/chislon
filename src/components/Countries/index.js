import React, { Fragment } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Container, Jumbotron, Row, Col, Table } from "reactstrap";
import "./index.scss";

export const PopularDestination = () => {
  return (
    <Fragment>
      <Container>
        <Row className="row">
          <Col md={12}>
            <h2 style={{ textAlign: "center" }}>POPULAR DESTINATION</h2>
          </Col>
        </Row>
        <Row className="row">
          <Marquee pauseOnHover={true}>
            <div className="country_flag_wrapper">
              {flags.map((flag, index) => {
                return (
                  <div>
                    <Link href={flag.href} key={index}>
                      <a className="country_flag">
                        <span style={{ display: "block" }}>{flag.name}</span>
                        <img
                          src={`/static/images/flags/homeflags/${flag.logo}`}
                          classNaME="img-fluid"
                          alt={flag.name}
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </Row>
      </Container>
    </Fragment>
  );
};

const Countries = ({
  category,
  title = "COUNTRIES",
  country = null,
  hasExtension = false,
}) => {
  return (
    <Fragment>
      <Container>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              European Citizenship by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {European.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          {/* 
          <div className="country_wrapper">
            {!category
              ? flags.map((flag, index) => {
                  return (
                    <Link href={flag.href} key={index}>
                      <a className="country_flag">
                        <p>{flag.name}</p>
                      </a>
                    </Link>
                  );
                })
              : flags
                  .filter((flag) => flag.category == category)
                  .map((flag, index) => {
                    return (
                      <Link href={flag.href} key={index}>
                        <a className="country_flag">
                          <p>{flag.name}</p>
                        </a>
                      </Link>
                    );
                  })}
          </div> */}
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              Caribbean Citizenship by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {Carribean.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              Middle Eastern Citizenship by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {MiddleEastern.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              European Residence by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {EuropeanR.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              American Residence by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {American.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              Asian and Pacific Residence by Investment Programs
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {Asian.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="row my-5">
          <Col md={12}>
            <p style={{ fontWeight: "400", fontSize: "40px" }}>
              African Residence by Investment Program
            </p>
          </Col>
          <Col md={12}>
            <Table>
              <tbody>
                <tr>
                  <td></td>
                  <td>Minimum capital</td>
                  <td>Processing time</td>
                  <td>Key benefit</td>
                  <td></td>
                </tr>
                {Africa.map(({ name, image, path }, key) => (
                  <tr key={key}>
                    <td>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "300",
                          minWidth: "300px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/static/images/countries/${image}`}
                          style={{ width: "40px" }}
                        />
                        <span className="px-3">{name}</span>
                      </p>
                    </td>
                    <td>EUR 3 million</td>
                    <td>24–36 months</td>
                    <td>
                      <p style={{ maxWidth: "200px" }}>
                        Opportunity to become an EU citizen upon making a
                        substantial capital contribution
                      </p>
                    </td>
                    <td>
                      <Link href={`/country/${path}`}>
                        <a>
                          More Info <sup>___</sup>
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Countries;

export const CountryJumbo = ({ title, country = "usa", hasExtension }) => (
  <Fragment>
    <Jumbotron
      fluid
      className="d-flex justify-content-center align-items-center"
      // className="addOverlay"
      // style={{ backgroundImage: `url('/static/images/flags/study about.png')` }}
      style={{
        backgroundImage: `url('/static/images/flags/homeflags/${
          hasExtension ? country : country + ".png"
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "50vh",
      }}
    >
      {/* <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ border: "1px solid red" }}
      > */}
      <div
        className="jumboText text-center text-white"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 className="m-0 p-0">{title}</h1>
        {/* <h1 className="display-6 pl-4">{title}</h1> */}
        {/* <p className="lead">
            Review available options. Obtain personalized advice. Make the right
            choice.
          </p> */}
      </div>
      {/* </Container> */}
    </Jumbotron>
  </Fragment>
);

export const CountryBody = ({ title = "USA" }) => (
  <Fragment>
    <Container>
      <Row>
        <Col md={12} className="mt-5 mb-3">
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6} className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col md={6} className="my-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
      </Row>
    </Container>
  </Fragment>
);

export const European = [
  { name: "Austria", image: "austria.png", path: "austria" },
  { name: "Malta", image: "malta.png", path: "malta" },
  { name: "Montenegro", image: "montenegro.png", path: "montenegro" },
  {
    name: "North Macedonia",
    image: "north-macedonia.png",
    path: "north-macedonia",
  },
  { name: "Turkey", image: "turkey.png", path: "turkey" },
];
const American = [
  { name: "Canada", image: "canada.png", path: "canada" },
  { name: "Panama", image: "panama.png", path: "panama" },
  { name: "United States of America", image: "usa.png", path: "usa" },
];
export const Asian = [
  { name: "Australia", image: "australia.png", path: "australia" },
  { name: "Hong Kong", image: "hong-kong.png", path: "hong-kong" },
  { name: "Malaysia", image: "malaysia.png", path: "malaysia" },
  { name: "New Zealand", image: "newzealand.png", path: "newzealand" },
  { name: "Singapore", image: "singapore.png", path: "singapore" },
  { name: "Thailand", image: "thailand.png", path: "thailand" },
];
const Africa = [
  { name: "Mauritius", image: "mauritius.png", path: "mauritius" },
];
const MiddleEastern = [{ name: "Jordan", image: "jordan.png", path: "jordan" }];

export const EuropeanR = [
  { name: "Austria", image: "austria.png", path: "austria" },
  { name: "Cyprus", image: "cyprus.png", path: "cyprus" },
  { name: "Greece", image: "greece.png", path: "greece" },
  { name: "Italy", image: "italy.png", path: "italy" },
  { name: "Jersey", image: "jersey.png", path: "jersey" },
  { name: "Latvia", image: "latvia.png", path: "latvia" },
  { name: "Luxembourg", image: "luxembourg.png", path: "luxembourg" },
  { name: "Malta", image: "malta.png", path: "malta" },
  { name: "Monaco", image: "monaco.png", path: "monaco" },
  { name: "Portugal", image: "portugal.png", path: "portugal" },
  { name: "Spain", image: "Spain.png", path: "Spain" },
  { name: "Switzerland", image: "Switzerland.png", path: "Switzerland" },
  {
    name: "United Kingdom",
    image: "united-kingdom.png",
    path: "united-kingdom",
  },
];

const Carribean = [
  {
    name: "Antigua and Barbuda",
    image: "antigua-barbuda.png",
    path: "antigua-barbuda",
  },
  { name: "Dominica", image: "dominica.png", path: "dominica" },
  { name: "Grenada", image: "grenada.png", path: "grenada" },
  {
    name: "St. Kitts and Nevis",
    image: "st-kitts-nevis.png",
    path: "st-kitts-nevis",
  },
  { name: "St. Lucia", image: "st-lucia.png", path: "st-lucia" },
];

export const flags = [
  {
    name: "Antigua Barbuda",
    href: "/country/antigua-barbuda",
    logo: "barbuda.png",
    category: "citizenship",
  },
  {
    name: "Bulgaria",
    href: "/country/bulgaria",
    logo: "bulgaria.png",
    category: "citizenship",
  },
  {
    name: "Quebec, Canada",
    href: "/country/quebec-canada",
    logo: "canada.png",
    category: "residency",
  },
  {
    name: "Cyprus",
    href: "/country/cyprus",
    logo: "cyprus.png",
    category: "citizenship",
  },
  {
    name: "Dominica",
    href: "/country/dominica",
    logo: "dominica.png",
    category: "citizenship",
  },
  {
    name: "Grenada",
    href: "/country/grenada",
    logo: "grenada.png",
    category: "citizenship",
  },
  {
    name: "Hungary",
    href: "/country/hungary",
    logo: "hungary.png",
    category: "citizenship",
  },
  {
    name: "Montenegro",
    href: "/country/montenegro",
    logo: "montenegro.png",
    category: "citizenship",
  },
  {
    name: "Portugal",
    href: "/country/portugal",
    logo: "portugal.png",
    category: "residency",
  },
  {
    name: "Saint Lucia",
    href: "/country/saint-lucia",
    logo: "saint-lucia.png",
    category: "citizenship",
  },
  {
    name: "Spain",
    href: "/country/spain",
    logo: "saint-lucia.png",
    category: "residency",
  },
  {
    name: "Greece",
    href: "/country/greece",
    logo: "saint-lucia.png",
    category: "residency",
  },
  {
    name: "United Kingdom",
    href: "/country/united-kingdom",
    logo: "united-kingdom.png",
    category: "residency",
  },
  {
    name: "USA",
    href: "/country/usa",
    logo: "usa.png",
    category: "residency",
  },
];
