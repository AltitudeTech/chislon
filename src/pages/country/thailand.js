import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Thailand"
        image="flags/austria.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
