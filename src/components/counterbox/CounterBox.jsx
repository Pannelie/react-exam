import useCounterStore from "../../stores/useCounterStore";
import { useLocation } from "react-router-dom";

import CounterHeader from "../counterheader/CounterHeader";
import CounterControlls from "../countercontrolls/CounterControlls";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import "./counterBox.css";

function CounterBox({ event, header, showMessage, onIncrease, onDecrease }) {
  const location = useLocation();
  const isSingleEventPage = location.pathname === `/events/${event.id}`;
  const isOrdersPage = location.pathname === `/orders`;

  const sizeModifier = isSingleEventPage ? "event-page" : isOrdersPage ? "order-page" : "";

  const { counts, cartItems } = useCounterStore();
  const count = counts[event.id] || 0;

  const cartItem = cartItems.find((item) => item.id === event.id);
  // const isMatch = cartItem && cartItem.count === count;

  const boxClassName = ["counter__box", sizeModifier && `counter__box--${sizeModifier}`]
    //, isMatch && "counter__box--match"
    .filter(Boolean)
    .join(" ");

  const handleAddToCart = () => {
    if (isOrdersPage) {
      // Lägg till biljetterna direkt till purchased om vi är på ordersidan
      addTicketToCart(event, true);
    } else {
      // Annars lägg till biljetterna till varukorgen (med bekräftelse på SingleEventPage)
      addTicketToCart(event);
    }
  };

  return (
    <div className={boxClassName}>
      {/* {isMatch && <FontAwesomeIcon icon={faCircleCheck} className="counter__match-icon" />} */}

      <CounterHeader header={header} event={event} count={count} sizeModifier={sizeModifier} />

      <CounterControlls
        event={event}
        sizeModifier={sizeModifier}
        isOrderPage={isOrdersPage}
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
      {showMessage && (
        <span className="counter__match-message">
          {cartItem ? (
            <>
              {cartItem.count} {cartItem.count === 1 ? "biljett tillagd" : "biljetter tillagda"} i varukorgen!
            </>
          ) : (
            "Du tog bort dina biljetter från varukorgen"
          )}
        </span>
      )}
    </div>
  );
}

export default CounterBox;
