import { MousePointer2 } from "lucide-react";

export default function Certificates() {
  return (
    <div className="relative min-h-[220px]">
      <div className="absolute left-[26px] top-7 bottom-7 w-px bg-gray-300" />

      <div className="pl-16 pr-10 py-10">
        <div className="relative flex items-start justify-between gap-2">
          <div className="mt-[0]">
            <div className="absolute left-[-44px] -top-[12px] w-3 h-3 rounded-full bg-gray-500 mb-0" />
            <div className="text-[22px] -mt-[20px] -ml-[20px] font-semibold text-gray-800 leading-tight">
              8. Uluslararası Tarımda Sürdürülebilirlik Kongresi
            </div>
            <div className="mt-1 text-[22px] -ml-[20px] text-gray-500 leading-none">20–25 Ocak 2026</div>

            <div className="mt-3 text-[12px] text-gray-600 leading-relaxed max-w-[560px] ml-5 font-semibold">
              “Bu sertifika, 23 Aralık 2025 tarihinde düzenlenen AKAP Uluslararası Ziraat Kongresi kapsamında sunulan akademik çalışmanın resmi onayıdır.”
            </div>
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="relative h-[40px] px-8 rounded-xl bg-gray-600 text-white font-medium shadow-sm"
            >
              Sertifikayı İndir
              <span className="absolute -right-3 -bottom-3 h-7 w-7 rounded-full bg-white flex items-center justify-center shadow">
                <MousePointer2 size={14} className="text-gray-800" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
