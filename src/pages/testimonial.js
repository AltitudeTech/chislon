import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries/index";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import TestimonialRow from "../components/Home/TestimonialRow";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="TESTIMONIAL" title="Testimonial" />
      {/* <CountryJumbo
        title="TESTIMONIAL"
        hasExtension
        country="highnetworth.jpg"
      /> */}
      <TestimonialRow />
      <ContactBox />
    </Fragment>
  );
};
