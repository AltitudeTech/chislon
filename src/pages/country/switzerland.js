import React, { Fragment } from "react";
import CountryCitizen from "../../components/Countries/CountryCitizen";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Spain"
        image="flags/spain.jpg"
      />
      <CountryCitizen />
      <ContactBox />
    </Fragment>
  );
};