import React from "react";
import { X } from "lucide-react";

const Card = (props) => {
  const remove = () => {
    props.onDelete(props.id)
  }
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 text-cyan-50 w-full">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">{props.title}</h2>
        <X onClick={
          remove
        }  className="cursor"/>
      </div>
      <p className="text-sm text-zinc-300 mt-2">{props.description}</p>
    </div>
  );
};

export default Card;
