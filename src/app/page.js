import React from "react";
import Link from "next/link";
import { Briefcase, Wrench, GraduationCap } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import ExperienceCard from "@/components/ui/ExperienceCard";
import EducationCard from "@/components/ui/EducationCard";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import RichText from "@/components/ui/RichText";
import {
  getExperienceData,
  getAboutData,
  getSkills,
  getEducationData,
} from "@/lib/contentful";

export default async function Home() {
  const about = await getAboutData();
  const experiencesData = await getExperienceData();
  const skills = await getSkills();
  const educationData = await getEducationData();
  const aboutContent =
    about?.body || about?.fields?.icerik || about?.fields?.body || null;

  return (
    <>
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-slate-100 mb-4">Merhaba! 👋</h1>

        <div className="prose prose-invert prose-lg text-slate-400 max-w-2xl">
          {aboutContent ? (
            <RichText content={aboutContent} />
          ) : (
            <p>
              Hakkımda içeriği şu an yüklenemedi. Lütfen daha sonra tekrar
              deneyin veya{" "}
              <Link
                href="/about"
                className="text-amber-400 hover:text-amber-300"
              >
                Hakkımda
              </Link>{" "}
              sayfasını ziyaret edin.
            </p>
          )}
        </div>

        <div className="mt-6 flex items-center gap-4">
          <span className="text-sm font-medium">Sosyal Medya:</span>
          <SocialLinks />
        </div>

        <div className="mt-8">
          <Link
            href="/about"
            className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            Daha Fazlasını Oku →
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2 whitespace-nowrap uppercase">
            <Briefcase className="text-amber-400" />
            Projeler
          </h2>
          <Link
            href="/projects"
            className="hidden md:inline-flex text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            Tümünü Gör →
          </Link>
        </div>

        <Projects />

        <div className="mt-4 text-right md:hidden">
          <Link
            href="/projects"
            className="text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300"
          >
            Tümünü Gör →
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 uppercase">
          <Briefcase className="text-amber-400" />
          Deneyim
        </h2>

        <div>
          {Array.isArray(experiencesData) && experiencesData.length > 0 ? (
            experiencesData.map((exp, i) => (
              <ExperienceCard
                key={i}
                role={exp.role}
                company={exp.company}
                duration={exp.duration}
                description={
                  exp.description ? <RichText content={exp.description} /> : ""
                }
              />
            ))
          ) : (
            <p className="text-slate-400">Şu an deneyim verisi bulunamadı.</p>
          )}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 uppercase">
          <Wrench className="text-amber-400" />
          Yetenekler
        </h2>
        <Skills skills={skills} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 uppercase">
          <GraduationCap className="text-amber-400" />
          Eğitim
        </h2>
        <div>
          <EducationCard educationList={educationData} />
        </div>
      </section>
    </>
  );
}
