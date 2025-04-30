import useEventStore from "../stores/useEventStore";
import { useState, useEffect } from "react";

const useSearchEvents = (query) => {
  const allEvents = useEventStore((state) => state.events);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!query) {
      setFiltered([]);
      return;
    }

    const results = allEvents.filter((event) => event.name.toLowerCase().includes(query.toLowerCase()));

    setFiltered(results);
  }, [query, allEvents]);

  return filtered;
};

export default useSearchEvents;
