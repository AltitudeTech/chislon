import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";

const SocialResponsibility = () => {
  return (
    <Fragment>
      <TopBanner
        subtitle="SOCIAL RESPONSIBILITY"
        title="Social Responsibility"
        image="services.jpeg"
      />
      <DoubleColumn heading="Social Responsibility" />
      <DoubleColumn heading="Social Responsibility" />
      <ContactBox />
    </Fragment>
  );
};
export default SocialResponsibility;
