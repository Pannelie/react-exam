import { useParams } from "react-router-dom";
import useFetchEvents from "../../hooks/useFetchEvents";
import Footer from "../../components/footer/Footer";
import "./singleEventPage.css";
import Button from "../../components/button/Button";

function SingleEventPage() {
  const { id } = useParams();
  const { event, loading, error } = useFetchEvents(id); //hämtar alla. För att säkerställa att jag inte tappar bort mig om sidan uppdateras
  //   const event = useEventStore((state) => state.getEventById(id)); //hämtar specifikt.
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

            <Button text="Lägg i varukorgen" />
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
