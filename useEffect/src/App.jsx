import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [Number1, setfirst] = useState(10);
  const [Number2, setNumber2] = useState(100);

  useEffect(()=>{
    console.log("Number 1 change ho chuka ha")
  },[Number1])
  useEffect(()=>{
    console.log("Number 2 change ho chuka ha")
  },[Number2])
  return (
    <div>
      <h1>{Number1}</h1>
      <h1>{Number2}</h1>
      <button onMouseEnter={() =>{
        setfirst(Number1 + 10)
      }}
      onMouseLeave={() => {
        setNumber2(Number2 + 20)
      }}>CLick me</button>
    </div>
  );
};

export default App;
