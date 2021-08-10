import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries";
import ContactHere from "../components/Home/contactHere";
import DownloadBrochureForm from "../components/Forms/DownloadBrochureForm";

const DownloadB = () => {
  return (
    <Fragment>
      <CountryJumbo title="DOWNLOAD BROCHURE" country="healthcare.png" />
      <DownloadBrochureForm />
      <ContactHere />
    </Fragment>
  );
};

export default DownloadB;
