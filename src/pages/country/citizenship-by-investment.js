import React, { Fragment } from "react";
import Countries from "../../components/Countries";

const Country = () => {
  return (
    <Fragment>
      <Countries category="citizenship" country="countries.jpeg" hasExtension />
    </Fragment>
  );
};
export default Country;
