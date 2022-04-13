import React, { Fragment } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactBox from "../components/Home/ContactBox";

const Contact = () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        title="General Enquiry Form"
        subtitle="CONTACT | GENERAL ENQUIRY"
      />
      <ContactForm />
    </Fragment>
  );
};
export default Contact;
