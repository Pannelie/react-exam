import { useState } from "react";
import useFetchEvents from "../../hooks/useFetchEvents";
import useSearchEvents from "../../hooks/useSearchEvents";
import SearchList from "../searchlist/SearchList";
import "./searchBar.css";

function SearchBar({ query, setQuery }) {
  return (
    <>
      <input type="text" placeholder="Sök event..." className="search-bar" value={query} onChange={(e) => setQuery(e.target.value)} />
    </>
  );
}

export default SearchBar;
