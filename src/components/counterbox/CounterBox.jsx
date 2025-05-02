import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";
import useCounterStore from "../../stores/useCounterStore";
import { useLocation } from "react-router-dom";

import "./counterBox.css";

function CounterBox({ event, header }) {
  const location = useLocation();
  const isOnSingleEventPage = location.pathname === `/events/${event.id}`;
  const isOnOrdersPage = location.pathname === `/orders`;

  const sizeModifier = isOnSingleEventPage ? "event-page" : isOnOrdersPage ? "order-page" : "";

  const { counts } = useCounterStore();
  const count = counts[event.id] || 0;

  return (
    <div className={`counter__box ${sizeModifier && `counter__box--${sizeModifier}`}`}>
      <CounterHeader header={header} event={event} count={count} sizeModifier={sizeModifier} />
      <CounterControlls event={event} sizeModifier={sizeModifier} />
    </div>
  );
}

export default CounterBox;
