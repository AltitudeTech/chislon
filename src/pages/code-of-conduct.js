import React, { Fragment } from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="COBDUCT" title="Code Of Conduct" image="coc.jpeg" />
      <DoubleColumn heading="Code of Conduct Heading" noContactButton />
      <DoubleColumn heading="Code of Conduct Heading" noContactButton />
      <DoubleColumn heading="Code of Conduct Heading" noContactButton />
      <ContactBox />
    </Fragment>
  );
};
