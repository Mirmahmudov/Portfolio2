import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>F</span>
        <span className="orange-text">O</span>
        <span>X</span>
      </div>

      <ul className="nav-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Portfolio
          </NavLink>
        </li>
      </ul>

      <Link to="/contact">
        <button className="btn-outline">CONTACT</button>
      </Link>
    </nav>
  );
};

export default Navbar;
