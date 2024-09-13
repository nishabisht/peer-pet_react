import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";

const Nav = () => {
  return (
    <div className="container-fluid">
      <header>
        <nav>
          <div className="logo">
            <Link to="/" className="pet">
              {" "}
              Pet Shop
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            {/* <Link to="/dashboard">Dashboard</Link> */}
            <Link to="/pets">Pets</Link>
            <Link to="/logout" className="logout">
              Logout
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
