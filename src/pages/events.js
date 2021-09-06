import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import { CountryJumbo } from "../components/Countries";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <Fragment>
      {/* <Jumbotron title="Events" /> */}
      <CountryJumbo title="EVENTS" hasExtension country="events.jpg" />
      <Events />
    </Fragment>
  );
};
export default EventsPage;
