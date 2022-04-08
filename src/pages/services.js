import React, { Fragment } from "react";
import ClientSection from "../components/Home/ClientSection";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

const Index = () => {
  return (
    <Fragment>
      <TopBanner subtitle="SERVICES" title="Services" image="service.jpeg" />
      <ClientSection />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
