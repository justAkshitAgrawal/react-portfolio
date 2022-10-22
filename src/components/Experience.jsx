import React from "react";
import ExperiencePart from "./ExperiencePart";

function Experience() {
  return (
    <div className="px-20 mt-10" id="experience">
      <h1 className="text-4xl font-semibold ">Experience</h1>
      <div className="max-w-screen-xl py-10 pt-16">
        <ExperiencePart
          role="ReactJS Intern"
          company="Jobs Territory"
          date="June 2022 - August 2022"
          description="Led a team of interns to develop ATS Portal and a Job Search Market from scratch using ReactJS to allow job seekers
          to find jobs efficiently. 
          Developed and redesigned Jobs Territory website using ReactJS."
        />
      </div>
    </div>
  );
}

export default Experience;
