import React, { Fragment } from "react";
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
      <ContactBox />
    </Fragment>
  );
};
