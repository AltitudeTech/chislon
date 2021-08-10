import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";
import CertifiedPartnerForm from "../components/Forms/CertifiedPartnerForm";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="WORK ABROAD" country="workabroad.png" />
      <DoubleColumn heading="Work Abroad Heading" />
      <DoubleColumn heading="Work Abroad Heading" />
      <CertifiedPartnerForm />
      <ContactHere />
    </Fragment>
  );
};
