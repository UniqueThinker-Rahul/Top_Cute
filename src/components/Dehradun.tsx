import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Star, Sparkles, ChevronDown, HelpCircle, Phone, MessageCircle, X, Ruler, Languages, MapPin } from 'lucide-react';
import { escortsData, faqData } from '../data';
import { EscortProfile } from '../types';

export default function Dehradun() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [selectedEscort, setSelectedEscort] = useState<EscortProfile | null>(null);

  // Dehradun पेज के लिए टॉप 4 प्रोफाइल्स
  const featuredProfiles = escortsData.slice(0, 4);

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Dehradun Hero Section */}
      <section
        id="home"
        className="relative w-full flex items-center justify-center bg-luxury-bg overflow-hidden pt-20 pb-10 sm:py-0 min-h-[600px] lg:min-h-[558px]"
      >
        {/* Mobile View Background */}
        <div className="block sm:hidden absolute inset-0 z-0 bg-[#0a0d14]">
          <div className="absolute top-0 left-0 w-full h-[55vh]">
            <img
              src="/Call girls number in dehradun.png"
              alt="Dehradun Premium Companion"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
          </div>
        </div>

        {/* Desktop View Background */}
        <div className="hidden sm:block absolute inset-0 z-0">
          <img
            src="/Call girls number in dehradun.png"
            alt="Dehradun Premium Companion"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 select-none mt-10 sm:mt-0 py-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-luxury-gold/20 border border-luxury-gold/50 px-4 py-1.5 rounded-full mb-2">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              <span className="font-sans text-[10px] sm:text-xs font-black tracking-[0.2em] text-white uppercase drop-shadow-md">
                MOUNTAIN ESCAPES EXCLUSIVES
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4.5xl md:text-6.5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
              Premium Escort Service <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold drop-shadow-sm">
                in Dehradun
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm md:text-lg text-zinc-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-2"
          >
            Experience luxury and elegance with our exclusive VIP companions in Dehradun. 100% verified, discreet, and available for outcalls at 5-star hotels and mountain resorts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4 sm:px-0"
          >
            <a
              href="tel:000000000"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-110 text-black font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Direct Booking</span>
            </a>

            {/* Updated link for Single Page */}
            <a
              href="/#main-gallery"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-[#220810]/70 backdrop-blur-md hover:bg-[#220810]/95 text-white font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full border border-luxury-gold/25 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span>View Gallery</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Dehradun Intro Section */}
      <section className="py-20 sm:py-24 bg-zinc-50 text-zinc-900 border-y border-zinc-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-amber-700 uppercase block">
              DIGNIFIED LUXURY TOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-zinc-900 leading-tight">
              Premium Escorts <br />
              <span className="text-amber-600 italic">in Dehradun</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
            
            <div className="font-sans text-sm sm:text-base text-zinc-700 font-light leading-relaxed space-y-4">
              <p>
                Dehradun is home to pristine mountain scenery, exclusive hotels, and high-class retreats. 
                Whether you are a busy businessman staying at a prime heritage resort or an elite traveler exploring the majestic foothills near Mussoorie, complete luxury remains incomplete without delightful companionship.
              </p>
              <p>
                Our Dehradun agency ensures 100% discretion and supplies well-educated, beautiful models for your personal entertainment, corporate events, and relaxing getaways.
              </p>
            </div>

            <div className="pt-2">
              <a href="/#main-gallery" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 hover:text-amber-900 transition-colors duration-200 group">
                <span>Browse our curated collection</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl aspect-[4/3] bg-zinc-200">
              <img
                src="/Dehradun call girls near me.png"
                alt="Dehradun Elite Suite Hospitality"
                className="w-full h-full object-cover object-center filter sepia-[0.1] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-lg font-bold">5-Star Hotel Outcalls in Dehradun</p>
                <p className="font-sans text-xs text-zinc-200">Directly dispatched to your premium room suite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Profiles Grid for Dehradun */}
      <section className="py-20 sm:py-24 bg-luxury-bg border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase block">
              DEHRADUN ESCORT ROSTER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Featured <span className="text-luxury-gold italic">Companions</span>
            </h2>
            <div className="h-[1px] w-16 bg-luxury-gold mx-auto" />
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              Dazzling personalities, beautiful styling, and complete devotion ready to meet you in Dehradun.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProfiles.map((escort) => (
              <motion.div
                key={escort.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedEscort(escort)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-200 transition-all duration-300 shadow-xl flex flex-col h-full cursor-pointer hover:border-luxury-gold/50"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                  <img src={escort.image} alt={escort.name} className="w-full h-full object-cover filter sepia-[0.1]" />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-black font-sans text-[9px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-md shadow-md z-20">VIP SELECT</div>
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="font-serif text-xl font-bold text-white block drop-shadow-md">{escort.name}, {escort.age}</span>
                    <span className="font-sans text-[10px] text-zinc-350 tracking-widest uppercase block mt-0.5 drop-shadow-md">Measurements: {escort.measurements}</span>
                  </div>
                </div>
                <div className="p-5 bg-white flex justify-between">
                  <div className="space-y-0.5 text-left text-zinc-900">
                    <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">LANGUAGES</p>
                    <p className="font-sans text-xs text-zinc-700 truncate max-w-[140px]">{escort.languages.join(', ')}</p>
                  </div>
                  <div className="text-right flex items-center gap-1 bg-zinc-50 border border-zinc-150 py-1 px-2.5 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold shrink-0" />
                    <span className="font-sans text-xs font-bold text-zinc-800">{escort.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* MODAL SHEET FOR DEHRADUN */}
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
                    <span className="font-sans text-[10px] tracking-widest text-emerald-400 font-bold uppercase">AVAILABLE IN DEHRADUN</span>
                    <h3 className="font-serif text-3xl font-extrabold text-white">{selectedEscort.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5 bg-luxury-card border border-luxury-gold/15 rounded-2xl p-4">
                    <div><p className="font-sans text-[9px] text-zinc-400 uppercase">Age</p><p className="text-white">{selectedEscort.age} Years</p></div>
                    <div><p className="font-sans text-[9px] text-zinc-400 uppercase">Height</p><p className="text-white">{selectedEscort.height}</p></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a href="tel:000000000" className="flex items-center justify-center gap-2 bg-luxury-gold text-black py-3 rounded-xl"><Phone className="w-4 h-4" /> Call</a>
                  <a href={`https://wa.me/91000000000?text=Hi%20there%2C%20I%20want%20to%20book%20${selectedEscort.name}%20in%20Dehradun`} className="flex items-center justify-center gap-2 bg-[#220810] text-white py-3 rounded-xl border border-luxury-gold/25"><MessageCircle className="w-4 h-4 text-emerald-500" /> WhatsApp</a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}