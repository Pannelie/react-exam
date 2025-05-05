import React from "react";
import "./ticketItem.css";
import { formatDate } from "../../utils/utils";
import Barcode from "react-barcode";

function TicketItem({ ticket }) {
  console.log(`här är id`, ticket.ticketID);
  return (
    <li className="ticket__list-item">
      <p className="ticket__category ticket__category--margin ticket__category--padding-left">WHAT</p>
      <h2 className="ticket__title">{ticket.name}</h2>
      <hr className="ticket__stroke" />
      <p className="ticket__category ticket__category--margin ticket__category--padding-left">WHERE</p>
      <p className="ticket__paragraph-where">{ticket.where}</p>
      <hr className="ticket__stroke" />
      <section className="ticket__time">
        <p className="ticket__category">WHEN</p>
        <p className="ticket__paragraph-when">{formatDate(ticket.when.date)}</p>
      </section>
      <section className="ticket__time">
        <p className="ticket__category">FROM</p>
        <p className="ticket__paragraph-when">{ticket.when.from}</p>
      </section>{" "}
      <section className="ticket__time">
        <p className="ticket__category">TO</p>
        <p className="ticket__paragraph-when">{ticket.when.to}</p>
      </section>
      <p className="ticket__category ticket__category--margin ticket__category--padding-left">INFO</p>
      <p className="ticket__seat">{ticket.seat}</p>
      <Barcode value={ticket.ticketId} width={2} height={50} displayValue={false} className="ticket__code" />
      <p className="ticket__barcode-label">#{ticket.ticketId || "Kunde inte läsa in barcode."}</p>
    </li>
  );
}

export default TicketItem;
