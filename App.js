import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";

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
