import React from 'react';
import { X, MessageCircle, ShieldCheck } from 'lucide-react';

const DetailModal = ({ item, onClose, isRfx }) => {
  const handleOrder = () => { 
    const phone = '6288989100539'; 
    const text = encodeURIComponent(`Halo Admin RFX Femmora, saya tertarik dengan: *${item.title}* (IDR ${item.price}). Mohon infonya.`); 
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank'); 
  };
  
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop Gelap dengan Blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative bg-luxury-black/90 backdrop-blur-xl border border-glass-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-reveal group">
        
        {/* Tombol Close Elegan */}
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-all border border-white/10">
            <X className="w-5 h-5" />
        </button>

        {/* Bagian Gambar (Kiri) */}
        <div className="md:w-1/2 relative bg-luxury-dark h-64 md:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 z-10" />
          <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} onError={(e) => e.target.src = 'https://placehold.co/600x800/0a0a0c/333?text=No+Image'} />
          
          <div className="absolute bottom-6 left-6 z-20">
             <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-2 border ${isRfx ? 'border-rfx-primary text-rfx-primary bg-rfx-primary/10' : 'border-fem-primary text-fem-primary bg-fem-primary/10'}`}>
                {isRfx ? 'Visual Service' : 'Premium Item'}
             </div>
          </div>
        </div>

        {/* Bagian Konten (Kanan) */}
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col relative overflow-hidden">
          {/* Background Gradient Halus */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${isRfx ? 'from-cyan-500/10' : 'from-pink-500/10'} to-transparent rounded-full blur-[80px] -z-10`} />

          <h2 className="text-3xl md:text-4xl font-rfx text-white mb-2 leading-tight">{item.title}</h2>
          <div className="text-2xl font-light text-white mb-6 tracking-wide">IDR {item.price}</div>
          
          <div className="flex-1 overflow-y-auto mb-8 pr-2 custom-scrollbar">
            <p className="text-silver-text leading-loose font-light text-sm whitespace-pre-line border-l-2 border-white/10 pl-4">
              {item.desc}
            </p>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-2 text-xs text-muted-text">
                <ShieldCheck className="w-4 h-4 text-green-400" /> 
                <span>Garansi Transaksi Aman & Terpercaya</span>
             </div>

             <button onClick={handleOrder} className={`w-full py-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group/btn ${isRfx ? 'bg-white text-black hover:bg-cyan-50' : 'bg-white text-black hover:bg-pink-50'}`}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
