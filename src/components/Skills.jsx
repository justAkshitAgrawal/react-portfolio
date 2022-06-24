import React from "react";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Skill from "./Skill";

function Skills() {
  const skills = {
    "HTML 5": <FaHtml5 className="w-16 h-16" />,
    "CSS 3": <FaCss3Alt className="w-16 h-16" />,
    JavaScript: <FaJsSquare className="w-16 h-16" />,
    ReactJS: <FaReact className="w-16 h-16" />,
    "Tailwind CSS": <SiTailwindcss className="w-16 h-16" />,
  };
  return (
    <div className="px-20 mt-20 ">
      <h1 className="text-4xl font-semibold ">Skills</h1>
      <div className="grid max-w-screen-xl grid-cols-3 py-20 gap-x-60 gap-y-10">
        {Object.keys(skills).map((skill) => {
          return <Skill skill={skill} icon={skills[skill]} />;
        })}
      </div>
    </div>
  );
}

export default Skills;
