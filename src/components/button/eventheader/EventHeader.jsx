import React from "react";
import "./eventHeader.css";

function EventHeader({ event }) {
  return (
    <>
      <h2 className="counter__header-name">{event.name}</h2>
      <p className="counter__header-time">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
    </>
  );
}

export default EventHeader;
