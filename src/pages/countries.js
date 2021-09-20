import React, { Fragment } from "react";
import CountryHeader from "../components/Countries";
import ServiceLists from "../components/Contact/ServiceLists";

const Contact = () => {
  return (
    <Fragment>
      <CountryHeader />
      <ServiceLists />
    </Fragment>
  );
};
export default Contact;
