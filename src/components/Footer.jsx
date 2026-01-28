import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-32 bg-slate-950 py-16 font-body">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-cyan-500 to-pink-500 p-2 rounded-xl shadow-lg">
            <LayoutGrid className="text-white w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            RFX <span className="font-femmora text-pink-500">FEMMORA</span>
          </h2>
        </div>
        <p className="text-slate-500 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Partner terbaikmu dalam mewujudkan visual impian dan menikmati hiburan premium tanpa rasa was-was.
        </p>
        <div className="flex justify-center gap-10 text-slate-400 text-sm font-bold tracking-wide">
          <a href="#" className="hover:text-cyan-400 transition-colors transform hover:scale-110">Instagram</a>
          <a href="#" className="hover:text-pink-400 transition-colors transform hover:scale-110">WhatsApp</a>
          <a href="#" className="hover:text-indigo-400 transition-colors transform hover:scale-110">Discord</a>
        </div>
        <p className="text-slate-800 text-xs mt-16 font-semibold">
          © 2026 RFX Femmora Collaboration. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
