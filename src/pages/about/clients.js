import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries";
import ContactHere from "../../components/Home/contactHere";
import ThreeColumn from "../../components/Home/ThreeColumn";
import ClientRow from "../../components/About/ClientRow";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="CLIENTS" hasExtension country="client.jpg" />
      {/* <ThreeColumn heading="Clients" /> */}
      <ClientRow />
      {/* <ContactHere /> */}
    </Fragment>
  );
};
