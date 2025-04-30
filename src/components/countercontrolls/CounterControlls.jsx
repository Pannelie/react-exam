import { useState } from "react";
import "./counterControlls.css";

import useCounterStore from "../../stores/useCounterStore";

function CounterControlls({ event }) {
  const { counts, addTicket, removeTicket } = useCounterStore();
  const count = counts[event.id] || 0;

  const handleDecrease = () => {
    if (count > 0) {
      removeTicket(event.id); // Ta bort en biljett med det specifika event-id:t
    }
  };

  // Hantera klick på plus-knappen
  const handleIncrease = () => {
    addTicket(event); // Lägg till en biljett med hela event-objektet
  };

  return (
    <div className="counter__controlls">
      <div className="counter__controll" onClick={handleDecrease}>
        -
      </div>
      <div className="counter__number">{count}</div>
      <div className="counter__controll" onClick={handleIncrease}>
        +
      </div>
    </div>
  );
}

export default CounterControlls;
