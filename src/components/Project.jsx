import React from "react";

function Project({ img, title, desc, link }) {
  return (
    <div className="flex flex-col items-center space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={img}
          alt=""
          className="transition-all lg:max-w-[13vw] border-[1px] border-gray-600 cursor-pointer drop-shadow-2xl hover:scale-105 rounded-lg"
        />
      </a>
      <div className="flex flex-col min-w-[10vw] space-y-2">
        <h1 className="text-xl lg:text-2xl">{title}</h1>
        <h1 className="hidden text-sm md:block ">{desc}</h1>
      </div>
    </div>
  );
}

export default Project;
