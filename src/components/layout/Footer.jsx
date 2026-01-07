import { MousePointer2 } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-[#1e2a33] text-white px-4 sm:px-6 py-6">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-white/60" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4 w-full lg:w-[280px] justify-center lg:justify-start">
                <div className="text-4xl sm:text-5xl font-bold tracking-wide">
                    AKAP<span className="font-thin">|</span>
                </div>
                <div className="text-[13px] sm:text-[15px] leading-[1.2] opacity-90">
                    <div>ULUSLARARASI</div>
                    <div>AKADEMİK</div>
                    <div>PLATFORM</div>
                </div>
                </div>

                <div className="flex-1 text-center">
                <div className="font-semibold text-sm sm:text-base">
                    Tüm Kongreleri ve Diğer Detayları
                </div>
                <div className="text-sm mt-1">
                    Görüntülemek İçin Siteyi Ziyaret Et
                </div>

                <button
                    type="button"
                    className="relative mt-3 bg-white text-[#1e2a33] px-10 py-2 rounded-full font-semibold text-sm shadow-sm hover:bg-white/90 transition"
                >
                    www.akap.tr
                    <span className="absolute -right-3 -bottom-2 h-7 w-7 rounded-full bg-white flex items-center justify-center shadow">
                    <MousePointer2 size={14} className="text-gray-800" />
                    </span>
                </button>
                </div>

                <div className="w-full lg:w-[280px] text-center lg:text-right italic text-[11px] text-gray-300">
                Bu sayfa AKAP tarafından yönlendirilmektedir.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
