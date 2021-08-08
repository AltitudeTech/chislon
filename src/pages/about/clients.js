import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CLIENTS" country="vision-mission.png" />
      <DoubleColumn heading="Clients" />
      <ContactHere />
    </Fragment>
  );
};
