import React, { Fragment } from "react";
import { CountryJumbo } from "../../components/Countries/index";
import DoubleColumn from "../../components/Home/DoubleColumn";
import TopBanner from "../../components/Home/TopBanner";
import ContactBox from "../../components/Home/ContactBox";
import VisaImage from "../../components/Home/VisaImage";

export default () => {
  return (
    <Fragment>
      <TopBanner subtitle="VISAS" title="Visas" />
      <DoubleColumn
        heading="United States of America"
        noContactButton
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="United Kingdom"
        noContactButton
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Canada"
        noContactButton
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Australia"
        noContactButton
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Newzealand"
        noContactButton
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="EU Shengen"
        noContactButton
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <ContactBox />
    </Fragment>
  );
};
