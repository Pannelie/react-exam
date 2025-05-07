import { useState, useEffect } from "react";
import "./counterControlls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import useCounterStore from "../../stores/useCounterStore";

function CounterControlls({ event, sizeModifier, isOrderPage = false, onIncrease, onDecrease }) {
  const { counts, cartItems, increaseCartItem, decreaseCartItem, increaseCount, decreaseCount } = useCounterStore();

  const cartItem = cartItems.find((item) => item.id === event.id);
  const cartCount = cartItem?.count || 0;
  const count = counts[event.id] || 0;

  const displayCount = isOrderPage ? cartCount : count;

  const handleIncrease = () => {
    if (isOrderPage) {
      increaseCartItem(event.id);
    } else {
      increaseCount(event.id);
    }
  };

  const handleDecrease = () => {
    if (isOrderPage) {
      decreaseCartItem(event.id);
    } else {
      decreaseCount(event.id);
    }
  };

  return (
    <div className="counter__controlls">
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleDecrease}>
        <FontAwesomeIcon icon={faCircleMinus} />
      </div>
      <div className="counter__number">{displayCount}</div>
      <div className={`counter__controll counter__controll--${sizeModifier}`} onClick={handleIncrease}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </div>
    </div>
  );
}

export default CounterControlls;
