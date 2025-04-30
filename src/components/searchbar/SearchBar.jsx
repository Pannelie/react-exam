import { useState } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";
import useSearchEvents from "../../hooks/useSearchEvents";
import SearchList from "../searchlist/SearchList";
import "./searchBar.css";

function SearchBar() {
  const [query, setQuery] = useState(``);
  const { events, loading, error } = useFetchEvents();
  const results = useSearchEvents(query);

  return (
    <>
      <input type="text" placeholder="Sök event..." className="search-bar" value={query} onChange={(e) => setQuery(e.target.value)} />

      {loading && <p>Laddar events...</p>}
      {error && <p>Något gick fel: {error}</p>}

      {query && results.length === 0 && <p>Inga träffar</p>}

      <SearchList results={results} />
    </>
  );
}

export default SearchBar;
