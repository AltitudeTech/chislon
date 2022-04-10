import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Grenada"
        image="flags/grenada.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
