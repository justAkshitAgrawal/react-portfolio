import React from "react";
import ExperiencePart from "./ExperiencePart";

function Experience() {
  return (
    <div className="px-20 mt-10" id="experience">
      <h1 className="text-4xl font-semibold ">Experience</h1>
      <div className="max-w-screen-xl py-10">
        <ExperiencePart
          role="ReactJS Intern"
          company="Jobs Territory"
          date="June 2022 - August 2022"
          description="Led a team of interns to develop ATS Portal 'Jobs Market' from scratch using React.JS to allow job seekers
          to find jobs efficiently. 
          Developed and redesigned Jobs Territory website using ReactJS."
        />
        <ExperiencePart
          role="Freelancer"
          company="Front-end"
          date="June 2020 - Present"
          description="Working as a freelance front-end developer since June 2020. Have finished several projects developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages."
        />
      </div>
    </div>
  );
}

export default Experience;
