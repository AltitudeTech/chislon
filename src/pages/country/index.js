import React, { Fragment } from "react";
import Countries from "../../components/Countries";

const Country = () => {
  return (
    <Fragment>
      <Countries title="COUNTRY" hasExtension country="citizenship.jpeg" />
    </Fragment>
  );
};
export default Country;
