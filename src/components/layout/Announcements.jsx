import { ChevronLeft, ChevronRight, Calendar, Pin, MousePointer2} from 'lucide-react';
import annoBg from '../../assets/bg_an.png';

export default function Announcements() {
    return (
        <section className="bg-white py-8 mt-5">
            <div className="mb-8 max-w-7xl mx-auto px-6">
                <div className="flex items-center ml-7 gap-4 mb-6">
                    <button className="px-4 py-2 text-xs bg-slate-800 text-white rounded-lg">Duyurular</button>
                    <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                        <ChevronLeft size={15} />
                    </button>
                    <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                        <ChevronRight size={15} />
                    </button>
                </div>

                <div
                    className="relative h-[320px] w-full overflow-hidden rounded-sm bg-cover bg-center"
                    style={{ backgroundImage: `url(${annoBg})` }}
                >
                    <div className="absolute inset-0 " />

                    <div className="relative h-full px-12 py-10 text-white">
                        <div className="max-w-[520px]">
                            <h3 className="text-2xl leading-tight font-normal">
                                Sağlık Bilimlerinde Bilimsel Gelişmeler
                                <br />
                                ve Teknoloji Kongresi
                            </h3>

                            <div className="mt-4 flex items-start gap-3 text-white/90">
                                <Pin size={50} />
                                <p className="text-[12px] leading-relaxed max-w-[900px]">
                                Bu kongre, sağlık hizmetlerinin kalitesini artırmaya yönelik yenilikleri,
                                bilimsel kanıta dayalı yaklaşımları ve geleceğin sağlık çözümlerini tartışmak
                                amacıyla düzenlenmiş olup, katılımcılara hem teorik hem de uygulamaya yönelik
                                değerli katkılar sunmaktadır.
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-3 text-white/90">
                                <Calendar size={18} />
                                <span className="text-[18px] font-medium">20–25 Ocak 2026</span>
                            </div>

                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center mt-4 rounded-full bg-white/90 px-5 py-2 text-[12px] font-medium text-gray-800"
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
