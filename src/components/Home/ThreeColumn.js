import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Heading3Style from "../styles/Heading3";
import Container from "reactstrap/lib/Container";

const ThreeColumn = ({
  heading = "STUDY, GET A JOB OR START A BUSINESS ANYWHERE IN THE WORLD",
}) => {
  return (
    <Container>
      <Row style={{ padding: "2rem 0" }}>
        <Col md={{ size: 4 }}>
          <ClientCard />
        </Col>
        <Col md={{ size: 4 }}>
          <ClientCard title="Corporate" />
        </Col>
        <Col md={{ size: 4 }}>
          <ClientCard title="Government" />
        </Col>
      </Row>
    </Container>
  );
};

export default ThreeColumn;

const ClientCard = ({ title = "Private" }) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="/static/images/flags/joinchision.png"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        {/* <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle> */}
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </CardText>
        {/* <button className="cardButton">Find out more</button> */}
      </CardBody>
      <style jsx>
        {`
          .cardButton {
            background-color: transparent !important;
            border: 1px solid #b2b2b2;
            padding: 5px 15px;
            border-radius: 10px;
          }
        `}
      </style>
    </Card>
  );
};
