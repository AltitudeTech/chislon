import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";

import TopBanner from "../components/Home/TopBanner";
import RealEstate from "../components/RealEstate";
import SearchRealEstate from "../components/RealEstate/SearchRealEstate";

export default () => {
  return (
    <Fragment>
      <TopBanner image="real-estate.jpeg" />
      <RealEstate />
      <SearchRealEstate />
      <ContactBox />
    </Fragment>
  );
};
