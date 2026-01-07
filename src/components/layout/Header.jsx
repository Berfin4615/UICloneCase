import { Menu, User } from 'lucide-react';

const Header = ({ onNavigate, currentPage }) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          <div className="text-teal-400 text-sm font-medium">
            AKAP - ULUSLARARASI AKADEMİK PLATFORM
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">
            8. ULUSAL{' '}
            <span className={currentPage === 'profile' ? 'text-teal-400' : 'text-white'}>
              SAĞLIK BİLİMLERİ KONGRESİ
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded-lg flex items-center gap-2 transition-all">
            <Menu size={20} />
            Menü
          </button>
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-white/10 transition-all">
            EN ▼
          </button>
          <button
            onClick={() => onNavigate(currentPage === 'home' ? 'profile' : 'home')}
            className="px-4 py-2 border border-white rounded-lg hover:bg-white/10 transition-all flex flex-col items-center"
          >
            <User size={20} />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;