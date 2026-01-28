import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const UserReviewForm = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ 
        title: name, 
        desc, 
        rating: parseInt(rating), 
        type: 'user_review', 
        imageUrl: `https://ui-avatars.com/api/?name=${name}&background=random` 
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 font-body animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-6 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center border-b border-slate-800 pb-4">
          <Edit className="w-6 h-6 mr-3 text-yellow-400" /> Tulis Ulasan Kamu
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div><label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Nama Kamu</label><input required className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none" value={name} onChange={e => setName(e.target.value)} /></div>
          <div><label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Rating</label><select className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none" value={rating} onChange={e => setRating(e.target.value)}>{[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Bintang</option>)}</select></div>
          <div><label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Komentar</label><textarea required rows="3" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-yellow-500 outline-none" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Ceritakan pengalamanmu..." /></div>
          <div className="flex gap-3 mt-8 pt-4 border-t border-slate-800"><button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl bg-slate-800 text-gray-300">Batal</button><button type="submit" className="flex-1 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-bold">Kirim Ulasan</button></div>
        </form>
      </div>
    </div>
  );
};

export default UserReviewForm;
