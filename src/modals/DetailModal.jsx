import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const DetailModal = ({ item, onClose, isRfx }) => {
  const handleOrder = () => { 
    const phone = '6288989100539'; 
    const text = encodeURIComponent(`Halo Admin RFX Femmora, saya ingin order: *${item.title}* seharga IDR ${item.price}. Mohon infonya.`); 
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank'); 
  };
  
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-pop">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-slate-950/50 rounded-full text-white hover:bg-red-500 transition-colors">
            <X className="w-5 h-5" />
        </button>
        <div className="md:w-1/2 aspect-square md:aspect-auto bg-slate-950">
          <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.title} onError={(e) => e.target.src = 'https://placehold.co/400x500/1e293b/white?text=No+Image'} />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col">
          <div className={`text-sm font-bold mb-2 uppercase tracking-widest ${isRfx ? 'text-cyan-400' : 'text-pink-400'}`}>
            {isRfx ? 'Creative Service' : 'Premium Item'}
          </div>
          <h2 className="text-3xl font-black text-white mb-2 leading-tight font-rfx">{item.title}</h2>
          <div className="text-2xl font-bold text-white mb-6">IDR {item.price}</div>
          <div className="flex-1 overflow-y-auto mb-6 pr-2">
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">{item.desc}</p>
          </div>
          <button onClick={handleOrder} className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] shadow-xl ${isRfx ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-cyan-500/20' : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-pink-500/20'}`}>
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Order Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
