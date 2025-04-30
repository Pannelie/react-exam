import React from "react";
import "./counterHeader.css";
import useCounterStore from "../../stores/useCounterStore";

function CounterHeader({ header }) {
  const count = useCounterStore((state) => state.count);

  // Kollar om header är en funktion och om count är ett tal
  const totalPrice = typeof header === "function" ? header(count) : 0;

  return <div className="counter__header">{isNaN(totalPrice) ? "Felaktigt pris" : `${totalPrice} SEK`}</div>;
}

export default CounterHeader;
