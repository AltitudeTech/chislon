import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";
import CareerForm from "../../components/Forms/CareerForm";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CAREER" country="joinchision.png" />
      <DoubleColumn heading="Career Heading" />
      <DoubleColumn heading="Career Heading" />
      {/* <ContactHere /> */}
      <CareerForm />
    </Fragment>
  );
};