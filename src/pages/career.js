import React, { Fragment } from "react";
import ServiceLists from "../components/Contact/ServiceLists";
import ContactBox from "../components/Home/ContactBox";

const Contact = () => {
  return (
    <Fragment>
      <ContactBox noContactButton title="Career" subtitle="CAREERS" />
      <ServiceLists />
    </Fragment>
  );
};
export default Contact;
