import React from "react";
import ReactDOM from "react-dom/client";

// Header Component - Logo, nav
// Body Component - Search, Results, Resturant Cards
// Footer Component - Socials, Contact, CopyRight

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
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

const ResturantCard = () => {
  return (
    <div className="resturant-card">
      <div className="resturant-img">
        <img className="res-logo" alt ="food-logo" src = "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg"/>
      </div>
      <div className="resturant-details">
        <h3>Le Kha Bencho</h3>
        <h4>Buriyani, Asian, African</h4>
        <h4>6.9 Stars</h4>
        <h4>420 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="resturant-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
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
