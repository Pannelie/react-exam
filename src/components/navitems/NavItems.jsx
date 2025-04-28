import React from "react";
import { Link } from "react-router-dom";

function NavItems() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
    </>
  );
}

export default NavItems;
