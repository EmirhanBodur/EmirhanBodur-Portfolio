"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Briefcase,
  Info,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  Settings,
  FileText,
  Download,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const mainNavLinks = [
    { name: "Projeler", href: "/projects", icon: <Briefcase size={20} /> },
    { name: "Hakkımda", href: "/about", icon: <Info size={20} /> },
  ];

  const onlineLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kullaniciadi",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kullaniciadi",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/kullaniciadi",
      icon: <Twitter size={20} />,
    },
  ];

  return (
    <header className="flex justify-between items-center relative z-50">
      <Link
        href="/"
        className={`text-xl font-bold text-amber-500 hover:text-amber-400 transition-opacity duration-300 z-50 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        Emirhan Bodur
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-slate-300">
        {mainNavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium hover:text-amber-400 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-500 rounded hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FileText size={14} />
          CV
        </a>
      </nav>

      <div className="md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-slate-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } rounded-t-2xl border-t border-slate-800`}
      >
        <div className="flex flex-col max-h-[85vh] p-6 pt-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 font-bold border border-slate-700">
                EB
              </div>
              <div>
                <h2 className="font-bold text-white">Emirhan Bodur</h2>
                <p className="text-sm text-slate-400">Full Stack Developer</p>
              </div>
            </div>
          </div>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleMenuClose}
            className="flex items-center justify-center gap-2 w-full p-3 mb-6 bg-amber-500/10 border border-amber-500/50 text-amber-500 rounded-lg font-bold hover:bg-amber-500 hover:text-slate-900 transition-all"
          >
            <Download size={20} />
            CV'yi Görüntüle
          </a>

          <nav className="flex flex-col gap-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleMenuClose}
                className={`flex items-center gap-4 p-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors duration-200`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Online
            </h3>
            <div className="flex flex-col gap-2">
              {onlineLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
