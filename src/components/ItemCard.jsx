import React from 'react';
import { Trash2 } from 'lucide-react';

const ItemCard = ({ item, onClick, onDelete, isAdmin, type }) => {
  const isRfx = type === 'rfx'; 
  const borderColor = isRfx ? 'group-hover:border-cyan-500/50' : 'group-hover:border-pink-500/50'; 
  const shadowColor = isRfx ? 'group-hover:shadow-cyan-500/20' : 'group-hover:shadow-pink-500/20';
  
  return (
    <div onClick={() => onClick(item)} className={`font-body group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 transition-all duration-500 hover:-translate-y-2 ${borderColor} hover:shadow-2xl ${shadowColor} flex flex-col h-full cursor-pointer`}>
      {isAdmin && (
        <button onClick={(e) => { e.stopPropagation(); onDelete(item.id); }} className="absolute top-3 right-3 z-20 bg-red-500/90 hover:bg-red-600 p-2.5 rounded-xl text-white backdrop-blur-sm shadow-lg transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
          <Trash2 className="w-4 h-4" />
        </button>
      )}
      <div className="aspect-[4/5] relative overflow-hidden bg-slate-950">
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 z-10`} />
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.target.src = 'https://placehold.co/400x500/1e293b/white?text=No+Image'; }} />
        <div className="absolute top-3 left-3 z-10">
          <div className={`px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 text-xs font-bold text-white shadow-xl ${isRfx ? 'bg-cyan-900/80 text-cyan-200' : 'bg-pink-900/80 text-pink-200'}`}>IDR {item.price}</div>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1 relative z-20 -mt-12">
        <div className="bg-slate-800/90 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-xl flex-1 flex flex-col hover:bg-slate-800 transition-colors">
          <h3 className={`text-lg font-bold text-white mb-2 leading-tight ${isRfx ? 'font-rfx tracking-wide' : 'font-femmora tracking-normal'}`}>{item.title}</h3>
          <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-1 font-light leading-relaxed">{item.desc}</p>
          <div className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden ${isRfx ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white' : 'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white'}`}>
            <span className="relative z-10 flex items-center gap-2">Detail & Order</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
