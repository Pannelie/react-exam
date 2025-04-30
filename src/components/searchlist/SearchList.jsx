import React from "react";
import SearchItem from "../searchitem/SearchItem";

function SearchList({ results }) {
  return (
    <ul>
      {results.map((event) => (
        <SearchItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default SearchList;
