import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { getSocialLinks } from "../../lib/contentful";

const iconMap = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  twitter: <Twitter size={20} />,
};

export default async function SocialLinks() {
  const links = await getSocialLinks();

  if (!links) return null;

  return (
    <div className="flex items-center gap-4 text-slate-400">
      {Object.entries(links).map(([key, url]) => {
        const iconKey = key.toLowerCase();
        const icon = iconMap[iconKey];
        if (!icon || !url) return null;
        let finalUrl = url;
        if (iconKey === "linkedin" && !url.startsWith("http")) {
          finalUrl = `https://${url}`;
        }

        return (
          <a
            key={key}
            href={finalUrl}
            aria-label={key}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors duration-300"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
