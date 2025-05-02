import "./counterHeader.css";

function CounterHeader({ header, event, count, sizeModifier }) {
  const headerContent = typeof header === "function" ? header({ event, count }) : header;

  return <div className={`counter__header counter__header--${sizeModifier}`}>{headerContent}</div>;
}
export default CounterHeader;

// import "./counterHeader.css";

// function CounterHeader({ header }) {
//   return <div className="counter__header">{header}</div>;
// }

// export default CounterHeader;

// import "./counterHeader.css";

// function CounterHeader({ header, event, count }) {
//   // Om en header-prop skickas, använd den
//   const headerContent = typeof header === "function" ? header({ event, count }) : header;

//   // Om headerContent inte är definierat, använd standardinnehåll från event
//   if (!headerContent) {
//     const { name, when } = event;
//     return (
//       <div className="counter__header">
//         <span className="counter__header-name">{name}</span>
//         <span className="counter__header-time">
//           {when.date} kl {when.from} - {when.to}
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="counter__header">
//       {typeof headerContent === "string" || typeof headerContent === "number" ? headerContent : "Felaktigt innehåll"}
//     </div>
//   );
// }

// export default CounterHeader;

// // import "./counterHeader.css";

// // function CounterHeader({ header, event, count }) {
// //   const headerContent = typeof header === "function" ? header({ event, count }) : header;

// //   return <div className="counter__header">
// //   <span className="counter__header-name">{event.name}</span>
// //   <span className="counter__header-time">
// //     {event.when.date} kl {event.when.from} - {event.when.to}
// //   </span>
// // </div>
// // }

// // export default CounterHeader;
