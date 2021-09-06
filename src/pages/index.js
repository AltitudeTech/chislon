import React, { Fragment } from "react";
import Carousel from "../components/Carousel";
import DoubleColumn from "../components/Home/DoubleColumn";
import CertifiedPartnerForm from "../components/Forms/CertifiedPartnerForm";

const Index = () => {
  return (
    <Fragment>
      <Carousel />
      <DoubleColumn />
       <div className="my-5"></div>
      <CertifiedPartnerForm />
    </Fragment>
  );
};
export default Index;
