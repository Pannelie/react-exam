import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEventStore = create(
  persist(
    (set, get) => ({
      events: [],
      setEvents: (events) => set({ events }),
      getEventById: (id) => {
        const event = get().events.find((event) => String(event.id) === String(id));
        return event || null;
      },
    }),
    {
      name: "events-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useEventStore;
