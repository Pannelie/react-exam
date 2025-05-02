import { useEffect, useState } from "react";
import axios from "axios";
import useEventStore from "../stores/useEventStore";

const useFetchEvents = (id = null) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const events = useEventStore((state) => state.events);
  const setEvents = useEventStore((state) => state.setEvents);
  const getEventById = useEventStore((state) => state.getEventById);
  const event = id ? getEventById(id) : null;

  useEffect(() => {
    const controller = new AbortController();
    const url = "https://santosnr6.github.io/Data/events.json";

    // När vi är på eventspage.jsx, hämta alla events om de inte finns
    if (!id && events.length === 0 && !loading) {
      setLoading(true);
      axios
        .get(url, { signal: controller.signal })
        .then((response) => {
          if (Array.isArray(response.data.events)) {
            setEvents(response.data.events); // Uppdatera hela eventlistan
          }
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            setError(error.message || "Något gick fel vid hämtning av events");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    // När vi är på eventdetailedpage.jsx, hämta det specifika eventet
    if (id && !event) {
      setLoading(true);
      axios
        .get(url, { signal: controller.signal })
        .then((response) => {
          if (Array.isArray(response.data.events)) {
            const fetchedEvent = response.data.events.find((e) => String(e.id) === String(id));
            if (fetchedEvent) {
              const alreadyExists = events.some((e) => e.id === fetchedEvent.id);
              if (!alreadyExists) {
                setEvents([...events, fetchedEvent]); // Lägg till eventet om det inte finns i store
              }
            }
          }
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            setError(error.message || "Något gick fel vid hämtning av event");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    return () => controller.abort();
  }, [id, event, events, setEvents]);

  return { events, event, loading, error };
};

export default useFetchEvents;

// // hooks/useFetchEvents.js
// import { useEffect, useState } from "react";
// import axios from "axios";
// import useEventStore from "../stores/useEventStore";

// const useFetchEvents = (id = null) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const events = useEventStore((state) => state.events);
//   const setEvents = useEventStore((state) => state.setEvents);
//   const getEventById = useEventStore((state) => state.getEventById);
//   const event = id ? getEventById(id) : null;

//   useEffect(() => {
//     const controller = new AbortController();
//     const url = "https://santosnr6.github.io/Data/events.json";

//     if (!id && events.length < 2) {
//       setLoading(true);
//       axios
//         .get(url, { signal: controller.signal })
//         .then((response) => {
//           if (Array.isArray(response.data.events)) {
//             setEvents(response.data.events);
//           }
//         })
//         .catch((error) => {
//           if (!axios.isCancel(error)) {
//             setError(error.message || "Något gick fel vid hämtning av events");
//           }
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }

//     if (id && !event) {
//       setLoading(true);
//       axios
//         .get(url, { signal: controller.signal })
//         .then((response) => {
//           if (Array.isArray(response.data.events)) {
//             const fetchedEvent = response.data.events.find((e) => String(e.id) === String(id));
//             if (fetchedEvent) {
//               const alreadyExists = events.some((e) => e.id === fetchedEvent.id);
//               if (!alreadyExists) {
//                 setEvents([...events, fetchedEvent]);
//               }
//             }
//           }
//         })
//         .catch((error) => {
//           if (!axios.isCancel(error)) {
//             setError(error.message || "Något gick fel vid hämtning av event");
//           }
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }

//     return () => controller.abort();
//   }, [id, event, events, setEvents]);

//   return { events, event, loading, error };
// };

// export default useFetchEvents;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import useEventStore from "../stores/useEventStore";

// // const useFetchEvents = (id= null) => {
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const events = useEventStore((state) => state.events);
// //   const setEvents = useEventStore((state) => state.setEvents);
// //   const getEventById = useEventStore((state) => state.getEventById);
// //   const event = id ? getEventById(id) : null;
// // //   const setEvents = useEventStore((state) => state.setEvents);
// // //   const getEventById = useEventStore((state) => state.getEventById);
// // //   const event = getEventById(id);

// //   useEffect(() => {
// //     const controller = new AbortController();
// //     const url = "https://santosnr6.github.io/Data/events.json";

// //     if (!id && events.length === 0) {
// //         setLoading(true);

// //       axios
// //         .get(url, { signal: controller.signal })
// //         .then((response) => {
// //           const fetchedEvent = response.data.events.find((e) => e.id === id);
// //           if (fetchedEvent) {
// //             setEvents([fetchedEvent]); // Lägg till eventet i store
// //           }
// //         })
// //         .catch((error) => {
// //           if (!axios.isCancel(error)) {
// //             setError(error.message || `Något gick fel`);
// //             console.error(`Error fetching events:`, error);
// //           })
// //           .finally(() => {
// //             setLoading(false);
// //           });
// //         }, [events, setEvents]);

// //       return () => controller.abort();
// //     }
// //   }, [event, id, setEvents]);

// //   return { event };
// // };

// // export default useFetchEvents;
