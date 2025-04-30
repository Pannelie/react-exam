import { useState } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";
import useSearchEvents from "../../hooks/useSearchEvents";
import SearchBar from "../../components/searchbar/SearchBar";

function SearchPage() {
  const [query, setQuery] = useState(``);
  const { events, loading, error } = useFetchEvents();
  const results = useSearchEvents(query);

  return (
    <>
      <SearchBar />
    </>
  );
}

export default SearchPage;
