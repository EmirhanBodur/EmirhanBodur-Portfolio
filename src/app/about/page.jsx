// src/app/about/page.jsx
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAboutData, RichText } from "@/lib/contentful"; // Yeni fonksiyon ve bileşeni import et

// Hata durumunda gösterilecek olan bileşen
const ErrorMessage = () => (
  <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
    <p className="font-bold text-red-400">⚠️ İçerik Yüklenemedi</p>
    <p className="mt-2 text-sm text-red-300">
      "Hakkımda" içeriği getirilirken bir sorun oluştu. Lütfen daha sonra tekrar
      deneyin veya Contentful yapılandırmanızı kontrol edin.
    </p>
  </div>
);

export default async function AboutPage() {
  const aboutData = await getAboutData();

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-100 uppercase">
          Hakkımda
        </h2>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          Geri Dön
        </Link>
      </div>
      <div className="prose prose-invert prose-lg text-slate-400">
        {aboutData ? <RichText content={aboutData.body} /> : <ErrorMessage />}
      </div>
    </section>
  );
}
