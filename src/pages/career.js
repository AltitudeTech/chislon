import React, { Fragment } from "react";
import CareerOppotunity from "../components/Contact/CareerOppotunity";
import ContactBox from "../components/Home/ContactBox";

const Contact = () => {
  return (
    <Fragment>
      <ContactBox
        noContactButton
        title="Careers"
        subtitle="CAREERS"
        image="career.jpg"
      />
      <CareerOppotunity />
      <ContactBox />
    </Fragment>
  );
};
export default Contact;
