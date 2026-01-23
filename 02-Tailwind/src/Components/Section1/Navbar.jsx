import React from "react";
import {CornerDownRight} from "lucide-react"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
      <h4 className="bg-black text-white py-1 px-5 rounded-4xl">Target Audience</h4>
      <button className="bg-gray-100 py-1 px-2 rounded-4xl flex items-center justify-evenly w-3xs"> <CornerDownRight size={20} color="#111" strokeWidth={1.5} />Digital Banking Platform</button>
    </div>
  );
};

export default Navbar;
