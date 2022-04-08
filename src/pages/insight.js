import React from "react";
import Jumbotron from "../components/Jumbotron";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import { CountryJumbo } from "../components/Countries";
import Latest from "../components/Latest";

const Index = () => {
  return (
    <div>
      <TopBanner subtitle="INSIGHT" title="Insight" image="insight.jpeg" />
      <Latest />
      <ContactBox />
    </div>
  );
};
export default Index;
