import { Link } from "react-router-dom";
import "./button.css";

function Button({ text, onClick, to, type = "button" }) {
  // Om 'to' finns: rendera som länk, annars som vanlig knapp
  if (to) {
    return (
      <Link to={to} className="button">
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className="button">
      {text}
    </button>
  );
}

export default Button;
