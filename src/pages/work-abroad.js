import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";
import CertifiedPartnerForm from "../components/Forms/CertifiedPartnerForm";
import { WorkVisa } from "../components/Home/VisaImage";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="WORK ABROAD"
        hasExtension
        country="workabroad.jpeg"
      />
      <DoubleColumn heading="Work Abroad Heading" secondColumn={<WorkVisa />} />
      <DoubleColumn heading="Work Abroad Heading" />
      <CertifiedPartnerForm />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
