import React from "react";
import "./index.css";

export default function Index() {
  return (
    <div className="container container-hero">
      <div className="row row-hero my-5">
        <div className="col md-5 col-hero-title">
          <h1>Upcoming Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dicta
            vero rem fuga corporis. Dicta fugit ducimus, commodi reprehenderit
            incidunt voluptas ratione illo ipsam corporis inventore! Ratione
            corporis itaque reiciendis?
          </p>
        </div>
        <div className="col-md-6 offset-md-1 hero-img-container">
          <img
            src="/static/images/events/eventsImage.jpg"
            className=""
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
