import React from "react";

const Page3 = () => {
  return (
    <div>
      {/* Heading */}
      <div className="w-full flex justify-center items-center text-center py-24">
        <h1
          className="text-7xl md:text-7xl font-semibold leading-tight
          bg-[linear-gradient(90deg,#0a0a0a,#1e468c_25%,#aa87fa_98%,#ffffff)]
          bg-clip-text text-transparent"
        >
          One Portfolio.
          <br />
          Infinite Strategies.
        </h1>
      </div>

      {/* Sticky section wrapper */}
      <div className="flex w-full">
        {/* Left: Sticky Video */}
        <div className="w-1/3 h-screen sticky top-0 flex items-center">
          <video
            className="w-[90%] h-auto object-cover rounded-lg"
            src="/Video-2.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right: Scrolling Sections */}
        <div className="w-2/3">
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Access Multi-venue DeFi with Unified Margin</h1>
          </div>
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Simplify Multi-Venue Portfolio Management</h1>
          </div>
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Add zero new smart contract risk</h1>
          </div>
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">Do what you're already doing, better</h1>
          </div>
          <div className="h-screen flex items-center justify-center">
            <h1 className="text-4xl font-bold">An Architecture Built To Scale</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
