import { useState } from "react";
import "./counterControlls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import useCounterStore from "../../stores/useCounterStore";

function CounterControlls({ event, sizeModifier }) {
  const { counts, setTicketCount } = useCounterStore();
  const count = counts[event.id] || 0;

  // Hantera klick på minus-knappen
  const handleDecrease = () => {
    if (count > 0) {
      console.log(`Minskade biljettantal till ${count - 1}`);
      setTicketCount(event.id, count - 1); // Ta bort en biljett med det specifika event-id:t
    }
  };

  // Hantera klick på plus-knappen
  const handleIncrease = () => {
    console.log(`Ökade biljettantal till ${count + 1}`);
    setTicketCount(event.id, count + 1); // Lägg till en biljett med hela event-objektet
  };

  return (
    <div className="counter__controlls">
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleDecrease}>
        <FontAwesomeIcon icon={faCircleMinus} />
      </div>
      <div className="counter__number">{count}</div>
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleIncrease}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
}

export default CounterControlls;
