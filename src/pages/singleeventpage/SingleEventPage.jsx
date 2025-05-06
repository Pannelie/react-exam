import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";

import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import CounterBox from "../../components/counterbox/CounterBox";

import useCounterStore from "../../stores/useCounterStore";
import "./singleEventPage.css";

function SingleEventPage() {
  const { id } = useParams();
  const { event, loading, error } = useFetchEvents(id); //hämtar alla. För att säkerställa att jag inte tappar bort mig om sidan uppdateras

  const count = useCounterStore((state) => state.counts[id] || 1);
  const addTicketToCart = useCounterStore((state) => state.addTicketToCart);

  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    addTicketToCart(event); // Lägg till biljetterna i varukorgen
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  if (loading) return <p className="message">Laddar event...</p>;
  if (error) return <p className="message">Fel: {error}</p>;

  return (
    <main className="single-event-page">
      <h1 className="headingOne">Event</h1>
      <p className="subtitle">You are about to score some tickets to</p>
      <section className="event__info">
        {loading ? (
          <p className="message">Laddar event...</p>
        ) : error ? (
          <p className="message">Fel: {error}</p>
        ) : event ? (
          <>
            <h2 className="headingTwo">{event.name}</h2>
            <p className="event__paragraph-when">
              {event.when.date} kl {event.when.from} - {event.when.to}
            </p>
            <p className="event__paragraph-where">@ {event.where}</p>
            <CounterBox event={event} header={({ event, count }) => `${event.price * count} SEK`} showMessage={showMessage} />
            <Button
              text="Lägg i varukorgen"
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
