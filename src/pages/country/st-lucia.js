import React, { Fragment } from "react";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="St. Lucia"
        image="flags/saint-lucia.jpg"
      />
      <ContactBox />
    </Fragment>
  );
};
