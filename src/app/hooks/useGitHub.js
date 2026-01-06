"use client"; // Bu hook, client tarafında state yönettiği için gerekli
import { useState, useEffect } from "react";

// GitHub API'sinden repoları çeken asenkron fonksiyon
const fetchGitHubRepos = async (token) => {
  try {
    const response = await fetch(
      "https://api.github.com/user/repos?sort=pushed&per_page=100",
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("GitHub API'sinden projeler alınamadı.");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// GitHub verilerini yönetmek için özel hook
export const useGitHub = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub token'ını buraya yapıştır
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  useEffect(() => {
    const loadProjects = async () => {
      if (!GITHUB_TOKEN) {
        setError("GitHub token bulunamadı.");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchGitHubRepos(GITHUB_TOKEN);
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return { projects, loading, error };
};
