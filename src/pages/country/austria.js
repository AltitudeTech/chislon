import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";
import DoubleColumn from "../../components/Home/DoubleColumn";
import TopBanner from "../../components/Home/TopBanner";
import TwoColumn from "../../components/Home/TwoColumn";
import VisaImage from "../../components/Home/VisaImage";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Austria"
        image="flags/austria.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
