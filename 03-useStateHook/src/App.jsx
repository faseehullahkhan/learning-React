import React, { useState } from "react";

const App = () => {
  // const [first, setfirst] = useState(0);
  // const changeNumber = () => {
  //   console.log("clicking")
  //   setfirst(first + 1)
  // };

  // the below is the code to change the values of the object
  // const [user, setuser] = useState({ name: "Faseeh", age: 23 });
  // const changeValue = () => {
  //   const userr = { ...user };
  //   userr.name = "Ahmed";
  //   userr.age = 21;
  //   setuser(userr);
  //   we can also change the values using prev
  //   setUser(prev => {...prev , profession : "Developer"})
  // };

  const [arr, setarr] = useState([32, 53, 54, 123, 43]);
  const changeValue = () => {
    // const arr2 = [...arr];
    // arr2[2] = 21;
    // arr2.push(0);
    // setarr(arr2);
    // we can also do this
    // setarr(prev => [...prev , 321])
  };
  return (
    <div>
      <h1>The value of the arr is {arr}</h1>
      <p>
        The button here changes the array{" "}
        <button onClick={changeValue}>Change</button>
      </p>
    </div>
  );
};

export default App;
