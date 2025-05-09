import React from "react";
import EventItem from "../eventitem/EventItem";
import "./searchList.css";

function SearchList({ results }) {
  return (
    <ul className="search__list">
      {results.map((event) => (
        <EventItem key={event.id} id={event.id} name={event.name} price={event.price} where={event.where} when={event.when} />
      ))}
    </ul>
  );
}

export default SearchList;
