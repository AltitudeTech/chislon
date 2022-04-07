import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import DoubleColumn from "../components/Home/DoubleColumn";
import ContactHere from "../components/Home/contactHere";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      {/* <CountryJumbo title="Jorunal of Migration" hasExtension country="healthcare.jpeg" /> */}
      <TopBanner subtitle="JOURNAL OF MIGRATION" title="Jorunal of Migration" />
      <DoubleColumn heading="Journal of Migration Heading" />
      <DoubleColumn heading="Journal of Migration Heading" />
      <ContactBox />
    </Fragment>
  );
};
