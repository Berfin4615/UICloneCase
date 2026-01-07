import heroBg from '../../assets/home_hero.png';

const Hero = () => {
    return (
        <div>
            <section className="relative w-full h-[520px] md:h-[800px] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
                    <div className="absolute inset-0 bg-cover bg-center opacity-30" />
                    <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                        <div className="text-white max-w-2xl">
                            <h2 className="font-medium tracking-[-0.02em] leading-[1.05] text-[44px] sm:text-[52px] md:text-[68px]">
                                Sağlık Bilimlerinde
                                <br />
                                Bilimsel Gelişmeler ve
                                <br />
                                Teknoloji Kongresi
                            </h2>
                            <div className="mt-16 space-y-1 text-[23px] md:text-[25px] font-normal">
                                <div>
                                    20–25 Ocak 2026
                                    <br />
                                    Nazım Hikmet Kongre ve Sanat Merkezi, Ankara
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;