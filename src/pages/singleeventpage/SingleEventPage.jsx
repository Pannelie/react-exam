import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";

import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import CounterBox from "../../components/counterbox/CounterBox";
import SingleEvent from "../../components/singleevent/SingleEvent";

import useCounterStore from "../../stores/useCounterStore";
import "./singleEventPage.css";

function SingleEventPage() {
  const { id } = useParams();
  const { event, loading, error } = useFetchEvents(id); //hämtar alla. För att säkerställa att jag inte tappar bort mig om sidan uppdateras

  const { increaseCount, decreaseCount, addTicketToCart, counts, cartItems } = useCounterStore();
  const count = counts[id] || 0;
  const cartItem = cartItems.find((item) => item.id === id);
  const cartCount = cartItem?.count ?? 0;

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addTicketToCart(event);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  const ariaLabelText =
    count === 0
      ? "Välj antal biljetter"
      : cartCount === count
      ? `Du har just nu ${cartCount} biljett${cartCount !== 1 ? "er" : ""} till ${event.name} i varukorgen`
      : `Du har just nu ${cartCount} biljett${cartCount !== 1 ? "er" : ""} till ${event.name}. Klicka för att ändra till ${count} biljett${
          count !== 1 ? "er" : ""
        }`;

  return (
    <main className="page">
      <h1 className="headingOne">Event</h1>
      <h2 className="subtitle">You are about to score some tickets to</h2>
      <section className="event__info">
        {loading ? (
          <p className="message">Laddar event...</p>
        ) : error ? (
          <p className="message">Fel: {error}</p>
        ) : event ? (
          <>
            <SingleEvent event={event} />

            <CounterBox
              event={event}
              header={({ event, count }) => `${event.price * count} SEK`}
              showMessage={showMessage}
              onIncrease={() => increaseCount(id)}
              onDecrease={() => decreaseCount(id)}
            />
            <Button
              text={cartItem ? "Uppdatera varukorg" : "Lägg till i varukorgen"}
              aria-label={ariaLabelText}
              className="main-btn"
              onClick={() => {
                console.log(`Valde ${count} biljett/-er till ${event.name}`);
                handleAddToCart();
              }}
            />
          </>
        ) : (
          <p className="message">Eventet hittades inte.</p>
        )}
      </section>
      <Footer />
    </main>
  );
}

export default SingleEventPage;

{
  /*     
----------Kanske aningen tydligare, men längre. Vad är bäst?-------------


  {loading && <p>Laddar event...</p>}
      {error && <p>Fel: {error}</p>}
      {!loading && !error && event && (
        <>
          <h1>{event.name}</h1>
          <p>
            {event.when.date} kl {event.when.from} - {event.when.to}
          </p>
          <p>@ {event.where}</p>
        </>
      )}
      {!loading && !error && !event && <p>Eventet hittades inte.</p>} 
   */
}
