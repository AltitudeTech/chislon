import React, { Fragment } from "react";
import CountryCitizen, {
  AustriaDetail,
} from "../../components/Countries/CountryCitizen";
import ContactBox from "../../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        subtitle="COUNTRY"
        title="Austria"
        image="flags/austria.jpg"
      />
      <CountryCitizen detail={<AustriaDetail />} />
      <ContactBox />
    </Fragment>
  );
};
