import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";
import { CountryJumbo } from "../../components/Countries/index";

export default () => {
  return (
    <Fragment>
      <CountryJumbo title="BULGARIA" className="bulgaria" />
    </Fragment>
  );
};