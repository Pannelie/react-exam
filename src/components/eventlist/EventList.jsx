import React from "react";
import "./eventList.css";
import useAxios from "../../hooks/useAxios";
import EventItem from "../eventitem/EventItem";

function EventList() {
  const { data, loading, error } = useAxios("https://santosnr6.github.io/Data/events.json");

  if (loading) return <p>Laddar events...</p>;
  if (error) return <p>Fel: {error}</p>;

  // Säkerställ att data är en array innan vi försöker map:a
  if (!data || !Array.isArray(data)) {
    return <p>Ingen data tillgänglig.</p>;
  }

  return (
    <ul className="event__list">
      {data.map((event) => (
        <EventItem key={event.id} id={event.id} name={event.name} price={event.price} where={event.where} when={event.when} />
      ))}
    </ul>
  );
}

export default EventList;
