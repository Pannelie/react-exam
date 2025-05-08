import { Link } from "react-router-dom";
import "./button.css";

//lärde mig något nytt, använda ...rest när det är flera saker som jag inte har behov av att skriva ut.
// t.ex. aria-label i detta fall

function Button({ text, onClick, to, type = "button", className = "", ...rest }) {
  const combinedClassName = `button ${className}`.trim();

  // Om 'to' finns: rendera som länk, annars som vanlig knapp
  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...rest}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClassName} {...rest}>
      {text}
    </button>
  );
}

export default Button;
