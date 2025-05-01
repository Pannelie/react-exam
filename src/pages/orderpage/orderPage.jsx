import React from "react";
import "./orderPage.css";
import Footer from "../../components/footer/Footer";
import CounterBox from "../../components/counterbox/CounterBox";
import useCounterStore from "../../stores/useCounterStore";
import EventHeader from "../../components/button/eventheader/EventHeader";

function orderPage() {
  const cartItems = useCounterStore((state) => state.cartItems);
  const totalPrice = useCounterStore((state) => state.totalPrice);

  return (
    <>
      <main className="order-page">
        <h1 className="headingOne">Orders</h1>
        {cartItems.length === 0 ? (
          <p className="message">Varukorgen är tom</p>
        ) : (
          cartItems.map((event) => <CounterBox key={event.id} event={event} header={<EventHeader event={event} />} />)
        )}
        <section className="order-summary">
          <p>Totalt värde på order</p>
          <p>{totalPrice}sek</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default orderPage;
