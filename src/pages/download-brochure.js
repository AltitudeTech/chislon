import React, { Fragment } from "react";
import DownloadBrochureForm from "../components/Forms/DownloadBrochureForm";
import ContactBox from "../components/Home/ContactBox";
import TopBanner from "../components/Home/TopBanner";

const DownloadB = () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="Download"
        title="Download Brochure"
        image="workabroad.jpeg"
      />
      <DownloadBrochureForm />
      <ContactBox />
    </Fragment>
  );
};

export default DownloadB;
