import React from "react";
import logo from "../media/logo.png";

function NavBar() {
  return (
    <div className="flex items-center justify-between px-20 py-10">
      <img src={logo} alt="" className="h-10 cursor-pointer" />
      <div className="flex space-x-10 text-2xl font-light">
        <h1>Home</h1>
        <h1>Skills</h1>
        <h1>Experience</h1>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default NavBar;
