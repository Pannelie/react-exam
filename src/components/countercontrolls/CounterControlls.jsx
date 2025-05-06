import { useState, useEffect } from "react";
import "./counterControlls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import useCounterStore from "../../stores/useCounterStore";

function CounterControlls({ event, sizeModifier, isOrderPage = false, onCountChange }) {
  const { counts, setTicketCount, increaseCount, decreaseCount, addTicketToCart } = useCounterStore();
  const [localCount, setLocalCount] = useState(counts[event.id] || 0);
  const currentCount = counts[event.id] || 0;
  // const count = counts[event.id] || 0;

  // Hantera klick på minus-knappen
  const handleDecrease = () => {
    if (isOrderPage) {
      if (currentCount > 0) {
        decreaseCount(event.id);
        onImmediateChange?.(event.id, currentCount - 1);
      }
    } else {
      if (localCount > 0) {
        const newCount = localCount - 1;
        setLocalCount(newCount);
        onCountChange?.(event.id, newCount);
      }
    }
  };
  // if (count > 0) {
  // console.log(`Minskade biljettantal till ${count - 1}`);
  // setTicketCount(event.id, count - 1); // Ta bort en biljett med det specifika event-id:t

  // Hantera klick på plus-knappen
  // const handleIncrease = () => {
  //   console.log(`Ökade biljettantal till ${count + 1}`);
  //   setTicketCount(event.id, count + 1); };// Lägg till en biljett med hela event-objektet
  const handleIncrease = () => {
    if (isOrderPage) {
      increaseCount(event.id);
      onImmediateChange?.(event.id, currentCount + 1); // valfritt callback
    } else {
      const newCount = localCount + 1;
      setLocalCount(newCount);
      onCountChange?.(event.id, newCount);
    }
  };

  const handleConfirm = () => {
    if (isOrderPage) return; // inget att göra, redan uppdaterat i store
    setTicketCount(event.id, localCount);
    addTicketToCart(event);
  };

  useEffect(() => {
    if (!isOrderPage) {
      setLocalCount(currentCount);
    }
  }, [event.id, currentCount, isOrderPage]);

  return (
    <div className="counter__controlls">
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleDecrease}>
        <FontAwesomeIcon icon={faCircleMinus} />
      </div>
      <div className="counter__number">{isOrderPage ? currentCount : localCount}</div>
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleIncrease}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
}

export default CounterControlls;
