const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold">AKAP</div>
          <div className="text-sm">
            <div>ULUSLARARASI</div>
            <div>AKADEMİK</div>
            <div>PLATFORM</div>
          </div>
        </div>

        <div className="text-center">
          <div className="font-medium mb-2">Tüm Kongreleri ve Diğer Detayları</div>
          <div className="mb-3">Görüntülemek İçin Siteyi Ziyaret Et</div>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-all">
            www.akap.tr
          </button>
        </div>

        <div className="text-xs text-gray-400">
          Bu sayfa AKAP tarafından yönlendirilmektedir.
        </div>
      </div>
    </footer>
  );
};

export default Footer;