import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const Page1 = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    // Normalize between -0.5 to 0.5
    const x = e.clientX / innerWidth - 0.5;
    const y = e.clientY / innerHeight - 0.5;

    setPos({ x, y });
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex justify-center items-center "
      onMouseMove={handleMouseMove}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-200 ease-out "
        src="/Video-1.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          transform: `translate(${pos.x * 30}px, ${pos.y * 30}px) scale(1.0)`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
      <div className="absolute top-[13%] flex flex-col items-center text-center gap-4 bg-gradient-to-b from-white/90 via-white/90 to-transparent rounded-lg">
        <svg
          className="w-24 md:w-30"
          viewBox="0 0 96 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.0634 20.9008C81.0248 14.7789 72.7483 11.8347 63.6163 11.8347C61.2881 11.8347 58.905 12.0265 56.4862 12.4046C54.0675 12.7827 51.9476 10.8978 51.9476 8.45125V0.5H44.0551V92.9125C44.0551 96.9465 41.0906 100.347 37.1417 100.853C35.5264 101.058 33.9386 101.164 32.3892 101.164C27.2637 101.164 20.002 99.9963 14.52 94.4416C11.7694 91.6531 9.84157 88.1362 8.79673 83.9937C8.26746 81.9003 7.96854 79.6483 7.90272 77.3019C7.83691 74.9026 8.01793 72.3838 8.44025 69.8177C8.8708 67.1932 9.55911 64.5048 10.4805 61.8247C11.4267 59.0779 12.6251 56.3228 14.0483 53.6344C17.043 47.9684 20.9591 42.6667 25.6841 37.8765C28.5718 34.9489 31.6926 32.2939 34.956 29.9891C35.3564 29.7056 35.7595 29.4276 36.1654 29.1551V19.7748C30.5518 22.9887 25.1027 27.1534 20.1062 32.2188C-1.46514 54.0876 -6.46444 84.4803 8.94209 100.099C14.9807 106.221 23.2572 109.165 32.3892 109.165C34.7174 109.165 37.1005 108.973 39.5165 108.595C41.9024 108.22 44.0551 110.102 44.0551 112.549V120.5H51.9476V28.0875C51.9476 24.0535 54.9121 20.6534 58.8611 20.1474C60.4763 19.9417 62.0641 19.836 63.6136 19.836C68.739 19.836 75.998 21.0037 81.48 26.5584C84.2306 29.3469 86.1584 32.8638 87.2033 37.0063C87.7325 39.0997 88.0315 41.3517 88.0973 43.6981C88.1631 46.0974 87.9821 48.6162 87.5598 51.1823C87.1292 53.8068 86.4409 56.4952 85.5195 59.1753C84.5733 61.922 83.3749 64.6772 81.9517 67.3656C78.957 73.0316 75.041 78.3333 70.3159 83.1235C67.4282 86.051 64.3074 88.7061 61.044 91.0108C60.6436 91.2944 60.2405 91.5724 59.8346 91.8449V101.225C65.4482 98.0113 70.8973 93.8466 75.8938 88.7812C97.4651 66.9124 102.464 36.5197 87.0579 20.9008H87.0634Z"
            fill="url(#paint0_linear_1912_24850)"
          ></path>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_1912_24850"
              x1="-242.688"
              y1="68.119"
              x2="534.528"
              y2="68.119"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stop-color="#0A0A0A"></stop>{" "}
              <stop offset="0.25" stop-color="#1E468C"></stop>{" "}
              <stop offset="0.6" stop-color="#AA87FA"></stop>{" "}
              <stop offset="0.9" stop-color="#BED7F5"></stop>{" "}
            </linearGradient>{" "}
          </defs>
        </svg>

        <h1
          className="text-5xl md:text-5xl font-bold leading-tight
             bg-[linear-gradient(90deg,#0a0a0a,#1e468c_25%,#aa87fa_98%,#ffffff)]
             bg-clip-text text-transparent"
        >
          Your DeFi-Native Prime <br /> Broker
        </h1>

        <p className="text-lg md:text-2xl font-semibold text-black/90 mt-6 mb-2">
          Borrow against your entire DeFi portfolio, <br />
          regardless of the venues you use.
        </p>
        <div className="relative mt-6">
          <div className="bg-black text-white px-12 py-3 text-xl rounded">
            <a href="">Launch App</a>
          </div>
          <div
            className="absolute left-1/2 -bottom-6 -translate-x-1/2 
             w-8 h-10 rounded-3xl border border-gray-400 bg-transparent 
             flex items-center justify-center"
          >
            <BsArrowDown className="text-gray-400  text-xl animate-drop-loop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
