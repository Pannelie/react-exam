import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counts: {},
      cartItems: [],

      setTicketCount: (event, quantity) => {
        const { id } = event;
        const counts = get().counts;
        const updatedCounts = {
          ...counts,
          [id]: quantity, // Uppdatera till valt antal
        };

        set({
          counts: updatedCounts,
        });
      },

      // Lägg till event till varukorgen med den bekräftade mängden
      addTicketToCart: (event) => {
        const { id, name, price } = event;
        const quantity = get().counts[id] || 0;
        const cartItems = get().cartItems;

        if (quantity > 0) {
          // Kolla om eventet redan finns i varukorgen
          const updatedCartItems = cartItems.some((item) => item.id === id)
            ? cartItems.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + quantity } // Uppdatera mängd i varukorgen
                  : item
              )
            : [...cartItems, { id, name, price, quantity }];

          set({
            cartItems: updatedCartItems,
          });
        }
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
