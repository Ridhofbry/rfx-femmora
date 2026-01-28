import React, { useState } from 'react';
import { Home, Palette, ShoppingCart, Star, Menu, X, LayoutGrid } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  // Logo Mewah (Gradient Gold & Cyan)
  const BrandLogo = ({ onClick }) => (
    <div className="relative group cursor-pointer select-none flex items-center gap-3" onClick={onClick}>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-glass-border flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500">
         <LayoutGrid className="text-rfx-primary w-5 h-5 group-hover:scale-110 transition-transform" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-rfx text-lg tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-silver-text to-white leading-none mb-0.5">RFX</span>
        <span className="font-femmora text-xs tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-fem-primary to-purple-400 leading-none">FEMMORA</span>
      </div>
    </div>
  );

  const NavButton = ({ tab, label }) => {
    const isActive = activeTab === tab;
    return (
      <button 
        onClick={() => handleNavClick(tab)} 
        className={`relative px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${isActive ? 'text-white' : 'text-muted-text hover:text-white'}`}
      >
        {isActive && (
            <span className="absolute inset-0 bg-glass-border rounded-full blur-md opacity-50"></span>
        )}
        <span className="relative z-10">{label}</span>
        {isActive && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></span>}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-luxury-black/80 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          <BrandLogo onClick={() => handleNavClick('home')} />
          
          {/* Desktop Menu (Clean Text Only) */}
          <div className="hidden lg:flex items-center gap-2 p-1">
            <NavButton tab="home" label="Home" />
            <NavButton tab="rfx" label="Visual" />
            <NavButton tab="femmora" label="Store" />
            <NavButton tab="testimoni" label="Stories" />
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-silver-text hover:text-white transition-colors">
             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Glass Overlay) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-luxury-black/95 backdrop-blur-xl border-b border-glass-border p-6 shadow-2xl animate-in slide-in-from-top-5 z-40 flex flex-col gap-4">
             <button onClick={() => handleNavClick('home')} className="text-left text-silver-text hover:text-cyan-400 font-rfx text-xl py-2 border-b border-white/5">Home</button>
             <button onClick={() => handleNavClick('rfx')} className="text-left text-silver-text hover:text-cyan-400 font-rfx text-xl py-2 border-b border-white/5">Visual Services</button>
             <button onClick={() => handleNavClick('femmora')} className="text-left text-silver-text hover:text-pink-400 font-rfx text-xl py-2 border-b border-white/5">Premium Store</button>
             <button onClick={() => handleNavClick('testimoni')} className="text-left text-silver-text hover:text-yellow-400 font-rfx text-xl py-2">Testimonials</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
