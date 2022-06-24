import React from "react";

function Skill({ skill, icon }) {
  return (
    <div className="flex items-center space-x-5">
      {icon}
      <h1 className="text-3xl font-light">{skill}</h1>
    </div>
  );
}

export default Skill;
