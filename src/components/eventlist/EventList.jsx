import React from "react";
import "./eventList.css";
import useAxios from "../../hooks/useAxios";

function EventList() {
  const { data, loading, error } = useAxios("https://santosnr6.github.io/Data/events.json");

  return <ul></ul>;
}

export default EventList;
