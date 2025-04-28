import React from "react";
import "./navList.css";
import NavItems from "../navitems/NavItems";

function NavList() {
  return (
    <ul className="nav__list">
      <NavItems />
    </ul>
  );
}

export default NavList;
