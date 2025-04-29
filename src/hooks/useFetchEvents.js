import { useEffect } from "react";
import axios from "axios";
import useEventStore from "../stores/useEventStore";

const useFetchEvents = () => {
  const setEvents = useEventStore((state) => state.setEvents);
  const events = useEventStore((state) => state.events);

  useEffect(() => {
    if (events.length > 0) return;

    const controller = new AbortController();
    const url = "https://santosnr6.github.io/Data/events.json";

    axios
      .get(url, { signal: controller.signal })
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          console.error(`Error fetching events:`, error);
        }
      });

    return () => controller.abort();
  }, [events.length, setEvents]);

  return { events };
};

export default useFetchEvents;
