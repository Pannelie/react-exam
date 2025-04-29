import { create } from "zustand";

const useEventStore = create((set, get) => ({
  events: [],
  setEvents: (events) => set({ events }),
  getEventById: (id) => get().events.find((event) => String(event.id) === String(id)),
}));
