import { Link } from "react-router-dom";
import "./button.css";

//lärde mig något nytt, använda ...rest när det är flera saker som jag inte har behov av att skriva ut.
// t.ex. aria-label i detta fall

function Button({ text, onClick, to, type = "button", ...rest }) {
  // Om 'to' finns: rendera som länk, annars som vanlig knapp
  if (to) {
    return (
      <Link to={to} className="button" {...rest}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className="button" {...rest}>
      {text}
    </button>
  );
}

export default Button;
