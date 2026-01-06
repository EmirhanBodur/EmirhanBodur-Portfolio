import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="mt-20 pt-8 border-t border-slate-800 flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
      <p className="text-sm text-slate-400 text-center md:text-left">
        &copy; {new Date().getFullYear()} Emirhan Bodur. Tüm hakları saklıdır.
      </p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
