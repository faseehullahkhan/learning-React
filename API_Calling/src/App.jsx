import React from "react";
import axios from "axios";

const App = () => {
  // This is an example of fetching data using async await
  //   const getData = async () => {
  //     const a = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //     const data = await a.json()
  //     console.log(data)
  //   };

  // now we will use Axios, first we have to donwload axios using npm i axios
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(data);
  };
  return (
    <div>
      <button onClick={getData} className="data-btn">
        Get the data
      </button>
    </div>
  );
};

export default App;
