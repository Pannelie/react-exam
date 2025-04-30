import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counts: {},
      cartItems: [],

      addTicket: (event) => {
        const { id, name, price } = event;
        const counts = get().counts;
        const cartItems = get().cartItems;

        set({
          counts: {
            ...counts,
            [id]: (counts[id] || 0) + 1,
          },
          cartItems: cartItems.some((item) => item.id === id) ? cartItems : [cartItems, { id, name, price }],
        });
      },

      removeTicket: (eventId) => {
        const counts = get().counts;
        const cartItems = get().cartItems;
        const currentCount = counts[eventId] || 0;

        if (currentCount <= 1) {
          const newCounts = { ...counts };
          delete newCounts[eventId];

          set({
            counts: newCounts,
            cartItems: cartItems.filter((item) => item.id !== eventId),
          });
        } else {
          set({
            counts: {
              ...counts,
              [eventId]: currentCount - 1,
            },
          });
        }
      },
      clearCart: () => set({ counts: {}, cartItems: [] }),

      get totalTickets() {
        return Object.values(get().counts).reduce((sum, n) => sum + n, 0);
      },

      get totalPrice() {
        return get().cartItems.reduce((sum, item) => {
          const count = get().counts[item.id] || 0;
          return sum + item.price * count;
        }, 0);
      },
    }),
    {
      name: "cart-store", // localStorage-nyckel
    }
  )
);

export default useCounterStore;
