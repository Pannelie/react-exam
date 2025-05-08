import { useState } from "react";
import "./eventsPage.css";

import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";
import SearchBar from "../../components/searchbar/SearchBar";
import SearchList from "../../components/searchlist/SearchList";

import useSearchEvents from "../../hooks/useSearchEvents";
import useFetchEvents from "../../hooks/useFetchEvents";
import Button from "../../components/button/Button";

function EventsPage() {
  const [query, setQuery] = useState(``);
  const { events, loading, error } = useFetchEvents();
  const results = useSearchEvents(query);

  return (
    <>
      <main className="event-page">
        <h1 className="headingOne">Events</h1>
        <SearchBar query={query} setQuery={setQuery} />

        {loading && <p className="message">Laddar events...</p>}
        {error && <p className="message">Något gick fel: {error}</p>}

        {query.trim() ? (
          results.length > 0 ? (
            <SearchList results={results} />
          ) : (
            <p className="message">Inga träffar</p>
          )
        ) : (
          <EventList events={events} />
        )}

        <Button text="Din varukorg" className="main-btn" to="/orders" />
      </main>
      <Footer />
    </>
  );
}

export default EventsPage;
