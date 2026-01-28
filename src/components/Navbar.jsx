import React, { useState } from 'react';
import { Home, Palette, ShoppingCart, Star, Lock, LogOut, Menu, X, LayoutGrid } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, onAdminClick, isAdminMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  // Komponen Logo Internal
  const BrandLogo = ({ onClick }) => (
    <div className="relative group cursor-pointer select-none transform transition-transform duration-300 hover:scale-105 flex items-center gap-2" onClick={onClick}>
      <div className="bg-gradient-to-br from-cyan-500 to-pink-500 p-1.5 rounded-lg shadow-lg shrink-0">
         <LayoutGrid className="text-white w-5 h-5" />
      </div>
      <div className="flex items-baseline gap-1 shrink-0">
        <span className="font-rfx text-xl md:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-600 drop-shadow-sm filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">RFX</span>
        <span className="font-femmora font-bold text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-b from-pink-300 to-pink-600 drop-shadow-sm filter drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]">FEMMORA</span>
      </div>
    </div>
  );

  const NavButton = ({ tab, icon: Icon, label, colorClass }) => (
    <button onClick={() => handleNavClick(tab)} className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === tab ? 'bg-slate-800 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-800/30'}`}>
      <Icon className={`w-4 h-4 mr-2 ${activeTab === tab ? colorClass : 'text-slate-500'}`} /> {label}
    </button>
  );

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 font-body shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <BrandLogo onClick={() => handleNavClick('home')} />
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5 backdrop-blur-md">
            <NavButton tab="home" icon={Home} label="Home" colorClass="text-indigo-400" />
            <NavButton tab="rfx" icon={Palette} label="RFX Visual" colorClass="text-cyan-400" />
            <NavButton tab="femmora" icon={ShoppingCart} label="Femmora Store" colorClass="text-pink-400" />
            <NavButton tab="testimoni" icon={Star} label="Testimoni" colorClass="text-yellow-400" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <button 
               onClick={onAdminClick} 
               className={`p-2.5 rounded-xl transition-all duration-300 border flex items-center justify-center ${isAdminMode ? 'bg-gradient-to-r from-red-500 to-orange-500 border-red-400 text-white shadow-lg shadow-red-500/20' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-600'}`} 
               title={isAdminMode ? "Keluar Admin" : "Masuk Admin"}
             >
               {isAdminMode ? <LogOut className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
             </button>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
               {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 p-4 shadow-2xl animate-in slide-in-from-top-5 z-40">
          <div className="flex flex-col space-y-2">
             <NavButton tab="home" icon={Home} label="Home" colorClass="text-indigo-400" />
             <NavButton tab="rfx" icon={Palette} label="RFX Visual" colorClass="text-cyan-400" />
             <NavButton tab="femmora" icon={ShoppingCart} label="Femmora Store" colorClass="text-pink-400" />
             <NavButton tab="testimoni" icon={Star} label="Testimoni" colorClass="text-yellow-400" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
