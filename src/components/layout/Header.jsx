import { Menu, User } from "lucide-react";

const Header = ({ onNavigate, currentPage }) => {
  const isHome = currentPage === "home";

  return (
    <header
      className={
        isHome
          ? "absolute top-0 left-0 right-0 z-50"
          : "sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200"
      }
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <div
          className={[
            "rounded-2xl px-4 sm:px-8 py-4 sm:py-6",
            "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
            isHome ? "text-white" : "bg-gray-50 text-gray-800",
          ].join(" ")}
        >
          <div
            className={[
              isHome
                ? "bg-white/10 backdrop-blur-xl rounded-2xl px-4 sm:px-6 py-3 sm:py-4"
                : "flex-1",
            ].join(" ")}
          >
            <div
              className={[
                "text-xs sm:text-sm font-medium tracking-wide",
                isHome ? "text-white/90" : "text-teal-600",
              ].join(" ")}
            >
              AKAP - ULUSLARARASI AKADEMİK PLATFORM
            </div>

            <h1
              className={[
                "mt-1 font-semibold leading-tight",
                isHome
                  ? "text-xl sm:text-2xl md:text-3xl text-white"
                  : "text-xl sm:text-3xl md:text-4xl text-teal-600",
              ].join(" ")}
            >
              8. ULUSLARARASI SAĞLIK BİLİMLERİ KONGRESİ
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 justify-start lg:justify-end">
            <button
              type="button"
              className={[
                "h-11 sm:h-12 px-4 sm:px-6 rounded-xl flex items-center gap-2 sm:gap-3 font-medium",
                isHome
                  ? "bg-white text-gray-900 hover:bg-white/90"
                  : "bg-teal-600 text-white hover:bg-teal-700",
              ].join(" ")}
            >
              <span className="text-sm sm:text-base">Menü</span>
              <Menu size={20} />
            </button>

            <button
              type="button"
              className={[
                "h-11 sm:h-12 px-4 sm:px-5 rounded-xl border font-medium",
                isHome
                  ? "border-white/60 text-white hover:bg-white/10"
                  : "border-teal-200 text-gray-800 hover:bg-white",
              ].join(" ")}
            >
              EN<span className="ml-1">▼</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate(isHome ? "profile" : "home")}
              className={[
                "h-11 sm:h-12 px-4 sm:px-5 rounded-xl border flex items-center justify-center gap-2",
                isHome
                  ? "border-white/60 text-white hover:bg-white/10"
                  : "border-teal-200 text-gray-800 hover:bg-white",
              ].join(" ")}
            >
              <User size={18} />
              <span className="text-sm">Profil</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
