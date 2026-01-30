import React from "react";

const Buttons = ({user, changeUser, index, setIndex }) => {
  return (
    <div className="flex justify-center gap-6 py-5 border-t border-gray-800 bg-black/40 backdrop-blur">
      <button
        className="px-7 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 active:scale-95 transition disabled:opacity-40"
        onClick={() => {
          if (index > 1) {
            changeUser([]);
            setIndex(index - 1);
          }
        }}
        disabled={index === 1}
      >
        PREV
      </button>
      <button
        className="px-7 py-2.5 rounded-xl bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-200 hover:to-white active:scale-95 transition"
        onClick={() => {
          changeUser([]);
          setIndex(index + 1);
        }}
      >
        NEXT
      </button>
    </div>
  );
};

export default Buttons;
