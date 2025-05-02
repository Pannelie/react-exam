import React from "react";
import "./ticketItem.css";

function TicketItem({ ticket }) {
  return (
    <li className="ticket__list-item">
      <h2 className="ticket__title">{ticket.name}</h2>
      <p className="ticket__paragraph">
        {ticket.when.date} kl {ticket.when.from} - {ticket.when.to}
      </p>
      <p>@ {ticket.where}</p>
      <p>Pris: {ticket.price} SEK</p>
      <p>Antal: {ticket.count}</p>
    </li>
  );
}

export default TicketItem;
