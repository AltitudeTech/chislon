import React from "react";
import Jumbotron from "../components/Jumbotron";
import { CountryJumbo } from "../components/Countries";
import Latest from "../components/Latest";

const Index = () => {
  return (
    <div>
      {/* <Jumbotron title="LATEST NEWS" /> */}
      <CountryJumbo title="INSIGHT" hasExtension country="news.jpeg" />
      <Latest />
    </div>
  );
};
export default Index;
