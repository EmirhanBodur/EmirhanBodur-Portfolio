import React from "react";
import { Mail } from "lucide-react";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Emirhan Bodur | Portfolio",
  description: "Emirhan Bodur - Kişisel Portfolyo Sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
