import React from "react";
import { MoveRight } from "lucide-react";

const Carddata = (props) => {
  return (
    <div className="flex flex-col justify-around h-screen">
      <button className="w-8.5 h-8.5 bg-gray-200 rounded-4xl">
        {props.num + 1}
      </button>
      <div className="pt-30">
        <h3 className="text-gray-100 font-medium w-[80%]">{props.para}</h3>
      </div>
      <button className="flex justify-around items-center w-38 h-8.5 rounded-4xl" style={{backgroundColor: props.color}}>
        {props.tag} <MoveRight />
      </button>
    </div>
  );
};

export default Carddata;
