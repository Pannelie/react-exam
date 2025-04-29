import { useParams } from "react-router-dom";
import useEventStore from "../../stores/useEventStore";

function EventDetailsPage() {
  const { id } = useParams();
  const event = useEventStore((state) => state.getEventById(id));

  if (!event) {
    return (
      <section className="detailed-event__section">
        <p>Laddar event...</p>
      </section>
    );
  }

  return (
    <section className="detailed-event__section">
      <h1>{event.name}</h1>
      <p>
        {event.when.date} kl {event.when.from} - {event.when.to}
      </p>
      <p>@ {event.where}</p>
    </section>
  );
}

export default EventDetailsPage;
