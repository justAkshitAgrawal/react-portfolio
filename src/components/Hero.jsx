import React from "react";
import photo from "../media/aa.png";
import Socials from "./Socials";

function Hero() {
  return (
    <div className="flex flex-col pb-10 space-y-14 lg:space-y-64">
      <div className="flex flex-col items-center justify-between px-20 font-light mt-14 lg:mt-40 lg:flex-row">
        <div className="flex flex-col order-2 space-y-4 lg:order-1 ">
          <h1 className="mt-5 text-5xl tracking-wide lg:mt-0 lg:text-7xl">
            <span className="font-light ">I'm </span>
            <span className="font-semibold ">Akshit Agrawal</span>
          </h1>
          <h1 className="text-3xl tracking-wide lg:text-4xl">
            Freelancer, front-end developer and student
          </h1>
        </div>
        <div className="order-1 lg:order-2">
          <img src={photo} alt="" className="lg:h-[40vh] rounded-md" />
        </div>
      </div>
      <div className="flex items-center justify-center px-20 lg:justify-between">
        <Socials />
        <a href="mailto:akshitaggarwal7@gmail.com">
          <h1 className="hidden text-lg lg:inline-block">
            akshitaggarwal7@gmail.com
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Hero;
