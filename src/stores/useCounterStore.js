import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counts: {}, // Håller koll på antalet biljetter för varje event
      cartItems: [], // Håller koll på eventen i varukorgen
      purchasedTickets: [],

      setTicketCount: (id, quantity) => {
        const counts = get().counts;
        const updatedCounts = {
          ...counts,
          [id]: quantity, // Uppdatera antalet biljetter för ett event
        };

        set({
          counts: updatedCounts,
        });
      },

      // Lägg till event till varukorgen med den aktuella mängden från counts
      addTicketToCart: (event) => {
        const { id } = event;
        const count = get().counts[id] || 0;

        if (count === 0) return;

        const cartItems = get().cartItems;
        const existingItem = cartItems.find((item) => item.id === id);

        const updatedCartItems = existingItem
          ? cartItems.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item))
          : [...cartItems, { ...event, count }];

        const newCounts = {
          ...get().counts,
          [id]: count + 1,
        };

        // if (count > 0) {
        //   // Kolla om eventet redan finns i varukorgen
        //   const updatedCartItems = cartItems.some((item) => item.id === id)
        //     ? cartItems.map((item) =>
        //         item.id === id
        //           ? { ...item, count: item.count + count } // Uppdatera mängd i varukorgen
        //           : item
        //       )
        //     : [...cartItems, { ...event, count }]; // Lägg till med rätt mängd

        set({
          cartItems: updatedCartItems,
          counts: newCounts,
        });
      },

      // Ta bort ett event från varukorgen när count är 0 eller mindre
      removeTicket: (eventId) => {
        const counts = get().counts;
        const cartItems = get().cartItems;
        const currentCount = counts[eventId] || 0;

        if (currentCount <= 1) {
          const newCounts = { ...counts };
          delete newCounts[eventId];

          // Ta bort från cartItems när count är 0
          const updatedCartItems = cartItems.filter((item) => item.id !== eventId);

          set({
            counts: newCounts,
            cartItems: updatedCartItems,
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

      // Rensa varukorgen
      clearCart: () => set({ counts: {}, cartItems: [] }),

      // Beräkna totalpris baserat på antalet och priset för varje item
      totalPrice: () => {
        const { cartItems, counts } = get();
        return cartItems.reduce((sum, item) => {
          const count = counts[item.id] || 0; // Använd count för att få antal biljetter
          return sum + item.price * count;
        }, 0);
      },
      completePurchase: () => {
        const { cartItems } = get();
        set((state) => ({
          purchasedTickets: [...state.purchasedTickets, ...cartItems],
          cartItems: [],
          counts: {},
        }));
      },
    }),
    {
      name: "cart-store", // localStorage-nyckel
    }
  )
);

export default useCounterStore;
