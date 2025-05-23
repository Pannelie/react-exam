import React from "react";
import { formatDate } from "../../utils/utils";
import Barcode from "react-barcode";
import "./ticketItem.css";

function TicketItem({ ticket }) {
  console.log(`Välkommen till ${ticket.name} plats ${ticket.seat} den ${ticket.when.date}`);
  const barCodeId = `#${ticket.ticketId}` || "Ogiltig biljett";
  return (
    <li className="ticket__list-item">
      <section className="ticket__section ticket__section--title">
        <p className="ticket__category ticket__category--padding-left">WHAT</p>
        <h2 className="ticket__title">{ticket.name}</h2>
      </section>
      <section className="ticket__section">
        <p className="ticket__category ticket__category--padding-left">WHERE</p>
        <p className="ticket__paragraph-where">{ticket.where}</p>
      </section>
      <section className="ticket__time-section">
        <section className="ticket__time-box">
          <p className="ticket__category">WHEN</p>
          <p className="ticket__paragraph-when">{formatDate(ticket.when.date)}</p>
        </section>
        <section className="ticket__time-box">
          <p className="ticket__category">FROM</p>
          <p className="ticket__paragraph-when">{ticket.when.from}</p>
        </section>{" "}
        <section className="ticket__time-box">
          <p className="ticket__category">TO</p>
          <p className="ticket__paragraph-when">{ticket.when.to}</p>
        </section>
      </section>
      <section className="ticket__section">
        <p className="ticket__category ticket__category--margin ticket__category--padding-left">INFO</p>
        <p className="ticket__seat">{ticket.seat}</p>
      </section>
      <section className="ticket__section">
        <Barcode value={barCodeId} width={2} height={50} displayValue={true} className="ticket__barcode" />
      </section>
    </li>
  );
}

export default TicketItem;
