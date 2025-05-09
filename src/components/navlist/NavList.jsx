import React from "react";
import NavItems from "../navitems/NavItems";
import "./navList.css";

function NavList() {
  return (
    <ul className="nav__list">
      <NavItems />
    </ul>
  );
}

export default NavList;
