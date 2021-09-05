import React, { Fragment } from "react";
import { CountryJumbo, CountryBody } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="GREECE" className="grenada" country="grenada" />
      <CountryBody title="GREECE" />
    </Fragment>
  );
};
