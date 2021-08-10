import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import ContactHere from "../../components/Home/contactHere";
import DoubleColumn from "../../components/Home/DoubleColumn";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="VISION & MISSION" country="vision-mission.png" />
      <DoubleColumn heading="Vision" />
      <DoubleColumn heading="Mission" />
      <ContactHere />
    </Fragment>
  );
};
