{
  /* <div>
  <div>
    <h1>Hello, React!</h1>
    <h2>Good to see you!</h2>
  </div>
  <div>
    <p>React is a JavaScript library for building user interfaces.</p>
  </div>
</div>; */
}

const hello = React.createElement("h1", {}, "Hello, React!");

const hello2 = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello, React!"),
    React.createElement("h2", {}, "Good to see you!"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello, React!"),
    React.createElement("h2", {}, "Good to see you!"),
  ]),
  React.createElement(
    "div",
    {},
    React.createElement(
      "p",
      {},
      "React is a JavaScript library for building user interfaces."
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(hello2);
