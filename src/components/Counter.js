import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  //increase
  // decrease
  //reset
  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <div>
      <h1>BASIC COUNTER</h1>
      <h1>{value} </h1>
      <button onClick={decrease}>DECREASE</button>
      <button onClick={reset}>RESET</button>
      <button onClick={increase}>INCREASE</button>
    </div>
  );
};

export default Counter;
