import React from "react";

const ProjectCard = ({ repo }) => {
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    return new Date(isoDate).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mb-8">
      <h3 className="font-bold text-lg text-amber-400 mb-1 hover:underline">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p className="text-slate-400 mb-2 text-sm">
        {repo.description || "Açıklama yok."}
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        {repo.topics?.map((topic) => (
          <span
            key={topic}
            className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
          >
            {topic}
          </span>
        ))}
      </div>
      <p className="text-xs text-slate-500">
        Son Güncelleme: {formatDate(repo.pushed_at)}
      </p>
    </div>
  );
};

export default ProjectCard;
