import React, { Fragment } from "react";
import { CountryJumbo } from "../components/Countries";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import TwoColumn from "../components/Home/TwoColumn";
import VisaImage from "../components/Home/VisaImage";

export default () => {
  return (
    <Fragment>
      <ContactBox subtitle="ABOUT" title="About Us" image="about.jpeg" />
      <TwoColumn headinga="Our Purpose" headingb="Our Vision" />
      <DoubleColumn
        heading="Expertise"
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Clients"
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Code of Conduct"
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Partner"
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Team"
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Career"
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <ContactBox />
    </Fragment>
  );
};
