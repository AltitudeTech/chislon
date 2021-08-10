import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="RESIDENCY BY INVESTMENT" />
      <Container>
        <Row>
          <Col md={12}>
            <h5>WHAT IS PERMANENT RESIDENCY</h5>
            <p>
              Permanent residency is a visa status that allows the bearer of the
              PR card to legally reside in the host country without being a
              citizen of that country. Permanent residents are entitled to live,
              work, go to school and access health care in the host country.
              However, they are not typically entitled to vote or run for
              office.
            </p>
            <p>
              In order to be eligible to apply for permanent residency status in
              any given country, individuals usually have to meet certain
              requirements, such as having work experience in the country,
              having studied in the country and speaking the language. Since
              1986 investment has been another way to gain permanent residency.
              PR status can also lead to citizenship by naturalization provided
              the resident has lived in the country for a certain number of
              years.
            </p>

            <h5>WHAT IS RESIDENCY BY INVESTMENT?</h5>
            <p>
              Residency by investment is the process of obtaining a permanent
              residency card in another country by investing in the economy of
              that country. PR status is then conferred at an accelerated rate
              compared to traditional applications.
            </p>
            <h5>WHY DO PEOPLE INVEST IN PERMANENT RESIDENCY?</h5>
            <p>
              There are many reasons to invest in a permanent residency, from
              personal safety to increased global mobility. Permanent residency
              opens up a world of possibilities to high net worth investors.
            </p>
            <h5>Security</h5>
            <p>
              Permanent residency in a stable, peaceful country can be
              life-saving in the event of any kind of political unrest in one’s
              home country. This type of insurance is priceless for investors
              and their families.
            </p>
            <h5>Global Mobility</h5>
            <p>
              Many passports are quite restrictive in their visa-free mobility,
              forcing citizens to obtain visas whenever they need to travel
              abroad. Permanent residency can offer individuals from these
              countries increased global mobility. For example, the passport of
              China allows visa-free entry into only 58 countries, whereas
              permanent residency in Portugal allows uninhibited travel
              throughout the Schengen zone, which comprises 26 European states.
              The difference in global mobility equals an incredible amount of
              time saved filing visa applications and is priceless to
              businesspeople the world over.
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
