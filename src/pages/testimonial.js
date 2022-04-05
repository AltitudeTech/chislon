import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import TestimonialRow from "../components/Home/TestimonialRow";

export default () => {
  return (
    <Fragment>
      <CountryJumbo
        title="TESTIMONIAL"
        hasExtension
        country="highnetworth.jpg"
      />
      <TestimonialRow />
    </Fragment>
  );
};
