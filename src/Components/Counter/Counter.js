import React, { useState } from "react";
import "../../scss/counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      className="Counter"
      style={{
        margin: "4rem",
        textAlign: "center"
      }}
    >
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
