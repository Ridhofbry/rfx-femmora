import React from 'react';
import { Trash2, Star } from 'lucide-react';

const TestiCard = ({ item, onDelete, isAdmin }) => (
  <div className="font-body relative bg-slate-900/60 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group">
     {isAdmin && <button onClick={() => onDelete(item.id)} className="absolute top-4 right-4 text-slate-600 hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>}
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-[2px] shadow-lg shrink-0">
        <img src={item.imageUrl} className="w-full h-full rounded-full object-cover bg-slate-900 border-2 border-slate-900" alt="user" onError={(e) => e.target.src = 'https://ui-avatars.com/api/?name=User&background=random'} />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg font-femmora tracking-wide">{item.title}</h4>
        <div className="flex text-yellow-400 mt-1 gap-1">
          {Array.from({length: item.rating || 5}).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
        </div>
      </div>
    </div>
    <div className="relative">
      <span className="absolute -top-4 -left-2 text-6xl text-slate-800 font-serif opacity-50 z-0">"</span>
      <p className="text-slate-300 text-base leading-relaxed relative z-10 pl-2 italic font-light">{item.desc}</p>
    </div>
  </div>
);
export default TestiCard;
