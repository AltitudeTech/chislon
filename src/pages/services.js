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
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Corporate Investor"
        firstColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <DoubleColumn
        heading="Government Agencies"
        secondColumn={<VisaImage image="incorporation.jpeg" />}
      />
      <ContactBox />
    </Fragment>
  );
};
export default Index;
