import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiHackerrank } from "react-icons/si";

function Socials() {
  return (
    <div className="flex space-x-4">
      <div className="p-2 border-2 rounded-full">
        <a
          href="https://www.linkedin.com/in/akshit-agrawal-586365227"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="w-6 h-6 transition-all cursor-pointer hover:scale-75 " />
        </a>
      </div>
      <div className="p-2 border-2 rounded-full">
        <a
          href="https://github.com/justAkshitAgrawal"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub className="w-6 h-6 transition-all cursor-pointer hover:scale-75" />
        </a>
      </div>
      <div className="p-2 border-2 rounded-full">
        <a
          href="https://www.hackerrank.com/akshitaggarwal7"
          target="_blank"
          rel="noreferrer"
        >
          <SiHackerrank className="w-6 h-6 transition-all rounded-full cursor-pointer hover:scale-75" />
        </a>
      </div>
      <div className="p-2 border-2 rounded-full">
        <a
          href="https://www.instagram.com/_agrawal_akshit_/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram className="w-6 h-6 transition-all cursor-pointer hover:scale-75" />
        </a>
      </div>
    </div>
  );
}

export default Socials;
