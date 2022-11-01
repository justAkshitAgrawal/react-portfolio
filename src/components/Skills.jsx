import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";

import { SiChakraui, SiTailwindcss } from "react-icons/si";
import Skill from "./Skill";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TbBrandReactNative } from "react-icons/tb";

function Skills() {
  const skills = {
    JavaScript: <FaJsSquare className="w-16 h-16" />,
    ReactJS: <FaReact className="w-16 h-16" />,
    Java: <FaJava className="w-16 h-16" />,
    "React Native": <TbBrandReactNative className="w-16 h-16" />,
    Tailwind: <SiTailwindcss className="w-16 h-16" />,
    HTML5: <FaHtml5 className="w-16 h-16" />,
    CSS3: <FaCss3Alt className="w-16 h-16" />,
    "Chakra UI": <SiChakraui className="w-16 h-16" />,
  };
  return (
    <div className="px-20 mt-20" id="skills">
      <h1 className="text-4xl font-semibold ">Skills</h1>
      <div className="grid max-w-screen-xl pb-10 pt-14 lg:grid-cols-3 gap-x-60 gap-y-10">
        {Object.keys(skills).map((skill) => {
          return <Skill skill={skill} icon={skills[skill]} />;
        })}
      </div>
      <a
        href="https://www.hackerrank.com/certificates/c2913db6b3cb"
        target="_blank"
        rel="noreferrer"
        className="flex items-center pb-10 text-lg transition-all text-gray-100/50 hover:text-gray-100/75 "
      >
        View Certifications
        <AiOutlineArrowRight className="ml-1" />
      </a>
    </div>
  );
}

export default Skills;
