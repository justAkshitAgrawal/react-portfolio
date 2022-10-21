import React from "react";

function Project({ img, title, desc, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-col items-center space-y-3 transition-all cursor-pointer lg:space-y-0 lg:space-x-4 lg:flex-row hover:scale-110 hover:drop-shadow-2xl">
        <img
          src={img}
          alt=""
          className=" lg:max-w-[13vw] border-[1px] border-gray-600 cursor-pointer rounded-lg"
        />
        <div className="flex flex-col min-w-[10vw] space-y-2">
          <h1 className="text-xl lg:text-2xl">{title}</h1>
          <h1 className="hidden text-sm md:block ">{desc}</h1>
        </div>
      </div>
    </a>
  );
}

export default Project;
