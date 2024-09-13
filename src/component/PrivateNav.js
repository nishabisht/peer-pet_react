import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../img/login.png";

const PrivateNav = () => {
  return (
    <header>
      <nav>
        <div className="logo">Pet Shop</div>
        <div className="nav-links">
          <Link to="/login">
            <img src={loginImage} alt="loginImage" className="loginImage" />
            Login
          </Link>
          <Link to="/register">SignIn</Link>
        </div>
      </nav>
    </header>
  );
};

export default PrivateNav;
