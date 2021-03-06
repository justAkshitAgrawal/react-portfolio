import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function Socials() {
  return (
    <div className="flex space-x-5">
      <a
        href="https://www.linkedin.com/in/akshit-agrawal-586365227"
        target="_blank"
      >
        <FiLinkedin className="w-6 h-6 cursor-pointer" />
      </a>
      <a href="https://github.com/justAkshitAgrawal" target="_blank">
        <FiGithub className="w-6 h-6 cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/_agrawal_akshit_/" target="_blank">
        <FiInstagram className="w-6 h-6 cursor-pointer" />
      </a>
    </div>
  );
}

export default Socials;
