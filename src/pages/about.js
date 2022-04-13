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
      <TwoColumn
        headinga="Our Purpose"
        headingb="Our Vision"
        imagea="purpose.jpeg"
        imageb="vision.jpeg"
      />
      <DoubleColumn
        heading="Expertise"
        secondColumn={<VisaImage image="expertise.jpeg" />}
      />
      <DoubleColumn
        heading="Clients"
        buttonLabel="MORE ON CLIENTS"
        path="/services"
        firstColumn={<VisaImage image="clients.jpeg" />}
      />
      <DoubleColumn
        heading="Code of Conduct"
        path="/code-of-conduct"
        buttonLabel="MORE ON CODE OF CONDUCT"
        secondColumn={<VisaImage image="services.jpeg" />}
      />
      <DoubleColumn
        heading="Partner"
        buttonLabel="MORE ON PARTNERS"
        path="/international-partner"
        firstColumn={<VisaImage image="partners.jpeg" />}
      />
      <DoubleColumn
        heading="Team"
        buttonLabel="MORE ON TEAM"
        path="/team"
        secondColumn={<VisaImage image="team.jpeg" />}
      />
      <DoubleColumn
        heading="Career"
        path="/career"
        buttonLabel="MORE ON CAREER"
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <ContactBox />
    </Fragment>
  );
};
