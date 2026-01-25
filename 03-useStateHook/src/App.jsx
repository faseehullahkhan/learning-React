import React, { useState } from "react";

const App = () => {
  // const [first, setfirst] = useState(0);
  // const changeNumber = () => {
  //   console.log("clicking")
  //   setfirst(first + 1)
  // };
  return (
    <div>
      <h1>The value of number is {first}</h1>
      <button onClick={changeNumber}>Click me </button>
    </div>
  );
};

export default App;
