import React from "react";
import "./orderPage.css";
import Footer from "../../components/footer/Footer";
import CounterBox from "../../components/counterbox/CounterBox";
import useCounterStore from "../../stores/useCounterStore";
import EventHeader from "../../components/button/eventheader/EventHeader";
import Button from "../../components/button/Button";

function orderPage() {
  const cartItems = useCounterStore((state) => state.cartItems);
  const totalPrice = useCounterStore((state) => state.totalPrice());

  return (
    <>
      <main className="order-page">
        <h1 className="headingOne">Orders</h1>
        <section className="order__section">
          {cartItems.length === 0 ? (
            <p className="message">Varukorgen är tom</p>
          ) : (
            cartItems.map((event) => <CounterBox key={event.id} event={event} header={<EventHeader event={event} />} />)
          )}
        </section>
        <section className="order__summary">
          <p className="message">Totalt värde på order</p>
          <p className="order__price">{totalPrice} sek</p>
        </section>
        <Button text="Lägg order" />
      </main>
      <Footer />
    </>
  );
}

export default orderPage;
