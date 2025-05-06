import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";
import useCounterStore from "../../stores/useCounterStore";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./counterBox.css";

function CounterBox({ event, header, showMessage }) {
  const location = useLocation();
  const isOnSingleEventPage = location.pathname === `/events/${event.id}`;
  const isOnOrdersPage = location.pathname === `/orders`;

  const sizeModifier = isOnSingleEventPage ? "event-page" : isOnOrdersPage ? "order-page" : "";

  const { counts, cartItems } = useCounterStore();
  const count = counts[event.id] || 0;

  const cartItem = cartItems.find((item) => item.id === event.id);
  const isMatch = cartItem && cartItem.count === count;

  const boxClassName = ["counter__box", sizeModifier && `counter__box--${sizeModifier}`]
    //, isMatch && "counter__box--match"
    .filter(Boolean)
    .join(" ");

  return (
    <div className={boxClassName}>
      {isMatch && <FontAwesomeIcon icon={faCircleCheck} className="counter__match-icon" />}
      {showMessage && (
        <span className="counter__match-message">
          {count} {count === 1 ? "biljett tillagd" : "biljetter tillagda"} i varukorgen!
        </span>
      )}
      <CounterHeader header={header} event={event} count={count} sizeModifier={sizeModifier} />

      <CounterControlls event={event} sizeModifier={sizeModifier} />
    </div>
  );
}

export default CounterBox;
