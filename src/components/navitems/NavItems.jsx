import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

function NavItems() {
  const location = useLocation();

  return (
    <>
      <li className="nav__list-item">
        <Link to="/" className={`nav__link ${location.pathname === "/" ? "active" : ""}`} onClick={() => console.log(`Home page`)}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="/events"
          className={`nav__link ${location.pathname === "/events" ? "active" : ""}`}
          onClick={() => console.log(`Events page`)}
        >
          <FontAwesomeIcon icon={faCalendarWeek} />
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="/tickets"
          className={`nav__link ${location.pathname === "/tickets" ? "active" : ""}`}
          onClick={() => console.log(`tickets page`)}
        >
          <FontAwesomeIcon icon={faTicket} />
        </Link>
      </li>
    </>
  );
}

export default NavItems;
