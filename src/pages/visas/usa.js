import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="United States of America" hasExtension country="citizenship.jpeg" />
      <DoubleColumn heading="USA Heading" />
      <DoubleColumn heading="USA Heading" />
      <DoubleColumn heading="USA Heading" />
    </Fragment>
  );
};
