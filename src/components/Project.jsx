import React from "react";
import { FiGithub, FiLink2 } from "react-icons/fi";

function Project({ img, title, desc, linkProject, linkGithub }) {
  return (
    <div className="flex flex-col space-y-3 lg:space-y-6">
      <div className="flex flex-col items-center space-y-3 transition-all cursor-pointer lg:space-y-0 lg:space-x-4 lg:flex-row hover:scale-110 hover:drop-shadow-2xl">
        <img
          src={img}
          alt=""
          className=" lg:max-w-[13vw] border-[1px] border-gray-600 cursor-pointer rounded-lg"
        />
        <div className="flex flex-col min-w-[10vw] space-y-2">
          <h1 className="text-xl lg:text-2xl">{title}</h1>
          <h1 className="hidden text-sm md:block ">{desc}</h1>
          <div className="flex space-x-5 place-self-center lg:self-start lg:pt-2 ">
            <a href={linkGithub} target="_blank" rel="noreferrer">
              <FiGithub className="w-5 h-5 transition-all cursor-pointer hover:scale-110 " />
            </a>
            <a href={linkProject} target="_blank" rel="noreferrer">
              <FiLink2 className="w-5 h-5 transition-all cursor-pointer hover:scale-110 " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
