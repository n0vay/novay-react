import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import { LOGO_URL } from "./src/utils/constants";


// Header Component - Logo, nav
// Body Component - Search, Results, Resturant Cards
// Footer Component - Socials, Contact, CopyRight

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
