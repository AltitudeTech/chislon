import React, { Fragment } from "react";
import ServicesJumbotron from "../components/Services/Jumbotron";
import ClientSection from "../components/Home/ClientSection";
import { CountryJumbo } from "../components/Countries";

const Index = () => {
  return (
    <Fragment>
      {/* <ServicesJumbotron /> */}
      <CountryJumbo title="SERVICES" hasExtension country="service.jpeg" />
      <ClientSection />
    </Fragment>
  );
};
export default Index;
