import React, { Fragment } from "react";
import DoubleColumn from "../components/Home/DoubleColumn";
import Jumbotron from "../components/Jumbotron";

const SocialResponsibility = () => {
  return (
    <Fragment>
      <Jumbotron title="Social Responsibility" />
      <DoubleColumn heading="Social Responsibility" />
      <DoubleColumn heading="Social Responsibility" />
    </Fragment>
  );
};
export default SocialResponsibility;
