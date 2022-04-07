import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import { CountryJumbo } from "../components/Countries";
import Events from "../components/Events";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

const EventsPage = () => {
  return (
    <Fragment>
      {/* <Jumbotron title="Events" /> */}
      {/* <CountryJumbo title="EVENTS" hasExtension country="events.jpg" /> */}
      <TopBanner subtitle="EVENTS" title="Events" />
      <Events />
      <ContactBox />
    </Fragment>
  );
};
export default EventsPage;
