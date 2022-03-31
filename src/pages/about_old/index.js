import React, { Fragment } from "react";
import AboutJumbotron from "../../components/About/Jumbotron";
import Vision from "../../components/About/Vision";
import Download from "../../components/About/Download";
import Partners from "../../components/About/Partners";
import Careers from "../../components/About/Careers";
import Study from "../../components/About/Study";

const About = () => {
  return (
    <Fragment>
      <AboutJumbotron />
      <Vision />
      <Download />
      <Partners />
      <Careers />
      <Study />
    </Fragment>
  );
};
export default About;
