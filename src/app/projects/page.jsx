"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "../../components/ui/ProjectCard";
import { useGitHub } from "../../hooks/useGitHub";

const AllProjectsPage = () => {
  const { projects, loading, error } = useGitHub();

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-100 uppercase">
          Tüm Projeler
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Geri Dön
        </Link>
      </div>
      <div>
        {loading && <p>Projeler yükleniyor...</p>}
        {error && <p className="text-red-500">Hata: {error}</p>}
        {!loading &&
          !error &&
          projects.map((repo) => <ProjectCard key={repo.id} repo={repo} />)}
      </div>
    </section>
  );
};

export default AllProjectsPage;
