import heroBg from "../../assets/home_hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[520px] md:h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-slate-900/35" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-end md:items-center pb-12 md:pb-0">
        <div className="text-white max-w-[760px]">
            <h2 className="font-semibold tracking-[-0.02em] leading-[1.05]
                text-[30px] xs:text-[34px] sm:text-[44px] md:text-[64px] lg:text-[76px]
                max-w-[18ch] sm:max-w-[22ch] md:max-w-[26ch] break-words">
                Sağlık Bilimlerinde Bilimsel Gelişmeler ve Teknoloji Kongresi
            </h2> 

          <div className="mt-10 mb-10 sm:mb-5 md:mb-0 md:mt-14 text-[16px] sm:text-[18px] md:text-[22px] font-medium text-white/90">
            <div>20–25 Ocak 2026</div>
            <div>Nazım Hikmet Kongre ve Sanat Merkezi, Ankara</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
