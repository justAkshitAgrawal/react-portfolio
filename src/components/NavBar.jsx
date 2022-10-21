import React from "react";
import { Link } from "react-scroll";
import logo from "../media/logo.png";

function NavBar() {
  return (
    <div className=" flex items-center justify-center lg:justify-between px-20 py-10 bg-[#212121] scrollbar-hide">
      <img src={logo} alt="" className="h-10 cursor-pointer" />
      <div className="hidden space-x-10 text-2xl font-light lg:flex">
        <Link to="home" smooth={true} activeClass="cursor-pointer">
          <h1 className="transition-all cursor-pointer hover:scale-110">
            Home
          </h1>
        </Link>
        <Link
          to="skills"
          smooth={true}
          activeClass="cursor-pointer"
          offset={-20}
        >
          <h1 className="transition-all cursor-pointer hover:scale-110">
            Skills
          </h1>
        </Link>
        <Link
          to="projects"
          smooth={true}
          activeClass="cursor-pointer"
          offset={-20}
        >
          <h1 className="transition-all cursor-pointer hover:scale-110">
            Projects
          </h1>
        </Link>
        <Link
          to="experience"
          smooth={true}
          activeClass="cursor-pointer"
          offset={-20}
        >
          <h1 className="transition-all cursor-pointer hover:scale-110">
            Experience
          </h1>
        </Link>
        <Link to="footer" smooth={true} activeClass="cursor-pointer">
          <h1 className="transition-all cursor-pointer hover:scale-110">
            Contact
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
