import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Star, Sparkles, ChevronDown, HelpCircle, Phone, MessageCircle, X, Ruler, Languages } from 'lucide-react';
import { escortsData, faqData, featuresData } from '../data';
import { EscortProfile } from '../types';

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [selectedEscort, setSelectedEscort] = useState<EscortProfile | null>(null);

  // Take exactly 4 profiles for the Featured Grid
  const featuredProfiles = escortsData.slice(0, 4);

  const toggleFAQ = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section
        id="home"
        className="relative w-full flex items-center justify-center bg-luxury-bg overflow-hidden pt-20 pb-10 sm:py-0 min-h-[600px] lg:min-h-[558px]"
      >
        <div className="block sm:hidden absolute inset-0 z-0 bg-[#0a0d14]">
          <div className="absolute top-0 left-0 w-full h-[55vh]">
            <img
              src="/image1.png"
              alt="Premium Companion Backdrop"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/80 to-transparent" />
          </div>
        </div>

        <div className="hidden sm:block absolute inset-0 z-0">
          <img
            src="/image22.png"
            alt="Premium Companion Backdrop"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-luxury-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-card-light/10 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 select-none mt-10 sm:mt-0 py-6 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
           <span className="font-sans text-[10px] sm:text-xs md:text-sm font-black tracking-[0.3em] text-white uppercase block animate-pulse drop-shadow-md">
              DEHRADUN'S PREMIER HOSTESS AGENCY
            </span>
            <h1 className="font-serif text-3xl sm:text-4.5xl md:text-6.5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
              Premium Dehradun <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-yellow-400 to-luxury-gold drop-shadow-sm">
                Call Girls & Escort Service
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm md:text-lg text-zinc-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md px-2"
          >
            Elegance, privacy, and premium companionship. Experience signature leisure escapes with Uttarakhand's finest selected high-profile ladies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 px-4 sm:px-0"
          >
            <a
              id="hero-direct-booking"
              href="tel:9996265679"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-110 text-black font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-xl shadow-luxury-gold/10 hover:shadow-luxury-gold/30 hover:scale-102 transition-all duration-300"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Direct Booking</span>
            </a>

            <button
              id="hero-view-gallery"
              onClick={() => handleScrollToSection('main-gallery')}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto min-w-[210px] bg-[#220810]/70 backdrop-blur-md hover:bg-[#220810]/95 text-white font-sans font-black text-[11px] sm:text-xs uppercase tracking-widest py-4 px-8 rounded-full border border-luxury-gold/25 hover:border-luxury-gold/60 shadow-lg hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-luxury-gold" />
              <span>View Gallery</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section
        id="about-intro"
        className="py-20 sm:py-24 bg-zinc-50 text-zinc-900 border-y border-zinc-200 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-amber-700 uppercase block">
              DIGNIFIED LUXURY TOURS
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-zinc-900 leading-tight">
              Luxury Escort Service <br />
              <span className="text-amber-600 italic">in Dehradun</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full" />
            
            <div className="font-sans text-sm sm:text-base text-zinc-700 font-light leading-relaxed space-y-4">
              <p>
                Dehradun is home to pristine mountain scenery, exclusive hotels, and high-class retreats. 
                Whether you are a busy businessman staying at a prime heritage resort or an elite traveler exploring the majestic 
                foothills near Mussoorie, complete luxury remains incomplete without delightful, warm companionship.
              </p>
              <p>
                As a premier companionship agency, we present unmatched models selected for their physical perfection, 
                impeccable etiquette, and conversational proficiency. We handle every reservation request with pristine, absolute secrecy, 
                ensuring your leisure session in Uttarakhand is exceptionally comfortable, fulfilling, and completely private.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="intro-scroll-escorts"
                onClick={() => handleScrollToSection('main-gallery')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 hover:text-amber-900 transition-colors duration-200 group cursor-pointer"
              >
                <span>Browse our curated collection</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl aspect-[4/3] bg-zinc-200">
              <img
                src="/image17.png"
                alt="Elite Suite Hospitality"
                className="w-full h-full object-cover object-center filter sepia-[0.1] brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-serif text-lg font-bold">5-Star Hotel Outcalls</p>
                <p className="font-sans text-xs text-zinc-200">Directly dispatched to your premium room suite</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Featured Profiles Grid Section */}
      <section id="featured-escorts" className="py-20 sm:py-24 bg-luxury-bg border-b border-luxury-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase block">
              CURATED ESCORT ROSTER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Featured <span className="text-luxury-gold italic">Companions</span>
            </h2>
            <div className="h-[1px] w-16 bg-luxury-gold mx-auto" />
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              Dazzling personalities, beautiful styling, and complete devotion. Click below to view detailed bios.
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
                  <img
                    src={escort.image}
                    alt={escort.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter sepia-[0.1]"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="font-sans text-xs font-black tracking-widest uppercase text-black bg-luxury-gold py-2.5 px-5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-luxury-gold text-black font-sans text-[9px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-md shadow-md z-20">
                    VIP SELECT
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <span className="font-serif text-xl font-bold text-white block drop-shadow-md">
                      {escort.name}, {escort.age}
                    </span>
                    <span className="font-sans text-[10px] text-zinc-350 tracking-widest uppercase block mt-0.5 drop-shadow-md">
                      Measurements: {escort.measurements}
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white border-t border-zinc-100 flex items-center justify-between text-zinc-900 mt-auto">
                  <div className="space-y-0.5 text-left">
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

      {/* 4. Features/Trust Section */}
      <section className="py-20 sm:py-24 bg-luxury-card border-b border-luxury-gold/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/[0.02] rounded-full filter blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                100% Private & Confidential
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                No identity checks logged and zero residual profiles. We protect standard client logs instantly from access, guaranteeing complete, seamless privacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Beautiful & Professional
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                Carefully chosen, charming models exhibiting five-star hospitality standards. Intelligent, multilingual conversation partners for gentlemen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-2xl flex items-center justify-center text-luxury-gold shadow-md">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                VIP Escort Service
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-sm mx-auto">
                Elite resort visits and premium mountain companionship across Dehradun. Specially customized escapes to Mussoorie and wellness hill spas.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section id="faq" className="py-20 sm:py-24 bg-luxury-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold uppercase block">
              QUESTIONS & DISCRETION
            </span>
            <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-white">
              Frequently Asked <span className="text-luxury-gold">Questions</span>
            </h2>
            <div className="h-[1px] w-16 bg-luxury-gold mx-auto" />
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light">
              Familiarize yourself with our private outcall procedure, safety criteria, and hotel check-in details.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = activeFAQ === item.id;
              return (
                <div
                  key={item.id}
                  id={`home-faq-item-${idx}`}
                  className={`bg-luxury-card/60 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-luxury-gold/40 shadow-xl shadow-luxury-gold/[0.03]' : 'border-luxury-gold/10 hover:border-luxury-gold/30'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-7 font-sans focus:outline-none focus-visible:ring-1 focus-visible:ring-luxury-gold group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 pr-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-luxury-gold' : 'text-zinc-500'}`} />
                      <span className="font-serif text-base sm:text-lg font-bold text-zinc-100 group-hover:text-luxury-gold transition-colors">
                        {item.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-[#300f19] flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-luxury-gold/15' : ''}`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-luxury-gold' : 'text-zinc-400'}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-luxury-gold/10 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* COMPANION DETAILED MODAL SHEET */}
      <AnimatePresence>
        {selectedEscort && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEscort(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-[#0a0d14] border border-luxury-gold/30 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              <div className="relative h-72 md:h-full min-h-[320px] bg-zinc-950">
                <img
                  src={selectedEscort.image}
                  alt={selectedEscort.name}
                  className="absolute inset-0 w-full h-full object-cover object-center filter sepia-[0.1]"
                  referrerPolicy="no-referrer"
                />
                
                <button
                  onClick={() => setSelectedEscort(null)}
                  className="md:hidden absolute top-4 right-4 bg-black/60 text-white p-2.5 rounded-full border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-[#0a0d14]">
                <button
                  onClick={() => setSelectedEscort(null)}
                  className="absolute top-6 right-6 bg-luxury-card hover:bg-[#20273a] text-zinc-400 p-2 rounded-full border border-luxury-gold/25 hover:text-luxury-gold transition-colors hidden md:block cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-sans text-[10px] tracking-widest text-emerald-400 font-bold uppercase">AVAILABLE IN DEHRADUN</span>
                    </div>
                    <h3 className="font-serif text-3xl font-extrabold text-white">{selectedEscort.name}</h3>
                    <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest">Selected Executive Roster</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3.5 bg-luxury-card border border-luxury-gold/15 rounded-2xl p-4">
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Age</p>
                      <p className="font-serif text-base font-bold text-white">{selectedEscort.age} Years</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Height</p>
                      <p className="font-serif text-base font-bold text-white">{selectedEscort.height}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                        <Ruler className="w-3 h-3 text-luxury-gold" /> Dimensions
                      </p>
                      <p className="font-sans text-xs font-bold text-zinc-150">{selectedEscort.measurements}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                        <Languages className="w-3 h-3 text-luxury-gold" /> Languages
                      </p>
                      <p className="font-sans text-[10px] font-bold text-zinc-150 truncate">{selectedEscort.languages.join(', ')}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-sans text-[10px] font-bold text-luxury-gold uppercase tracking-wider">Biography</h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {selectedEscort.about}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 bg-luxury-card/30 p-2 rounded-xl border border-luxury-gold/5">
                    {selectedEscort.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#220810]/60 text-luxury-gold py-1 px-2 text-[9px] font-medium border border-luxury-gold/15 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-6 mt-6 border-t border-luxury-gold/10">
                  <p className="font-sans text-[9px] text-center text-zinc-400 uppercase tracking-widest">Book instantly with dispatch agent</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:9996265679"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-105 text-black font-sans font-black text-[10px] uppercase tracking-widest py-3 rounded-xl transition-all duration-200 shadow-md transform active:scale-95 cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5 fill-black" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/919996265679?text=Hi%20there%2C%20I%20am%20interested%20in%20arranging%20a%20meeting%20with%20companion%20"${encodeURIComponent(selectedEscort.name)}%20(${selectedEscort.age}%29"%20for%20a%20private%20hotel%20session%20in%20Dehradun.%20Please%20verify%20availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#220810]/80 hover:bg-[#220810] text-white font-sans font-black text-[10px] uppercase tracking-widest py-3 rounded-xl border border-luxury-gold/25 hover:border-luxury-gold/50 transition-all duration-200 transform active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}