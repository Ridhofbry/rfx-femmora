import React from 'react';
import { Trash2 } from 'lucide-react';

const GalleryCard = ({ item, onDelete, isAdmin }) => (
  <div className="relative group rounded-2xl overflow-hidden cursor-pointer">
    {isAdmin && <button onClick={() => onDelete(item.id)} className="absolute top-2 right-2 z-20 bg-red-500/90 p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-all"><Trash2 className="w-4 h-4" /></button>}
    <img src={item.imageUrl} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" alt={item.title} />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
      <p className="text-white text-sm font-bold">{item.title}</p>
    </div>
  </div>
);
export default GalleryCard;
