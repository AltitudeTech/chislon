import React, { Fragment } from "react";
import TopBanner from "../../components/Home/TopBanner";
import ContactBox from "../../components/Home/ContactBox";
import LifeInLocation from "../../components/Countries/lifeinlocation";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="VISAS" title="Visas" image="visas.jpeg" />

      <LifeInLocation />
      <ContactBox />
    </Fragment>
  );
};
