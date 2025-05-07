import React from "react";
import "./orderPage.css";
import Footer from "../../components/footer/Footer";
import CounterBox from "../../components/counterbox/CounterBox";
import useCounterStore from "../../stores/useCounterStore";
import EventHeader from "../../components/eventheader/EventHeader";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

function orderPage() {
  const navigate = useNavigate();
  const { cartItems, increaseCartItem, decreaseCartItem, completePurchase, totalPrice } = useCounterStore((state) => state);
  return (
    <>
      <main className="order-page">
        <h1 className="headingOne">Orders</h1>
        <section className="order__section">
          {cartItems.length === 0 ? (
            <p className="message">Varukorgen är tom</p>
          ) : (
            cartItems.map((event) => (
              <CounterBox
                key={event.id}
                event={event}
                header={<EventHeader event={event} showMessage={false} />}
                onIncrease={() => increaseCartItem(event.id)}
                onDecrease={() => decreaseCartItem(event.id)}
              />
            ))
          )}
        </section>
        {cartItems.length > 0 && (
          <>
            <section className="order__summary">
              <p className="message">Totalt värde på order</p>
              <p className="order__price">{totalPrice()} sek</p>
            </section>
            <Button
              text="Lägg order"
              onClick={() => {
                completePurchase();
                navigate("/tickets");
              }}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default orderPage;
