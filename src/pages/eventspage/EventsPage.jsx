import { useState } from "react";
import "./eventsPage.css";

import Footer from "../../components/footer/Footer";
import EventList from "../../components/eventlist/EventList";
import SearchBar from "../../components/searchbar/SearchBar";
import SearchList from "../../components/searchlist/SearchList";

import useSearchEvents from "../../hooks/useSearchEvents";
import useFetchEvents from "../../hooks/useFetchEvents";

function EventsPage() {
  const [query, setQuery] = useState(``);
  const { events, loading, error } = useFetchEvents();
  const results = useSearchEvents(query);

  const showSearchResults = query.trim() !== "" && results.length > 0;

  return (
    <>
      <main className="event-page">
        <h1 className="headingOne">Events</h1>
        <SearchBar query={query} setQuery={setQuery} />

        {loading && <p className="message">Laddar events...</p>}
        {error && <p className="message">Något gick fel: {error}</p>}

        {query.trim() && results.length === 0 && <p className="message">Inga träffar</p>}

        {query.trim() ? results.length > 0 ? <SearchList results={results} /> : null : <EventList />}
      </main>
      <Footer />
    </>
  );
}

export default EventsPage;
