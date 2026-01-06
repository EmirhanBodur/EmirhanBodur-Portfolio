// src/app/components/ProjectsSectionClient.jsx
"use client";

import ProjectCard from "./ProjectCard";
import { useGitHub } from "../hooks/useGitHub";

export default function ProjectsSectionClient() {
  const { projects, loading, error } = useGitHub();

  if (loading) return <p>Projeler yükleniyor...</p>;
  if (error) return <p className="text-red-500">Hata: {error}</p>;

  return (
    <div>
      {projects.slice(0, 3).map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
