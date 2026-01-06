import React from "react";

const NotFoundPage = ({ navigateTo }) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-8xl md:text-9xl font-bold text-amber-500">404</h1>
      <p className="text-2xl text-slate-400 my-4">¯\_(ツ)_/¯</p>
      <h2 className="text-3xl font-semibold text-slate-300 mb-8">
        Page Not Found
      </h2>
      <button
        onClick={() => navigateTo("home")}
        className="text-amber-400 hover:text-amber-300 transition-colors duration-300 border-b border-amber-400 hover:border-amber-300 pb-1"
      >
        Go back home
      </button>
    </section>
  );
};

export default NotFoundPage;
