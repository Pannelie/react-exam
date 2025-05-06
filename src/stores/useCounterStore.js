import { create } from "zustand";
import { persist } from "zustand/middleware";
import { generateTicketID } from "../utils/utils";

const useCounterStore = create(
  persist(
    (set, get) => ({
      counts: {}, // Håller koll på antalet biljetter för varje event
      cartItems: [], // Håller koll på eventen i varukorgen
      purchasedTickets: [],
      usedSeats: {},

      // Uppdaterar count för ett event på SingleEventPage
      setTicketCount: (id, quantity) => {
        set((state) => ({
          counts: { ...state.counts, [id]: quantity },
        }));
      },

      // För OrderPage: Öka count direkt
      increaseCount: (id) => {
        const current = get().counts[id] || 0;
        set((state) => ({
          counts: { ...state.counts, [id]: current + 1 },
        }));
      },

      // För OrderPage: Lägg till event till cart direkt
      addTicketToCart: (event, addToPurchased = false) => {
        const { id } = event;
        const count = get().counts[id] || 0;
        if (count === 0) return;

        // Uppdaterar cart direkt (utan att bekräfta)
        const existingItem = get().cartItems.find((item) => item.id === id);
        const updatedCartItems = existingItem
          ? get().cartItems.map((item) => (item.id === id ? { ...item, count } : item))
          : [...get().cartItems, { ...event, count }];

        set({
          cartItems: updatedCartItems,
          counts: { ...get().counts, [id]: count },
        });

        // Lägg till till purchased om det är från bekräftelse
        if (addToPurchased) {
          const purchasedTicket = {
            ...event,
            ticketId: generateTicketID(),
            seat: `${event.id}-seat-${count}`,
            count,
          };
          set({
            purchasedTickets: [...get().purchasedTickets, purchasedTicket],
          });
        }
      },

      // Uppdatera antal för ett event i varukorgen
      updateTicketInCart: (event, count) => {
        const { id } = event;
        const updatedCartItems = get().cartItems.map((item) => (item.id === id ? { ...item, count } : item));

        set({
          cartItems: updatedCartItems,
          counts: { ...get().counts, [id]: count },
        });
      },

      // Rensa varukorgen
      clearCart: () => set({ counts: {}, cartItems: [] }),

      // Beräkna totalpris
      totalPrice: () => {
        const { cartItems, counts } = get();
        return cartItems.reduce((sum, item) => {
          const count = counts[item.id] || 0;
          return sum + item.price * count;
        }, 0);
      },

      // Genomför köp
      completePurchase: () => {
        const { cartItems, usedSeats } = get();
        const newTickets = {};
        const purchased = [];

        cartItems.forEach((item) => {
          const section = String.fromCharCode(65 + Math.floor(Math.random() * 26));
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

          const newUsed = [...existingSeats];
          const tickets = Array.from({ length: item.count }, (_, i) => {
            const seat = `section ${section} - seat ${startNumber + i}`;
            newUsed.push(seat);
            return {
              ...item,
              ticketId: generateTicketID(),
              section,
              seat,
            };
          });

          newTickets[item.id] = newUsed;
          purchased.push(...tickets);
        });

        set((state) => ({
          purchasedTickets: [...state.purchasedTickets, ...purchased],
          cartItems: [],
          counts: {},
          usedSeats: { ...state.usedSeats, ...newTickets },
        }));
      },
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCounterStore;

// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { generateTicketID } from "../utils/utils";

// const useCounterStore = create(
//   persist(
//     (set, get) => ({
//       counts: {}, // Håller koll på antalet biljetter för varje event
//       cartItems: [], // Håller koll på eventen i varukorgen
//       purchasedTickets: [],
//       usedSeats: {},

//       setTicketCount: (id, quantity) => {
//         const counts = get().counts;
//         const updatedCounts = {
//           ...counts,
//           [id]: quantity, // Uppdatera antalet biljetter för ett event
//         };

//         set({
//           counts: updatedCounts,
//         });
//       },

//       // Lägg till event till varukorgen med den aktuella mängden från counts
//       addTicketToCart: (event, addToPurchased = false) => {
//         const { id } = event;
//         const count = get().counts[id] || 0;

//         if (count === 0) return;

//         const cartItems = get().cartItems;
//         const existingItem = cartItems.find((item) => item.id === id);

//         const updatedCartItems = existingItem
//           ? cartItems.map((item) => (item.id === id ? { ...item, count: count } : item))
//           : [...cartItems, { ...event, count }];

//         const newCounts = {
//           ...get().counts,
//           [id]: count,
//         };

//         set({
//           cartItems: updatedCartItems,
//           counts: newCounts,
//         });

//         if (addToPurchased) {
//           const purchasedTicket = {
//             ...event,
//             ticketId: generateTicketID(),
//             seat: `${event.id}-seat-${count}`,
//             count,
//           };
//           set({
//             purchasedTickets: [...get().purchasedTickets, purchasedTicket],
//           });
//         }

//         set({
//           cartItems: updatedCartItems,
//           counts: newCounts,
//         });
//       },
//       updateTicketInCart: (event, count) => {
//         const { id } = event;
//         const cartItems = get().cartItems;
//         const updatedCartItems = cartItems.map((item) => (item.id === id ? { ...item, count } : item));

//         set({
//           cartItems: updatedCartItems,
//           counts: { ...get().counts, [id]: count },
//         });
//       },

//       // Ta bort ett event från varukorgen när count är 0 eller mindre
//       removeTicket: (eventId) => {
//         const counts = get().counts;
//         const cartItems = get().cartItems;
//         const currentCount = counts[eventId] || 0;

//         if (currentCount <= 1) {
//           const newCounts = { ...counts };
//           delete newCounts[eventId];

//           // Ta bort från cartItems när count är 0
//           const updatedCartItems = cartItems.filter((item) => item.id !== eventId);

//           set({
//             counts: newCounts,
//             cartItems: updatedCartItems,
//           });
//         } else {
//           set({
//             counts: {
//               ...counts,
//               [eventId]: currentCount - 1,
//             },
//           });
//         }
//       },

//       // Rensa varukorgen
//       clearCart: () => set({ counts: {}, cartItems: [] }),

//       // Beräkna totalpris baserat på antalet och priset för varje item
//       totalPrice: () => {
//         const { cartItems, counts } = get();
//         return cartItems.reduce((sum, item) => {
//           const count = counts[item.id] || 0; // Använd count för att få antal biljetter
//           return sum + item.price * count;
//         }, 0);
//       },
//       completePurchase: () => {
//         const { cartItems, usedSeats } = get();
//         const newTickets = [];
//         const purchased = [];

//         // const allTickets = cartItems.flatMap((item) => {
//         cartItems.forEach((item) => {
//           const section = String.fromCharCode(65 + Math.floor(Math.random() * 26)); //bokstäver mellan A-Z
//           const existingSeats = usedSeats[item.id] || [];

//           let startNumber;
//           let maxAttempts = 1000;

//           while (maxAttempts--) {
//             const potentialStart = Math.floor(Math.random() * 100) + 1;
//             const proposedSeats = Array.from({ length: item.count }, (_, i) => `${section}-${potentialStart + i}`);

//             const hasConflict = proposedSeats.some((seat) => existingSeats.includes(seat));
//             if (!hasConflict) {
//               startNumber = potentialStart;
//               break;
//             }
//           }
//           if (startNumber === undefined) {
//             console.error("Kunde inte hitta lediga platser.");
//             return;
//           }
//           const newUsed = [...existingSeats];

//           const tickets = Array.from({ length: item.count }, (_, i) => {
//             const seat = `section ${section} - seat ${startNumber + i}`;
//             newUsed.push(seat);
//             return {
//               ...item,
//               ticketId: generateTicketID(),
//               section,
//               seat,
//             };
//           });

//           newTickets[item.id] = newUsed;
//           purchased.push(...tickets);
//         });

//         set((state) => ({
//           purchasedTickets: [...state.purchasedTickets, ...purchased],
//           cartItems: [],
//           counts: {},
//           usedSeats: {
//             ...state.usedSeats,
//             ...newTickets,
//           },
//         }));
//       },
//     }),
//     {
//       name: "cart-store", // localStorage-nyckel
//     }
//   )
// );

// export default useCounterStore;
