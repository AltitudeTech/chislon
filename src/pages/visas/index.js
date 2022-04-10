import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";
import TopBanner from "../../components/Home/TopBanner";
import ContactBox from "../../components/Home/ContactBox";
import VisaImage from "../../components/Home/VisaImage";
import { Container, Row } from "reactstrap";
import LifeInLocation from "../../components/Countries/lifeinlocation";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="VISAS" title="Visas" />

      <LifeInLocation />
      <ContactBox />
    </Fragment>
  );
};
