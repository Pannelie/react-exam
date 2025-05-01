import React from "react";
import "./eventHeader.css";

function EventHeader({ event }) {
  return (
    <>
      <p className="counter__header-name">{event.name}</p>
      <p className="counter__header-time">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
    </>
  );
}

export default EventHeader;
