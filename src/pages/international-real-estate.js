import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";

import TopBanner from "../components/Home/TopBanner";
import RealEstate from "../components/RealEstate";

export default () => {
  return (
    <Fragment>
      <TopBanner image="real-estate.jpeg" />
      <RealEstate />
      <ContactBox />
    </Fragment>
  );
};
