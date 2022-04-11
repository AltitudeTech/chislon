import React, { Fragment } from "react";
import CountryCitizen from "../../components/Countries/CountryCitizen";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Antigua and Barbuda"
        image="flags/barbuda.jpg"
      />
      <CountryCitizen />
      <ContactBox />
    </Fragment>
  );
};
