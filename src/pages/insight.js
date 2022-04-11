import React from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
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
