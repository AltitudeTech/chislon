import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import CertifiedPartnerForm, {
  TextTop,
} from "../components/Forms/CertifiedPartnerForm";
import ContactHere from "../components/Home/contactHere";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="INTERNATIONAL PARTNERS"
        country="internationalpartners.png"
      />
      <DoubleColumn heading="International Partner Heading" />
      <DoubleColumn heading="International Partner Heading" />
      {/* <TextTop title="Become an International Partner" /> */}
      <CertifiedPartnerForm />
      <ContactHere />
    </Fragment>
  );
};
