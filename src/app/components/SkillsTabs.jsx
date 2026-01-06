"use client";

import React, { useState } from "react";

// İkon Paketleri (Markalar için en geniş kütüphane react-icons'dır)
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaPython,
  FaAws,
  FaJira,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiRedis,
  SiNginx,
  SiPostman,
  SiExpress,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";

// --- İKON EŞLEŞTİRME SÖZLÜĞÜ ---
// Contentful'da 'iconKey' alanına soldaki küçük kelimeyi yazacaksın.
const iconMap = {
  // Frontend
  react: <FaReact size={40} />,
  nextjs: <SiNextdotjs size={40} />,
  tailwind: <SiTailwindcss size={40} />,
  redux: <SiRedux size={40} />,
  html: <FaHtml5 size={40} />,
  css: <FaCss3Alt size={40} />,

  // Backend
  node: <FaNodeJs size={40} />,
  express: <SiExpress size={40} />,
  django: <SiDjango size={40} />,
  flask: <SiFlask size={40} />,

  // Languages
  javascript: <SiJavascript size={40} />,
  typescript: <SiTypescript size={40} />,
  python: <FaPython size={40} />,
  java: <FaJava size={40} />,

  // Databases
  mongodb: <SiMongodb size={40} />,
  postgresql: <SiPostgresql size={40} />,
  mysql: <SiMysql size={40} />,
  redis: <SiRedis size={40} />,

  // DevOps
  docker: <FaDocker size={40} />,
  aws: <FaAws size={40} />,
  github: <TbBrandGithub size={40} />,
  nginx: <SiNginx size={40} />,

  // Tools
  git: <FaGitAlt size={40} />,
  jira: <FaJira size={40} />,
  figma: <FaFigma size={40} />,
  postman: <SiPostman size={40} />,
};

const SkillsTabs = ({ skills = [] }) => {
  // MockData'ndaki kategori sıralamasını ve isimlerini BURADA KORUYORUZ.
  const categories = [
    "Frontend",
    "Backend",
    "Languages",
    "Databases",
    "DevOps",
    "Other Tools",
  ];

  // Varsayılan olarak ilk kategori seçili gelsin
  const [activeTab, setActiveTab] = useState("Frontend");

  // Contentful'dan gelen veriyi, o anki aktif sekmeye göre filtreliyoruz.
  // Contentful'da "Category" alanına "Frontend", "Backend" gibi tam isimleri yazmalısın.
  const filteredSkills = skills.filter((skill) => skill.category === activeTab);

  return (
    <div className="w-full">
      {/* --- SEKMELER (Tasarımın Bozulmadığı Yer) --- */}
      {/* Buradaki CSS sınıfları senin mevcut tasarımına uyumlu hale getirildi */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
              ${
                activeTab === cat
                  ? "bg-yellow-500 text-black" // Seçili Tab Rengi (Resimdeki turuncu/sarı)
                  : "bg-[#1f2937] text-gray-300 hover:bg-gray-700"
              } // Seçili Olmayan Tab Rengi
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- İKONLAR ALANI --- */}
      <div className="bg-[#111827] p-6 rounded-xl border border-gray-800">
        <div className="flex flex-wrap gap-8">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                {/* İkon */}
                <div className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
                  {/* Contentful'dan gelen 'iconKey'i map'ten buluyoruz */}
                  {iconMap[skill.iconKey] || <FaHtml5 size={40} />}
                </div>

                {/* Yetenek İsmi */}
                {/* Tasarımda isimler görünmüyorsa burayı silebilirsin ama durması iyidir */}
                {/* <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300">{skill.name}</span> */}
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              Bu kategoride henüz yetenek eklenmemiş.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
