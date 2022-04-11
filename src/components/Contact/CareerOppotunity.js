import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import "./CareerOppotunity.scss";

export default function CareerOppotunity() {
  return (
    <Container>
      <Row>
        <Col md={12} className="my-5">
          <h2>Career Opportunities at Chislon Broadway</h2>
        </Col>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((_) => (
          <Col md={4} className="mb-4">
            <div className="careers">
              <Link href="">
                <a>
                  <p className="job">Client Advisor </p>
                  <p className="location">LOCATION</p>
                </a>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
