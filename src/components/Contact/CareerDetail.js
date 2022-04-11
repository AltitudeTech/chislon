import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

import "./CareerOppotunity.scss";
import ButtonStyle from "../styles/ButtonStyle";
import { useRouter } from "next/router";

export default function CareerDetail() {
  const router = useRouter();
  return (
    <Container>
      <Row>
        <Col md={8}>
          <div className="careersDetails">
            <p className="title">Key Responsibilities</p>
            <ul>
              <li>
                Promote the services and solutions offered by Chislon Broadway
              </li>
              <li>
                Research, prepare, and execute high-impact meetings with
                potential introducers, intermediary partners, and client
                prospects
              </li>
              <li>
                Actively grow the existing contact database to identify new
                value creation opportunities
              </li>
              <li>
                Develop new business leads with maximized conversion rates
              </li>
              <li>
                Provide client prospects with expert advice on residence and
                citizenship by investment solutions to ensure that their
                objectives are met
              </li>
              <li>
                Qualify prospects and undertake initial due diligence checks to
                assess suitability and mitigate exposure to operational risks
              </li>
            </ul>
            <p className="title">Essential Skills</p>
            <ul>
              <li>
                Promote the services and solutions offered by Chislon Broadway
              </li>
              <li>
                Research, prepare, and execute high-impact meetings with
                potential introducers, intermediary partners, and client
                prospects
              </li>
              <li>
                Actively grow the existing contact database to identify new
                value creation opportunities
              </li>
              <li>
                Develop new business leads with maximized conversion rates
              </li>
              <li>
                Provide client prospects with expert advice on residence and
                citizenship by investment solutions to ensure that their
                objectives are met
              </li>
              <li>
                Qualify prospects and undertake initial due diligence checks to
                assess suitability and mitigate exposure to operational risks
              </li>
            </ul>
            <p className="title">Desirable Skills</p>
            <ul>
              <li>
                Promote the services and solutions offered by Chislon Broadway
              </li>
              <li>
                Research, prepare, and execute high-impact meetings with
                potential introducers, intermediary partners, and client
                prospects
              </li>
              <li>
                Actively grow the existing contact database to identify new
                value creation opportunities
              </li>
              <li>
                Develop new business leads with maximized conversion rates
              </li>
              <li>
                Provide client prospects with expert advice on residence and
                citizenship by investment solutions to ensure that their
                objectives are met
              </li>
              <li>
                Qualify prospects and undertake initial due diligence checks to
                assess suitability and mitigate exposure to operational risks
              </li>
            </ul>

            <ButtonStyle
              className="transparent"
              onClick={() => router.push("/apply")}
            >
              APPLY HERE
            </ButtonStyle>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
