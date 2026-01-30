import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import Buttons from "./components/Buttons";

const App = () => {
  const [getUserData, setgetUserData] = useState([]);
  let [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`,
    );
    setgetUserData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);
  let printTheState = (
    <p className="text-center text-gray-400 text-lg animate-pulse">
      Loading...
    </p>
  );
  if (getUserData.length > 0) {
    printTheState = (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {getUserData.map((elem) => (
          <Card key={elem.id} elem={elem} />
        ))}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white flex flex-col">
      {/* Gallery */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-8">{printTheState}</div>
      {/* Buttons */}
      <Buttons
        user={getUserData}
        changeUser={setgetUserData}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default App;
