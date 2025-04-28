import React from "react";
import "./eventItem.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

function EventItem({ id, name, price, where, when }) {
  const { date, from, to } = when;
  return (
    <Link to={`/event/${id}`} className="event__link">
      <li className="event__list-item">
        <section className="event__date-box">{formatDate(date)}</section>
        <section className="event__info-box">
          <h2>{name}</h2>
          <p>{where}</p>
          <p>
            {from} - {to}
          </p>
        </section>
        <p className="event__price">{price}</p>
      </li>
    </Link>
  );
}

export default EventItem;
