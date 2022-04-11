import React from "react";
import { Col, Container, Row } from "reactstrap";
import ButtonStyle from "../styles/ButtonStyle";
import { RealEstateLocation } from "./index";
import "./SearchRealEstate.scss";

export default function SearchRealEstate() {
  return (
    <>
      <section className="searchBox">
        <Container>
          <Row>
            <Col md={12}>
              <form className="form-inline">
                <label className="d-block mr-2">
                  <span className="d-block">Country</span>
                  <select className="form-control">
                    <option>Any</option>
                    {RealEstateLocation.map(({ location }, index) => (
                      <option key={index}>{location}</option>
                    ))}
                  </select>
                </label>
                <label className="d-block mr-2">
                  <span className="d-block">City</span>
                  <select className="form-control">
                    <option>Any</option>
                    {RealEstateLocation.map(({ location }, index) => (
                      <option key={index}>{location}</option>
                    ))}
                  </select>
                </label>
                <label className="d-block mr-2">
                  <span className="d-block">Apartment Type</span>
                  <select className="form-control">
                    <option>Any</option>
                    <option>Apartment</option>
                    <option>Bungalow</option>
                    <option>Duplex</option>
                    <option>Farmhouse</option>
                    <option>Penthouse</option>
                    <option>Restoration</option>
                    <option>Studio</option>
                    <option>Townhouse</option>
                    <option>Villa</option>
                  </select>
                </label>
                <label className="d-block mr-2">
                  <span className="d-block">Bedrooms</span>
                  <select className="form-control">
                    <option>Any</option>
                    <option>1 +</option>
                    <option>2 +</option>
                    <option>3 +</option>
                    <option>4 +</option>
                  </select>
                </label>
                <label className="d-block mr-2">
                  <span className="d-block">Price</span>
                  <select className="form-control">
                    <option>Any</option>
                    <option>300,000</option>
                    <option>300,000 - 500,000</option>
                    <option>500,000 - 1,000,000</option>
                    <option>1,000,000 - 2,000,000</option>
                    <option>2,000,000 - 5,000,000</option>
                    <option>5,000,000</option>
                  </select>
                </label>
                <ButtonStyle className="transparent mt-4">SEARCH</ButtonStyle>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row className="my-4">
          <Col md={8}>
            <EstateBox image="estate1.jpg" />
            <EstateBox image="estate2.jpg" />
            <EstateBox image="estate3.jpg" />
            <EstateBox image="estate4.jpg" />
            <EstateBox image="estate1.jpg" />
            <EstateBox image="estate2.jpg" />
            <EstateBox image="estate3.jpg" />
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

const EstateBox = ({ image = "estate1.jpg" }) => {
  return (
    <Row className="mb-5">
      <Col md={8}>
        <div>
          <img
            className="img-fluid"
            src={`/static/images/realestate/building/${image}`}
          />
        </div>
      </Col>
      <Col md={4}>
        <div className="estateData">
          <p className="title">Sliema Townhouse</p>
          <p>EUR 2,300/pm</p>

          <p>Sliema, Malta</p>

          <div>
            Property Type: Townhouse
            <br />
            Bedrooms: 3 <br />
            Total Area: 246m²
          </div>
        </div>
      </Col>
    </Row>
  );
};
