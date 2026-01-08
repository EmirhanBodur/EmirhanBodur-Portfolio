import React from "react";
import { Mail } from "lucide-react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  metadataBase: new URL("https://emirhanbodur.dev"),

  title: {
    default: "Emirhan Bodur | Fullstack Developer",
    template: "%s | Emirhan Bodur",
  },

  description:
    "Modern web ve mobil uygulamalar geliştiren Fullstack Developer. Next.js, React, Node.js ve modern teknolojilerle geliştirdiğim projelerimi inceleyin.",

  keywords: [
    "Emirhan Bodur",
    "Fullstack Developer",
    "Yazılım Geliştirici",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "emirhanbodur.dev",
  ],

  authors: [{ name: "Emirhan Bodur", url: "https://emirhanbodur.dev" }],

  openGraph: {
    title: "Emirhan Bodur | Fullstack Developer",
    description:
      "Modern web teknolojileriyle geliştirdiğim projeler ve yeteneklerim.",
    url: "https://emirhanbodur.dev",
    siteName: "Emirhan Bodur Portfolio",
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Emirhan Bodur | Fullstack Developer",
    description: "Projelerimi ve yeteneklerimi inceleyin.",
    creator: "@emirhanndev",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <style>{`
          body {
            font-family: 'IBM Plex Mono', monospace;
          }
        `}</style>
      </head>

      <body className="bg-slate-900 text-slate-300 antialiased">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Header */}
          <Header />

          <hr className="border-t-2 border-amber-500 mt-4 mb-12" />

          <main>{children}</main>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2 uppercase">
              <Mail className="text-amber-500" />
              İletişim
            </h2>

            <ContactForm />
          </section>

          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
