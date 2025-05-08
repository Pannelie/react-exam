import React from "react";
import useCounterStore from "../../stores/useCounterStore";
import "./clearButton.css";

function ClearButton() {
  const clearCart = useCounterStore((state) => state.clearCart);
  return (
    <button
      className="clear-button"
      onClick={() => {
        clearCart();
      }}
    >
      Rensa varukorgen
    </button>
  );
}

export default ClearButton;
