import "./eventList.css";
import useFetchEvents from "../../hooks/useFetchEvents";
import EventItem from "../eventitem/EventItem";

function EventList({ events }) {
  if (!events || !Array.isArray(events)) return <p>Ingen data tillgänglig</p>;

  return (
    <ul className="event__list">
      {events.map((event) => (
        <EventItem key={event.id} id={event.id} name={event.name} price={event.price} where={event.where} when={event.when} />
      ))}
    </ul>
  );
}

export default EventList;
