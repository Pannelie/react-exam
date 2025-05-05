import React from "react";
import "./ticketItem.css";

function TicketItem({ ticket }) {
  return (
    <li className="ticket__list-item">
      <p className="ticket__category ticket__category--padding">WHAT</p>
      <h2 className="ticket__title">{ticket.name}</h2>
      <hr className="ticket__stroke" />
      <p className="ticket__category ticket__category--padding">WHERE</p>
      <p className="ticket__paragraph-where">{ticket.where}</p>
      <hr className="ticket__stroke" />
      <section className="ticket__time">
        <p className="ticket__category">WHEN</p>
        <p className="ticket__paragraph">{ticket.when.date}</p>
      </section>
      <section className="ticket__time">
        <p className="ticket__category">FROM</p>
        <p className="ticket__paragraph">{ticket.when.from}</p>
      </section>{" "}
      <section className="ticket__time">
        <p className="ticket__category">TO</p>
        <p className="ticket__paragraph">{ticket.when.to}</p>
      </section>
      <p>Pris: {ticket.price} SEK</p>
      <p>Antal: {ticket.count}</p>
    </li>
  );
}

export default TicketItem;
