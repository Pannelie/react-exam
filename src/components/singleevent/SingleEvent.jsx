import React from "react";
import "./singleEvent.css";

function SingleEvent({ event }) {
  return (
    <>
      <h2 className="headingTwo">{event.name}</h2>
      <p className="event__paragraph-when">
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p className="event__paragraph-where">@ {event.where}</p>
    </>
  );
}

export default SingleEvent;
