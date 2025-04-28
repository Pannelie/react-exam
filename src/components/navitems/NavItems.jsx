import React from "react";
import { Link } from "react-router-dom";
import "./navItems.css";

function NavItems() {
  return (
    <>
      <li className="nav__list-item">
        <Link to="/" className="nav__link">
          Home
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/events" className="nav__link">
          Events
        </Link>
      </li>
      <li className="nav__list-item">
        <Link to="/orders" className="nav__link">
          Orders
        </Link>
      </li>
    </>
  );
}

export default NavItems;
