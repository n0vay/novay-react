import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [login, setLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <img className="logo w-64 " src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <li className="px-4">Cart</li>
          <button className="login-btn " onClick={() => setLogin(!login)}>
            {login ? "Logout" : "Login"}
          </button>
          <li className="font-bold px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
