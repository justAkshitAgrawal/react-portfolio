import React from "react";

function ExperiencePart({ role, company, date, description }) {
  return (
    <div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl">
          {role} - {company} ({date})
        </h1>
        <h1 className="text-[#F8F8F8]/80">{description}</h1>
      </div>
      <hr className="my-12" />
    </div>
  );
}

export default ExperiencePart;
