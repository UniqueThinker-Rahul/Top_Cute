import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, Phone, MessageCircle, X, MapPin } from 'lucide-react';
import { escortsData } from '../data';
import { EscortProfile } from '../types';

export default function Hyderabad() {
  const [selectedEscort, setSelectedEscort] = useState<EscortProfile | null>(null);
  const featuredProfiles = escortsData.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* 1. Hyderabad Hero Section */}
      <section className="relative w-full flex items-center justify-center bg-luxury-bg overflow-hidden pt-20 pb-10 sm:py-0 min-h-[600px] lg:min-h-[558px]">
        {/* Backgrounds */}
        <div className="block sm:hidden absolute inset-0 z-0 bg-[#0a0d14]">
          <div className="absolute top-0 left-0 w-full h-[55vh]">
            <img src="/Dehradun bhabhi call girl.png" alt="Hyderabad Premium Companion" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
          </div>
        </div>
        <div className="hidden sm:block absolute inset-0 z-0">
          <img src="/Dehradun bhabhi call girl.png" alt="Hyderabad Premium Companion" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 sm:space-y-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 border border-luxury-gold/50 px-4 py-1.5 rounded-full mb-2">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.2em] text-white uppercase">CITY OF PEARLS EXCLUSIVES</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4.5xl md:text-6.5xl font-extrabold text-white leading-tight">
              VIP Companions <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold">in Hyderabad</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-xs sm:text-sm md:text-lg text-zinc-100 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Experience luxury with our premium escort services in the City of Pearls. Enjoy 100% discreet, safe, and elite 5-star hotel outcalls in Hyderabad.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
            <a href="tel:000000000" className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-gradient-to-r from-luxury-gold to-yellow-600 text-black font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-xl transition-all">
              <Phone className="w-4 h-4" /> <span>Direct Booking</span>
            </a>
            <a href="/#main-gallery" className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-[#220810]/70 backdrop-blur-md text-white font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full border border-luxury-gold/25 transition-all">
              <Sparkles className="w-4 h-4 text-luxury-gold" /> <span>View Gallery</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-20 bg-luxury-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">Hyderabad <span className="text-luxury-gold italic">Companions</span></h2></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProfiles.map((escort) => (
              <motion.div key={escort.id} onClick={() => setSelectedEscort(escort)} className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden"><img src={escort.image} alt={escort.name} className="w-full h-full object-cover filter sepia-[0.1]" /></div>
                <div className="p-5 flex justify-between items-center"><p className="font-bold">{escort.name}</p><Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedEscort && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEscort(null)} className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative bg-[#0a0d14] border border-luxury-gold/30 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-72 md:h-full bg-zinc-950">
                <img src={selectedEscort.image} alt={selectedEscort.name} className="absolute inset-0 w-full h-full object-cover" />
                <button onClick={() => setSelectedEscort(null)} className="md:hidden absolute top-4 right-4 bg-black/60 text-white p-2.5 rounded-full"><X className="w-4 h-4" /></button>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                <button onClick={() => setSelectedEscort(null)} className="absolute top-6 right-6 bg-luxury-card text-zinc-400 p-2 rounded-full hidden md:block"><X className="w-4 h-4" /></button>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] tracking-widest text-emerald-400 font-bold uppercase">AVAILABLE IN HYDERABAD</span>
                    <h3 className="font-serif text-3xl font-extrabold text-white">{selectedEscort.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5 bg-luxury-card border border-luxury-gold/15 rounded-2xl p-4">
                    <div><p className="font-sans text-[9px] text-zinc-400 uppercase">Age</p><p className="text-white">{selectedEscort.age} Years</p></div>
                    <div><p className="font-sans text-[9px] text-zinc-400 uppercase">Height</p><p className="text-white">{selectedEscort.height}</p></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a href="tel:000000000" className="flex items-center justify-center gap-2 bg-luxury-gold text-black py-3 rounded-xl"><Phone className="w-4 h-4" /> Call</a>
                  <a href={`https://wa.me/91000000000?text=Hi%20there%2C%20I%20want%20to%20book%20${selectedEscort.name}%20in%20Hyderabad`} className="flex items-center justify-center gap-2 bg-[#220810] text-white py-3 rounded-xl border border-luxury-gold/25"><MessageCircle className="w-4 h-4 text-emerald-500" /> WhatsApp</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}