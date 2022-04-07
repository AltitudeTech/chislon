import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TopBanner from "../components/Home/TopBanner";
import Jumbotron from "../components/Jumbotron";

const SocialResponsibility = () => {
  return (
    <Fragment>
      {/* <Jumbotron title="Social Responsibility" /> */}
      <TopBanner
        subtitle="SOCIAL RESPONSIBILITY"
        title="Social Responsibility"
      />
      <DoubleColumn heading="Social Responsibility" />
      <DoubleColumn heading="Social Responsibility" />
      <ContactBox />
    </Fragment>
  );
};
export default SocialResponsibility;
