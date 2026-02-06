import React from "react";

const Page2 = () => {
  return (
    <div className="px-16 py-7">
      <div className="w-full flex justify-center items-center py-12">
        <h1 className="text-xl font-normal">BACKED BY</h1>
      </div>

      <div className="flex justify-evenly items-center gap-12">
        <img src="/Pantera.avif" alt="Pantera" className="h-14 object-contain" />
        <img src="/Multi-Coin.avif" alt="Multicoin" className="h-14 object-contain" />
        <img src="/Solana.avif" alt="Solana" className="h-14 object-contain" />
      </div>
    </div>
  );
};

export default Page2;
