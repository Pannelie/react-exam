import React from "react";
import "./navBar.css";
import NavList from "../navlist/NavList";

function NavBar() {
  return (
    <nav className="nav-bar">
      <NavList />
    </nav>
  );
}

export default NavBar;
