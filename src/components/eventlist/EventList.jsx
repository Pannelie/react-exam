import EventItem from "../eventitem/EventItem";
import { useRef, useState, useEffect } from "react";
import "./eventList.css";

function EventList({ events }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef(null);
  let scrollTimeout = useRef(null);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    return () => clearTimeout(scrollTimeout.current); // städa vid unmount
  }, []);

  if (!events || !Array.isArray(events)) return <p>Ingen data tillgänglig</p>;

  return (
    <ul className={`event__list ${isScrolling ? "scrolling" : ""}`} onScroll={handleScroll} ref={scrollRef}>
      {events.map((event) => (
        <EventItem key={event.id} id={event.id} name={event.name} price={event.price} where={event.where} when={event.when} />
      ))}
    </ul>
  );
}

export default EventList;
