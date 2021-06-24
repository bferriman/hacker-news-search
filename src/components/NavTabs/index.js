import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-light">
      <ul className="navbar-nav px-3">
        <li className="nav-item me-4">
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
    </nav>
  );
}

export default NavTabs;