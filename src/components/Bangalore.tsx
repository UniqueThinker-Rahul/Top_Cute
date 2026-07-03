import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Star, Sparkles, ChevronDown, HelpCircle, Phone, MessageCircle, X, Ruler, Languages, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { escortsData } from '../data';
import { EscortProfile } from '../types';

export default function Bangalore() {
  const [selectedEscort, setSelectedEscort] = useState<EscortProfile | null>(null);
  const featuredProfiles = escortsData.slice(0, 4);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center bg-luxury-bg overflow-hidden pt-20 pb-10 sm:py-0 min-h-[600px] lg:min-h-[558px]">
        <div className="absolute inset-0 z-0 bg-[#0a0d14]">
          <div className="absolute top-0 left-0 w-full h-[55vh] sm:h-full">
            <img src="/image18.png" alt="Bangalore Premium Companion" className="w-full h-full object-cover object-top sm:object-center" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6 sm:space-y-8 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 border border-luxury-gold/50 px-4 py-1.5 rounded-full mb-2">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.2em] text-white uppercase drop-shadow-md">IT HUB EXCLUSIVES</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4.5xl md:text-6.5xl font-extrabold text-white leading-tight">
              Elite Escort Service <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold">in Bangalore</span>
            </h1>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-sans text-xs sm:text-sm md:text-lg text-zinc-100 max-w-2xl mx-auto font-light leading-relaxed px-2">
            Find top-class independent VIP models in Bangalore. We provide premium outcall services for corporate clients, business travelers, and elite gentlemen in the IT capital of India.
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4 sm:px-0">
            <a href="tel:000000000" className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-gradient-to-r from-luxury-gold to-yellow-600 text-black font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-xl transition-all duration-300">
              <Phone className="w-4 h-4" /> <span>Direct Booking</span>
            </a>
            <Link to="/escorts" className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-[#220810]/70 backdrop-blur-md text-white font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full border border-luxury-gold/25 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-luxury-gold" /> <span>View Gallery</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 sm:py-24 bg-zinc-50 text-zinc-900 border-y border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-amber-700 uppercase block">BANGALORE LUXURY</span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-zinc-900 leading-tight">Premium Escorts <br /><span className="text-amber-600 italic">in Bangalore</span></h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
            <div className="font-sans text-sm sm:text-base text-zinc-700 font-light leading-relaxed space-y-4">
              <p>Bangalore is the bustling heart of India's technology sector. For high-profile business professionals and elite travelers visiting for work or leisure, our agency provides the perfect relaxation.</p>
              <p>We offer sophisticated companionship that blends seamlessly with Bangalore’s modern lifestyle. All outcalls are handled with total privacy to ensure your stay remains comfortable and stress-free.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-zinc-200">
              <img src="/image18.png" alt="Bangalore Elite Hospitality" className="w-full h-full object-cover filter sepia-[0.1]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-20 sm:py-24 bg-luxury-bg border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">Bangalore <span className="text-luxury-gold italic">Companions</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProfiles.map((escort) => (
              <motion.div key={escort.id} onClick={() => setSelectedEscort(escort)} className="group bg-white rounded-2xl overflow-hidden cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                  <img src={escort.image} alt={escort.name} className="w-full h-full object-cover filter sepia-[0.1]" />
                </div>
                <div className="p-5 flex justify-between items-center text-zinc-900">
                  <div><p className="font-bold">{escort.name}, {escort.age}</p></div>
                  <div className="bg-zinc-50 py-1 px-2.5 rounded-lg flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" /> <span className="font-bold text-xs">{escort.rating}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}