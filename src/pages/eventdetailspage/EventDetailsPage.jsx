import { useParams } from "react-router-dom";
import useFetchEvents from "../../hooks/useFetchEvents";

function EventDetailsPage() {
  const { id } = useParams();
  const { event, loading, error } = useFetchEvents(id); //hämtar alla. För att säkerställa att jag inte tappar bort mig om sidan uppdateras
  //   const event = useEventStore((state) => state.getEventById(id)); //hämtar specifikt.
  if (loading) return <p>Laddar event...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <section className="detailed-event__section">
      <h1>Event</h1>
      <p>You are about to score som tickets to</p>
      {loading ? (
        <p>Laddar event...</p>
      ) : error ? (
        <p>Fel: {error}</p>
      ) : event ? (
        <>
          <h1>{event.name}</h1>
          <p>
            {event.when.date} kl {event.when.from} - {event.when.to}
          </p>
          <p>@ {event.where}</p>

          <button>Lägg i varukorgen</button>
        </>
      ) : (
        <p>Eventet hittades inte.</p>
      )}
    </section>
  );
}

export default EventDetailsPage;

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
