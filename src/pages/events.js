import React, { Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import Events from "../components/Events";

const EventsPage = () => {
  return (
    <Fragment>
      <Jumbotron title="Events" />
      <Events />
    </Fragment>
  );
};
export default EventsPage;
