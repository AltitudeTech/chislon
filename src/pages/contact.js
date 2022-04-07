import React, { Fragment } from "react";
import ContactJumbotron from "../components/Contact/Jumbotron";
import ServiceLists from "../components/Contact/ServiceLists";
import ContactBox from "../components/Home/ContactBox";

const Contact = () => {
  return (
    <Fragment>
      {/* <ContactJumbotron /> */}
      <ContactBox
        noContactButton
        title="General Enquiry Form"
        subtitle="CONTACT | GENERAL ENQUIRY"
      />
      <ServiceLists />
    </Fragment>
  );
};
export default Contact;
