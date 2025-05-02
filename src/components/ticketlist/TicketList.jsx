import React from "react";
import "./ticketList.css";
import useCounterStore from "../../stores/useCounterStore";
import TicketItem from "../ticketitem/TicketItem";

function TicketList() {
  const purchasedTickets = useCounterStore((state) => state.purchasedTickets);
  return (
    <ul className="ticket__list">
      {purchasedTickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  );
}

export default TicketList;
