import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const EditHomeModal = ({ currentData, onSubmit, onClose }) => {
  const [story, setStory] = useState(currentData?.story || ''); 
  const [whyJoin, setWhyJoin] = useState(currentData?.whyJoin || ''); 
  const [rfxImage, setRfxImage] = useState(currentData?.rfxImage || ''); 
  const [femmoraImage, setFemmoraImage] = useState(currentData?.femmoraImage || '');
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    onSubmit({ story, whyJoin, rfxImage, femmoraImage }); 
    onClose(); 
  };
  
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 font-body animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center border-b border-slate-800 pb-4"><Edit className="w-5 h-5 mr-3 text-yellow-400" /> Edit Konten Home</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
             <div className="col-span-2"><label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Cerita (Paragraf 1)</label><textarea className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white h-24 focus:border-cyan-500 outline-none" value={story} onChange={e => setStory(e.target.value)} /></div>
             <div className="col-span-2"><label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">Alasan (Paragraf 2)</label><textarea className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white h-24 focus:border-cyan-500 outline-none" value={whyJoin} onChange={e => setWhyJoin(e.target.value)} /></div>
             <div><label className="block text-xs font-semibold text-cyan-400 mb-2 uppercase">URL Foto RFX (Kiri/Atas)</label><input className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 outline-none text-xs" value={rfxImage} onChange={e => setRfxImage(e.target.value)} placeholder="https://..." /></div>
             <div><label className="block text-xs font-semibold text-pink-400 mb-2 uppercase">URL Foto Femmora (Kanan/Bawah)</label><input className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-pink-500 outline-none text-xs" value={femmoraImage} onChange={e => setFemmoraImage(e.target.value)} placeholder="https://..." /></div>
          </div>
          <div className="flex gap-3 pt-4 border-t border-slate-800"><button type="button" onClick={onClose} className="flex-1 py-3 rounded-xl bg-slate-800 text-gray-400">Batal</button><button type="submit" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold">Simpan Perubahan</button></div>
        </form>
      </div>
    </div>
  );
};

export default EditHomeModal;
