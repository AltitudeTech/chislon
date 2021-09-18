import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import DoubleColumn from "../components/Home/DoubleColumn";
import ClientSection from "../components/Home/ClientSection";
import ServiceOptions from "../components/Home/ServiceOptions";
import CertifiedPartnerForm from "../components/Forms/CertifiedPartnerForm";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <div className="my-5"></div>
      <DoubleColumn />
      <div className="my-5"></div>
      <ClientSection />
      <ServiceOptions />
      {/* <CertifiedPartnerForm /> */}
    </Fragment>
  );
};
export default Index;
