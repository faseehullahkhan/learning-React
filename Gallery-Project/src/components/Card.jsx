import React from "react";

const Card = ({elem}) => {
  return (
    <div>
      <a
        key={elem.idx}
        href={elem.url}
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-1"
      >
        <img
          src={elem.download_url}
          alt=""
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Author */}
        <h2 className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {elem.author}
        </h2>
      </a>
    </div>
  );
};

export default Card;
