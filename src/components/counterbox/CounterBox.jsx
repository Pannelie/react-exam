import React from "react";
import "./counterBox.css";

import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";

function CounterBox({ header }) {
  return (
    <div className="counter__container">
      <CounterHeader header={header} />
      <CounterControlls />
    </div>
  );
}

export default CounterBox;
