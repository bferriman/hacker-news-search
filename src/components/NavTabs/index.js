import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function NavTabs() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-light">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item me-5">
            <Link to="/search" className={location.pathname === "/search" || location.pathname === "/" ? "nav-link active px-0" : "nav-link px-0"}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className={location.pathname === "/history" ? "nav-link active px-0" : "nav-link px-0"}>
              History
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;