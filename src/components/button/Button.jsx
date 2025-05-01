import React from "react";
import "./button.css";
import useCounterStore from "../../stores/useCounterStore";

function Button({ text, onClick }) {
  return (
    <button className="button button--bottom" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
