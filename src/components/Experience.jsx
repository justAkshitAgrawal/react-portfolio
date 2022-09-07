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
          description="Developing the latest user-facing features using React.js, 
          Designing a modern highly responsive web-based user interface, 
          Building reusable components and front-end libraries for future use, 
          Translating designs and wireframes into high-quality code."
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
