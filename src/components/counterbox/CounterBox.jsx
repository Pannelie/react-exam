import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";
import useCounterStore from "../../stores/useCounterStore";

import "./counterBox.css";

function CounterBox({ event }) {
  const { counts } = useCounterStore();
  console.log(event.id);
  const count = counts[event.id] || 0;

  return (
    <div className="counter__container">
      <CounterHeader header={() => event.price * count} />
      <CounterControlls event={event} />
    </div>
  );
}

export default CounterBox;
