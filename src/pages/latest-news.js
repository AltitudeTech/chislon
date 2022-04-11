import React from "react";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import Latest from "../components/Latest";

const Index = () => {
  return (
    <div>
      <TopBanner
        subtitle="LATEST NEWS"
        title="Latest News"
        image="insight.jpeg"
      />
      <Latest />
      <ContactBox />
      <Latest />
    </div>
  );
};
export default Index;
