import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Index() {
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
}

const LocationBox = () => {
    <>
    <div className="location">
<img />
    </div>
    </>
}

const RealEstateLocation = [
  { location: "Antigua and Barbuda" },
  { location: "Cyprus" },
  { location: "Dominica" },
  { location: "Greece" },
  { location: "Malta" },
  { location: "Mauritius" },
  { location: "Montenegro" },
  { location: "Portugal" },
  { location: "St. Kitts and Nevis" },
];
