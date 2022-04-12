import React, { Fragment } from "react";
import CareerDetail from "../components/Contact/CareerDetail";
import ContactBox from "../components/Home/ContactBox";

const Contact = () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        title="Client Advisor — London"
        image="incorporation.jpeg"
      />
      <CareerDetail />
      <ContactBox />
    </Fragment>
  );
};
export default Contact;
