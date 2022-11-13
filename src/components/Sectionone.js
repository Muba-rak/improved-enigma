import React from "react";
import { useState, useEffect } from "react";
//HOOKS - useState
//import useState
//general rules
//useState

const Sectionone = () => {
  const [val, setVal] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/users";
  //useEffect to run side effects
  //by default it runs on every re-render- state changes
  //dependency array list - empty- once
  //values- run whenever the value changes
  //FETCH DATA - external API
  //promises - fetch .then

  //async/await

  useEffect(() => {
    console.log("useeffect ran");
  }, [val]);

  //dependency list - empty []==>once

  return (
    <div>
      <h1>USE EFFECT</h1>
      <h1> {val} </h1>
      <button onClick={() => setVal(val + 1)}>Click</button>
    </div>
  );
};

export default Sectionone;
