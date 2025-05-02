import React from "react";
import { Link } from "react-router-dom";
import "./navItems.css";

function NavItems() {
  return (
    <>
      <li className="nav__list-item">
        <Link to="/" className="nav__link" onClick={() => console.log(`Home page`)}>
          Home
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/events" className="nav__link" onClick={() => console.log(`Events page`)}>
          Events
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/tickets" className="nav__link" onClick={() => console.log(`tickets page`)}>
          Tickets
        </Link>
      </li>
    </>
  );
}

export default NavItems;
