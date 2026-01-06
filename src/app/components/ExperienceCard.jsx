// src/app/components/ExperienceCard.jsx
import React from "react";

const ExperienceCard = ({ role, company, duration, description }) => (
  <div className="mb-8">
    <div className="flex flex-col md:flex-row justify-between md:items-start">
      <div>
        <h3 className="font-bold text-lg text-amber-400">{role}</h3>
        <p className="font-semibold text-slate-300">{company}</p>
      </div>
      <p className="text-xs text-slate-400 md:text-right mt-1 md:mt-0">
        {duration}
      </p>
    </div>

    {/* description JSX olabilir (RichText bileşeni ile) */}
    <div className="prose prose-invert prose-lg text-slate-400 max-w-2xl">
      {description}
    </div>
  </div>
);

export default ExperienceCard;
