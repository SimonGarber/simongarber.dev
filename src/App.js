import React from "react";
import "./scss/main.scss";
import "./scss/App.scss";
import Counter from "./Components/Counter/Counter.js";
import NavBar from "./Components/NavBar/NavBar.js";
const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <Counter />
    </div>
  );
};

export default App;
