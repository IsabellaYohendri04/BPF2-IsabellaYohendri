import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-sky-100 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-sky-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-2xl w-full text-center bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl p-10 md:p-14">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 border border-emerald-200 mb-6 shadow-md">
          <span className="text-5xl">🌐</span>
        </div>

        <h1 className="text-7xl md:text-8xl font-extrabold text-emerald-500 tracking-tight drop-shadow-sm">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-slate-800">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mt-4 text-slate-600 max-w-lg mx-auto leading-relaxed text-base md:text-lg">
          Maaf, halaman yang kamu cari mungkin telah dipindahkan, dihapus,
          atau URL yang dimasukkan tidak benar.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium transition-all duration-300"
          >
            Kembali
          </button>

          <Link
            to="/"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Ke Beranda
          </Link>
        </div>

        <div className="mt-10 text-sm text-slate-400 tracking-wide">
          Error Code: PAGE_NOT_FOUND
        </div>
      </div>
    </div>
  );
}