import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <div className="bg-slate-800 p-6 rounded-full animate-pulse">
        <FileQuestion size={64} className="text-amber-500" />
      </div>

      <h2 className="text-3xl font-bold text-slate-100">
        Sayfa Bulunamadı veya Hasarlı
      </h2>

      <p className="text-slate-400 max-w-md mx-auto">
        Aradığın sayfa ya silinmiş ya da hiç var olmamış. Bu hata çıktığında
        aşağıdaki iletişim formundan bana bildirirsen benim gelişmemde yardımcı
        olursun!
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-lg hover:bg-amber-400 transition-colors"
      >
        <Home size={20} />
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
