import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/search" className={location.pathname === "/search" || location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/history" className={location.pathname === "/history" ? "nav-link active" : "nav-link"}>
          History
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;