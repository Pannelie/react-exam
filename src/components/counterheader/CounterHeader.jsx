import React from "react";
import "./counterHeader.css";
import useCounterStore from "../../stores/useCounterStore";

function CounterHeader({ header }) {
  const count = useCounterStore((state) => state.count);

  // Kollar om header är en funktion och om count är ett tal
  const totalPrice = typeof header === "function" ? header(count) : 0;

  return <div className="counter__header">{isNaN(totalPrice) ? "Felaktigt pris" : totalPrice}</div>;
}

export default CounterHeader;

//   return <div className="counter__header">{typeof header === "function" ? header(count) : header}</div>;
// }

// export default CounterHeader;
