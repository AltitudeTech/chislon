import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="United States of America"
        image="flags/usa.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
