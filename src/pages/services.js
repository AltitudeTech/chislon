import React, { Fragment } from "react";
import ClientSection from "../components/Home/ClientSection";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import DoubleColumn from "../components/Home/DoubleColumn";
import VisaImage from "../components/Home/VisaImage";

const Index = () => {
  return (
    <Fragment>
      <TopBanner subtitle="SERVICES" title="Services" image="service.jpeg" />
      {/* <ClientSection /> */}
      <DoubleColumn
        heading="Private Investor"
        secondColumn={<VisaImage image="client/private.jpeg" />}
      />
      <DoubleColumn
        heading="Corporate Investor"
        firstColumn={<VisaImage image="client/corporate.jpeg" />}
      />
      <DoubleColumn
        heading="Government Agencies"
        secondColumn={<VisaImage image="client/government.jpeg" />}
      />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
