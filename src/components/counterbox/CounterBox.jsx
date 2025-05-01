import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";
import useCounterStore from "../../stores/useCounterStore";

import "./counterBox.css";

function CounterBox({ event, header }) {
  const { counts } = useCounterStore();
  const count = counts[event.id] || 0;

  return (
    <div className="counter__box">
      <CounterHeader header={header} event={event} count={count} />
      <CounterControlls event={event} />
    </div>
  );
}

export default CounterBox;
