import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import ThreeColumn from "../../components/Home/ThreeColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CLIENTS" country="vision-mission.png" />
      <ThreeColumn heading="Clients" />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
