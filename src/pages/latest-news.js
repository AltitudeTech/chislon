import React from "react";
import Jumbotron from "../components/Jumbotron";
import { CountryJumbo } from "../components/Countries";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";
import Latest from "../components/Latest";

const Index = () => {
  return (
    <div>
      {/* <Jumbotron title="LATEST NEWS" /> */}
      <TopBanner subtitle="LATEST NEWS" title="Latest News" />
      {/* <CountryJumbo title="LATEST NEWS" hasExtension country="news.jpeg" /> */}
      <Latest />
      <ContactBox />
      <Latest />
    </div>
  );
};
export default Index;
