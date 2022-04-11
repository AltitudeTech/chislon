import React, { Fragment } from "react";
import CountryCitizen from "../../components/Countries/CountryCitizen";
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
        title="Portugal"
        image="flags/portugal.jpg"
      />
      <CountryCitizen />
      <ContactBox />
    </Fragment>
  );
};
