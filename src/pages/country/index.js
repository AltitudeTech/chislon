import React, { Fragment } from "react";
import TopBanner from "../../components/Home/TopBanner";
import ContactBox from "../../components/Home/ContactBox";
import Countries from "../../components/Countries";

const Country = () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="COUNTRY"
        title="Investment Migration Countries"
        image="countries.jpeg"
      />
      <Countries title="COUNTRY" hasExtension country="citizenship.jpeg" />
      <ContactBox />
    </Fragment>
  );
};
export default Country;
