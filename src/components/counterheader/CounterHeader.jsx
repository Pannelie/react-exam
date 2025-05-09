import "./counterHeader.css";

function CounterHeader({ header, event, count, sizeModifier }) {
  const headerContent = typeof header === "function" ? header({ event, count }) : header;

  return <div className={`counter__header counter__header--${sizeModifier}`}>{headerContent}</div>;
}
export default CounterHeader;
