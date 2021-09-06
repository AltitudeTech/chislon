import React from "react";
import { Row, Col } from "reactstrap";
import Container from "reactstrap/lib/Container";
import Link from "next/link";
import { withTheme } from "styled-components";

const ContactHere = (props) => {
  const { noBg = null } = props;
  return (
    <Container
      fluid
      style={{ width: "100%", backgroundColor: `${!noBg ? props.theme.colors.yellow : 'transparent'}`, }}
    >
      <Row style={{ margin: 0, padding: "3rem 0" }}>
        <Col sm={{ size: 12 }} style={{ textAlign: "center" }}>
          <Link href="/contact">
            <a
              style={{
                backgroundColor: `${props.theme.colors.main}`,
                color: "#fff",
                fonrWeight: "bold",
                borderRadius: "10px",
                padding: "1rem 5rem",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              CONTACT US
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default withTheme(ContactHere);
