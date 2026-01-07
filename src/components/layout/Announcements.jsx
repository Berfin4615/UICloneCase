import { ChevronLeft, ChevronRight, Calendar, Pin, MousePointer2 } from "lucide-react";
import annoBg from "../../assets/bg_an.png";

export default function Announcements() {
  return (
    <section className="bg-white py-8 mt-5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <button className="h-9 px-4 text-xs bg-slate-800 text-white rounded-lg">
            Duyurular
          </button>

          <button className="h-9 w-9 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300">
            <ChevronLeft size={16} />
          </button>

          <button className="h-9 w-9 flex items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-300">
            <ChevronRight size={16} />
          </button>
        </div>

        <div
          className="relative w-full overflow-hidden rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${annoBg})` }}
        >
          <div className="absolute inset-0 bg-slate-900/45" />

          <div className="relative px-5 sm:px-10 md:px-12 py-8 sm:py-10 text-white">
            <div className="max-w-[560px]">
              <h3 className="text-[22px] sm:text-2xl leading-tight font-medium">
                Sağlık Bilimlerinde Bilimsel Gelişmeler
                <br />
                ve Teknoloji Kongresi
              </h3>

              <div className="mt-4 flex items-start gap-3 text-white/90">
                <Pin className="mt-1 shrink-0" size={22} />
                <p className="text-[12px] sm:text-[13px] leading-relaxed">
                  Bu kongre, sağlık hizmetlerinin kalitesini artırmaya yönelik yenilikleri,
                  bilimsel kanıta dayalı yaklaşımları ve geleceğin sağlık çözümlerini tartışmak
                  amacıyla düzenlenmiş olup, katılımcılara hem teorik hem de uygulamaya yönelik
                  değerli katkılar sunmaktadır.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-white/90">
                <Calendar size={18} />
                <span className="text-[16px] sm:text-[18px] font-semibold">
                  20–25 Ocak 2026
                </span>
              </div>

              <button
                type="button"
                className="relative inline-flex items-center justify-center mt-5 rounded-full bg-white/90 px-6 py-2 text-[12px] font-semibold text-gray-800 hover:bg-white"
              >
                Detaylar
                <span className="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-white flex items-center justify-center shadow">
                  <MousePointer2 size={14} className="text-gray-800" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
