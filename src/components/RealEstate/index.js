import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./index.scss";

export default () => {
  return (
    <Container>
      <Row>
        {RealEstateLocation.map((item, index) => (
          <Col md={3}>
            <LocationBox item={item} key={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const LocationBox = ({ item }) => {
  const { location, image } = item;
  return (
    <>
      <Link href="">
        <a className="location my-5">
          <p className="title mt-5">{location}</p>
          <div className="image__wrapper">
            <img
              src={`/static/images/realestate/${image}`}
              className="img-fluid"
            />
          </div>
          <p className="find__property">
            Find Property <sup>__</sup>
          </p>
        </a>
      </Link>
    </>
  );
};

const RealEstateLocation = [
  { location: "Antigua and Barbuda", image: "barbuda.jpg" },
  { location: "Cyprus", image: "cyprus.jpg" },
  { location: "Dominica", image: "dominica.jpg" },
  { location: "Greece", image: "greece.jpg" },
  { location: "Malta", image: "malta.jpg" },
  { location: "Mauritius", image: "mauritius.jpg" },
  { location: "Montenegro", image: "montenegro.jpg" },
  { location: "Portugal", image: "portugal.jpg" },
  { location: "St. Kitts and Nevis", image: "kitts.jpg" },
];
