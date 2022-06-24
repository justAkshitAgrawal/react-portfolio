import React from "react";
import photo from "../media/aa.png";
import Socials from "./Socials";

function Hero() {
  return (
    <div className="flex flex-col pb-10 space-y-64">
      <div className="flex items-center justify-between px-20 mt-40 font-light ">
        <div className="flex flex-col space-y-4 ">
          <h1 className="tracking-wide text-7xl">
            <span className="font-light ">I'm </span>
            <span className="font-semibold ">Akshit Agrawal</span>
          </h1>
          <h1 className="text-4xl tracking-wide">
            Freelancer, front-end developer and student
          </h1>
        </div>
        <div>
          <img src={photo} alt="" className="h-[40vh] rounded-md" />
        </div>
      </div>
      <div className="flex items-center justify-between px-20">
        <Socials />
        <a href="mailto:akshitaggarwal7@gmail.com">
          <h1 className="text-lg">akshitaggarwal7@gmail.com</h1>
        </a>
      </div>
    </div>
  );
}

export default Hero;
