import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { CountryJumbo } from "../components/Countries/index";
import CertifiedPartnerForm, {
  TextTop,
} from "../components/Forms/CertifiedPartnerForm";
import TopBanner from "../components/Home/TopBanner";
import ContactHere from "../components/Home/contactHere";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="INTERNATIONAL"
        title="International Partners"
        image="real-estate.jpeg"
      />
      <DoubleColumn heading="International Partner Heading" />
      <DoubleColumn heading="International Partner Heading" />
      {/* <TextTop title="Become an International Partner" /> */}
      {/* <CertifiedPartnerForm /> */}
      <ContactBox />
    </Fragment>
  );
};
