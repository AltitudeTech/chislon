import React, { Fragment } from "react";
import ServicesJumbotron from "../components/Services/Jumbotron";
import ClientSection from "../components/Home/ClientSection";
import { CountryJumbo } from "../components/Countries";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

const Index = () => {
  return (
    <Fragment>
      {/* <ServicesJumbotron /> */}
      {/* <CountryJumbo title="SERVICES" hasExtension country="service.jpeg" /> */}
      <TopBanner subtitle="SERVICES" title="Services" />
      <ClientSection />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
