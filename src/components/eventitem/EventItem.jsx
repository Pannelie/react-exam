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
          <h2 className="event__title">{name}</h2>
          <p className="event__where">{where}</p>
          <p className="event__when">
            {from} - {to}
          </p>
          <p className="event__price">{price}</p>{" "}
        </section>
      </li>
    </Link>
  );
}

export default EventItem;
