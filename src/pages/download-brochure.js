import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import ContactHere from "../components/Home/contactHere";
import DownloadBrochureForm from "../components/Forms/DownloadBrochureForm";

const DownloadB = () => {
  return (
    <Fragment>
      <CountryJumbo title="DOWNLOAD BROCHURE" hasExtension country="workabroad.jpeg" />
      <DownloadBrochureForm />
      {/* <ContactHere /> */}
    </Fragment>
  );
};

export default DownloadB;