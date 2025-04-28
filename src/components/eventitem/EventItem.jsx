import React from "react";
import { Link } from "react-router-dom";

function EventItem({ id, name, price, where, when }) {
  const { date, from, to } = when;
  return (
    <li>
      <section className="event__date-box">
        <p>{date}</p>
      </section>
      <h2>{name}</h2>
      <p>{where}</p>
      <p>
        {from} - {to}
      </p>
      <p>{price}</p>
    </li>
  );
}

export default EventItem;
