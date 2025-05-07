import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateTicketID } from "../utils/utils";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counts: {}, // Håller koll på antalet biljetter per event
      cartItems: [], // Håller koll på varukorgen
      purchasedTickets: [], // Köpta biljetter
      usedSeats: {}, // Upptagna platser

      // Öka antal på SingleEventPage
      increaseCount: (id) => {
        const current = get().counts[id] || 0;
        set((state) => ({
          counts: { ...state.counts, [id]: current + 1 },
        }));
      },

      // Minska antal på SingleEventPage
      decreaseCount: (id) => {
        const current = get().counts[id] || 0;
        if (current <= 1) {
          const newCounts = { ...get().counts };
          delete newCounts[id];
          set({ counts: newCounts });
        } else {
          set((state) => ({
            counts: { ...state.counts, [id]: current - 1 },
          }));
        }
      },

      // Lägg till biljetter i varukorgen
      addTicketToCart: (event) => {
        const { id } = event;
        const count = get().counts[id] || 0;
        if (count === 0) return;

        const existingItem = get().cartItems.find((item) => item.id === id);
        let updatedCartItems;

        if (existingItem) {
          // Uppdatera befintligt item med det nya count-värdet
          updatedCartItems = get().cartItems.map((item) => (item.id === id ? { ...item, count: count } : item));
        } else {
          // Lägg till nytt item
          updatedCartItems = [...get().cartItems, { ...event, count }];
        }

        // Synka count med cart-värdet istället för att nollställa
        set({
          cartItems: updatedCartItems,
          counts: { ...get().counts, [id]: count },
        });
      },

      // Öka antal i varukorgen
      increaseCartItem: (id) => {
        const updatedCartItems = get().cartItems.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item));
        set({
          cartItems: updatedCartItems,
        });
      },

      // Minska antal i varukorgen
      decreaseCartItem: (id) => {
        const updatedCartItems = get()
          .cartItems.map((item) => {
            // Om item matchar id och count > 1, minska med 1
            if (item.id === id && item.count > 1) {
              return { ...item, count: item.count - 1 };
            }
            // Om count är 1, ta bort objektet genom att returnera null
            if (item.id === id && item.count === 1) {
              return null; // Markerar objektet för borttagning
            }
            return item; // Lämna oförändrat om det inte matchar id
          })
          .filter((item) => item !== null); // Filtrera bort alla null-värden (objekt med count 0)

        set({
          cartItems: updatedCartItems, // Uppdatera cartItems med den filtrerade listan
        });
      },

      // Flytta varukorg till köpta biljetter
      completePurchase: () => {
        const { cartItems, purchasedTickets, usedSeats } = get();
        const newPurchased = [];
        const newUsedSeats = { ...usedSeats };

        cartItems.forEach((item) => {
          const section = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
          const existingSeats = usedSeats[item.id] || [];
          let startNumber;
          let maxAttempts = 1000;

          while (maxAttempts--) {
            const potentialStart = Math.floor(Math.random() * 100) + 1;
            const proposedSeats = Array.from({ length: item.count }, (_, i) => `${section}-${potentialStart + i}`);

            const hasConflict = proposedSeats.some((seat) => existingSeats.includes(seat));

            if (!hasConflict) {
              startNumber = potentialStart;
              break;
            }
          }

          if (startNumber === undefined) {
            console.error("Kunde inte hitta lediga platser.");
            return;
          }

          const updatedUsedSeats = [...existingSeats];
          const tickets = Array.from({ length: item.count }, (_, i) => {
            const seatNumber = startNumber + i;
            const seat = `section ${section} - seat ${seatNumber}`;
            updatedUsedSeats.push(seat);

            return {
              ...item,
              ticketId: generateTicketID(),
              seat,
              section,
              seatNumber,
            };
          });

          newUsedSeats[item.id] = updatedUsedSeats;
          newPurchased.push(...tickets);
        });

        set({
          purchasedTickets: [...purchasedTickets, ...newPurchased],
          cartItems: [],
          counts: {},
          usedSeats: newUsedSeats,
        });
      },

      // Rensa varukorg
      clearCart: () => set({ cartItems: [], counts: {} }),

      // Beräkna totalpris för varukorg
      totalPrice: () => {
        const { cartItems } = get();
        return cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
      },
    }),
    {
      name: "counter-store",
    }
  )
);

export default useCounterStore;
