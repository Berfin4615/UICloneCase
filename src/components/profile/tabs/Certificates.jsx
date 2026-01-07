import { MousePointer2 } from "lucide-react";

export default function Certificates() {
  return (
    <div className="min-h-[220px] flex items-start justify-between">
      <div>
        <div className="text-xl font-semibold text-gray-700">
          8. Uluslararası Tarımda Sürdürülebilirlik Kongresi
        </div>
        <div className="text-gray-500">20–25 Ocak 2026</div>
      </div>

      <button
        type="button"
        className="h-[40px] px-8 rounded-xl bg-gray-600 text-white font-medium"
      >
        Sertifikayı İndir
        <span className="absolute mr-30 -mb-0 h-6 w-6 rounded-full bg-white flex items-center justify-center shadow">
            <MousePointer2 size={14} className="text-gray-800" />
        </span>
      </button>
    </div>
  );
}
