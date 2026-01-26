import React from "react";
import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState(" ");

  const submission = (grab) => {
    grab.preventDefault();
    console.log("form is been submitted by ", first);
    setfirst("");
  };
  return (
    <div>
      <form onSubmit={(e) => {
            submission(e);
          }}>
        <input
          style={{ backgroundColor: "black", color: "White" }}
          type="text"
          placeholder="Enter your name"
          value={first}
          onChange={(e) => {
            setfirst(e.target.value);
          }}
        />
        <button type="submit">Submit the form</button>
      </form>
    </div>
  );
};

export default App;
