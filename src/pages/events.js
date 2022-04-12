import React, { Fragment } from "react";
import Events from "../components/Events";
import TopBanner from "../components/Home/TopBanner";
import ContactBox from "../components/Home/ContactBox";

const EventsPage = () => {
  return (
    <Fragment>
      <TopBanner subtitle="EVENTS" title="Events" image="services.jpeg" />
      <Events />
      <ContactBox />
    </Fragment>
  );
};
export default EventsPage;
