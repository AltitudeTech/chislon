import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";
import CertifiedPartnerForm from "../components/Forms/CertifiedPartnerForm";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="STUDY ABROAD" country="studyabroad.png" />
      <DoubleColumn heading="Study Abroad Heading" />
      <DoubleColumn heading="Study Abroad Heading" />
      <CertifiedPartnerForm />
      <ContactHere />
    </Fragment>
  );
};
