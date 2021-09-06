import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";
import CareerForm from "../../components/Forms/CareerForm";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CAREER" hasExtension country="career_main.jpg" />
      <DoubleColumn heading="Career Heading" secondColumn={<SecondColumn />} />
      <DoubleColumn heading="Career Heading" />
      {/* <ContactHere /> */}
      <CareerForm />
    </Fragment>
  );
};

const SecondColumn = () => {
  return <img src="/static/images/flags/homeflags/career_body.jpg" /> ;
}
