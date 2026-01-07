"use client";

import React from "react";

const EducationCard = ({ educationList = [] }) => {
  if (!educationList || educationList.length === 0) {
    return (
      <div className="text-gray-500 italic text-sm">
        Eğitim bilgisi eklenmemiş.
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6">
      {educationList.map((edu) => (
        <div
          key={edu.id}
          className="flex flex-col md:flex-row md:items-start justify-between group"
        >
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-yellow-500 tracking-wide">
              {edu.degree}
            </h3>

            <span className="text-base text-gray-200 font-medium mt-0.5">
              {edu.school}
            </span>

            {edu.description && (
              <p className="mt-2 text-xs text-gray-500 max-w-xl leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>

          <div className="mt-1 md:mt-0 text-gray-400 font-mono text-xs md:text-sm whitespace-nowrap">
            {edu.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
