"use client";
import React, { useState } from "react";
// lucide-react kütüphanesi yüklü değilse: npm install lucide-react
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      // API'ye istek atıyoruz (Daha önce kurduğumuz Gmail rotası)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMessage("Mesajınız başarıyla iletildi! ✅");
        setFormData({ name: "", email: "", message: "" }); // Formu temizle

        // İsteğe bağlı: 5 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
          setStatus("");
          setResponseMessage("");
        }, 5000);
      } else {
        // Backend'den gelen hata mesajını yakala (error veya message olabilir)
        throw new Error(data.error || data.message || "Bir hata oluştu.");
      }
    } catch (error) {
      console.error("Form Hatası:", error);
      setStatus("error");
      setResponseMessage(
        "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin. ❌"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Adınız
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700 focus:ring-amber-500 focus:border-amber-500 transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            E-posta Adresiniz
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700 focus:ring-amber-500 focus:border-amber-500 transition"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300 mb-2"
        >
          Mesajınız
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full px-4 py-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700 focus:ring-amber-500 focus:border-amber-500 transition"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-slate-900 transition disabled:bg-amber-700 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Gönderiliyor...
            </>
          ) : (
            <>
              Gönder
              <Send size={18} />
            </>
          )}
        </button>
      </div>
      {responseMessage && (
        <div
          className={`mt-4 text-sm ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
