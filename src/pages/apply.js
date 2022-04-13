import React, { Fragment } from "react";
import ContactBox from "../components/Home/ContactBox";
import ApplyForm from "../components/Contact/ApplyForm";

const Contact = () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        title="Application Form"
        subtitle="APPLY"
        image="incorporation.jpeg"
      />
      <ApplyForm />
    </Fragment>
  );
};
export default Contact;
