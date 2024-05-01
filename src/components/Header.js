import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img className="logo w-64 " src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/grocery">
            <li className="p-4">Grocery</li>
          </Link>
          <Link to="/about">
            <li className="p-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="p-4">Contact</li>
          </Link>
          <li className="p-4">Cart</li>
          <button className="login-btn " onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
