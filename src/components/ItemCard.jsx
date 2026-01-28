import React from 'react';
import { Trash2, ArrowUpRight } from 'lucide-react';

const ItemCard = ({ item, onClick, onDelete, isAdmin, type }) => {
  const isRfx = type === 'rfx'; 
  
  return (
    <div 
      onClick={() => onClick(item)} 
      className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
    >
      {/* Tombol Hapus (Hanya muncul jika Admin Login lewat Secret Door) */}
      {isAdmin && (
        <button onClick={(e) => { e.stopPropagation(); onDelete(item.id); }} className="absolute top-3 right-3 z-30 bg-red-500/80 hover:bg-red-600 p-2 rounded-lg text-white backdrop-blur-md transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      )}

      {/* Gambar */}
      <div className="aspect-[4/5] relative bg-luxury-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
          onError={(e) => { e.target.src = 'https://placehold.co/400x500/0a0a0c/333?text=No+Preview'; }} 
        />
        
        {/* Harga (Tag Minimalis) */}
        <div className="absolute top-4 left-4 z-20">
          <div className="px-3 py-1.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-widest text-white uppercase">
            IDR {item.price}
          </div>
        </div>
      </div>

      {/* Konten (Overlay Kaca di Bawah) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className={`text-xl font-bold text-white mb-2 leading-tight ${isRfx ? 'font-rfx' : 'font-femmora'}`}>
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-2 mb-4 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {item.desc}
        </p>
        
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Lihat Detail <ArrowUpRight className="w-3 h-3 text-white" />
        </div>
        
        {/* Garis Aksen Bawah */}
        <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ${isRfx ? 'bg-rfx-primary' : 'bg-fem-primary'}`} />
      </div>
    </div>
  );
};

export default ItemCard;
