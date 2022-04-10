import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="United Kingdom"
        image="flags/united-kingdom.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
