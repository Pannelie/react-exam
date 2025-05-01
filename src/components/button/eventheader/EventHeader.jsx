import React from "react";
import "./counterHeader.css";

function EventHeader({ event }) {
  return (
    <div className="counter__header">
      <span className="counter__header-name">{event.name}</span>
      <span className="counter__header-time">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </span>
    </div>
  );
}

export default EventHeader;
