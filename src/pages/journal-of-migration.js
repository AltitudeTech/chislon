import React, { Fragment } from "react";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

export default () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="JOURNAL OF MIGRATION"
        title="Journal of Migration"
        image="insight.jpeg"
      />
      <DoubleColumn heading="Journal of Migration Heading" />
      <DoubleColumn heading="Journal of Migration Heading" />
      <ContactBox />
    </Fragment>
  );
};
