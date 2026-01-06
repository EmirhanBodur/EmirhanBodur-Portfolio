// src/app/components/Header.jsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Info,
  ArrowUpRight,
  Settings,
  Globe,
  Github,
  Linkedin,
  Twitter,
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
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "Projeler", href: "/projects", icon: <Briefcase size={20} /> },
    { name: "Hakkımda", href: "/about", icon: <Info size={20} /> },
    {
      name: "Deneyim (404 Test)",
      href: "/deneyim",
      icon: <Briefcase size={20} />,
    }, // 404 Testi için eklendi
  ];

  const onlineLinks = [
    { name: "GitHub", url: "#", icon: <Github size={20} /> },
    { name: "LinkedIn", url: "#", icon: <Linkedin size={20} /> },
    { name: "Twitter", url: "#", icon: <Twitter size={20} /> },
  ];

  return (
    <header className="flex justify-between items-center">
      <Link
        href="/"
        className={`text-xl font-bold text-amber-500 hover:text-amber-400 transition-opacity duration-300 z-50 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        Emirhan Bodur
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6 text-slate-300">
        <Link
          href="/projects"
          className="text-sm font-medium hover:text-amber-400 transition-colors duration-300"
        >
          Projeler
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:text-amber-400 transition-colors duration-300"
        >
          Hakkımda
        </Link>
        <Link
          href="/deneyim"
          className="text-sm font-medium hover:text-amber-400 transition-colors duration-300"
        >
          Deneyim (404 Test)
        </Link>
        <button
          aria-label="Change Language"
          className="hover:text-amber-400 transition-colors duration-300 font-bold text-sm tracking-widest"
        >
          EN
        </button>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-slate-200"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        } rounded-t-2xl border-t border-slate-800`}
      >
        <div className="flex flex-col max-h-[75vh] p-6 pt-8 overflow-y-auto">
          {/* Profile Section */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/40x40/1e293b/f59e0b?text=EB"
                alt="Profil"
                className="rounded-full"
              />
              <div>
                <h2 className="font-bold text-white">Emirhan Bodur</h2>
                <p className="text-sm text-slate-400">Full Stack Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button
                aria-label="Change Language"
                className="hover:text-amber-400 transition-colors duration-300 font-bold text-sm tracking-widest"
              >
                EN
              </button>
              <Settings size={20} />
            </div>
          </div>

          {/* Main Navigation */}
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

          {/* Online Links */}
          <div className="mt-10">
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

          {/* Footer Status */}
          <div className="mt-auto text-center text-sm text-slate-500 pt-6">
            <p>● Müzik çalmıyor</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
