import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X, Ruler, Languages, Star, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { escortsData } from '../data';
import { EscortProfile } from '../types';

export default function Escorts() {
  const [selectedCompanion, setSelectedCompanion] = useState<EscortProfile | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [ageFilter, setAgeFilter] = useState<string>('All');
  const [bodyTypeFilter, setBodyTypeFilter] = useState<string>('All');
  const [locationFilter, setLocationFilter] = useState<string>('All');
  
  // Page limit for loading more
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [isToastOpen, setIsToastOpen] = useState(false);

  // Derive unique selection values from data safely
  const categories = useMemo(() => ['All', ...Array.from(new Set(escortsData.map(e => e.category)))], []);
  const bodyTypes = useMemo(() => ['All', ...Array.from(new Set(escortsData.map(e => e.bodyType)))], []);
  const locations = useMemo(() => ['All', ...Array.from(new Set(escortsData.map(e => e.location)))], []);

  // Filter models based on selection
  const filteredEscorts = useMemo(() => {
    return escortsData.filter((escort) => {
      const matchCategory = categoryFilter === 'All' || escort.category === categoryFilter;
      const matchBodyType = bodyTypeFilter === 'All' || escort.bodyType === bodyTypeFilter;
      const matchLocation = locationFilter === 'All' || escort.location === locationFilter;
      
      let matchAge = true;
      if (ageFilter === '20-22') {
        matchAge = escort.age >= 20 && escort.age <= 22;
      } else if (ageFilter === '23-25') {
        matchAge = escort.age >= 23 && escort.age <= 25;
      }

      return matchCategory && matchAge && matchBodyType && matchLocation;
    });
  }, [categoryFilter, ageFilter, bodyTypeFilter, locationFilter]);

  // Dynamically generate extra items for loading more if clicked
  const visibleEscorts = useMemo(() => {
    const list = [...filteredEscorts];
    // If we want to show up to visibleCount, but the filtered array has fewer and users click Load More,
    // we can duplicate with new IDs to keep it high fidelity, or let it grow.
    if (visibleCount > list.length && list.length > 0) {
      const extraItemsNeeded = visibleCount - list.length;
      for (let i = 0; i < extraItemsNeeded; i++) {
        const baseItem = list[i % list.length];
        list.push({
          ...baseItem,
          id: `${baseItem.id}-extra-${i}`,
          name: `${baseItem.name} ${String.fromCharCode(65 + (i % 26))}`, // Anya B, Riya C, etc.
        });
      }
    }
    return list.slice(0, visibleCount);
  }, [filteredEscorts, visibleCount]);

  const handleLoadMore = () => {
    if (visibleCount >= 16) {
      setIsToastOpen(true);
      setTimeout(() => setIsToastOpen(false), 4000);
    } else {
      setVisibleCount(prev => prev + 4);
    }
  };

  const handleResetFilters = () => {
    setCategoryFilter('All');
    setAgeFilter('All');
    setBodyTypeFilter('All');
    setLocationFilter('All');
    setVisibleCount(8);
  };

  return (
    <div className="min-h-screen bg-luxury-bg text-white pt-20">
      
      {/* 1. Top Banner: min-h-[350px] dark banner with a placeholder image */}
      <section className="relative min-h-[350px] flex items-center justify-center bg-luxury-bg border-b border-luxury-gold/15 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/image14.png" // Updated image
            alt="Dehradun Elite Companions"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent" />
        </div>

        {/* Floating background glowing balls */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-luxury-gold/5 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#300f19]/35 rounded-full filter blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs font-black tracking-[0.3em] text-luxury-gold uppercase block"
          >
            SOUGHT-AFTER ACCOMPANIMENT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5.5xl font-extrabold text-white leading-tight tracking-tight"
          >
            Elite Dehradun Companions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-zinc-300 font-light max-w-xl mx-auto leading-relaxed"
          >
            Browse our exclusive roster of 100% verified independent models. Hand-picked for high-profile clientsstaying at luxury resorts across Uttarakhand.
          </motion.p>
        </div>
      </section>

      {/* 2. Filter Bar: Sticky or static filter bar below the banner */}
      <section className="sticky top-[72px] z-30 bg-luxury-bg/95 backdrop-blur-md border-b border-luxury-gold/15 py-5 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
              <span className="font-sans text-xs font-black tracking-widest uppercase text-luxury-gold">
                Refine Roster
              </span>
            </div>

            {/* Grid of 4 dropdown selects */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full lg:w-auto lg:flex-1 max-w-5xl lg:justify-end">
              
              {/* Category Filter */}
              <div className="space-y-1">
                <label className="block font-sans text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Category</label>
                <div className="relative">
                  <select
                    id="filter-category-select"
                    value={categoryFilter}
                    onChange={(e) => { setCategoryFilter(e.target.value); setVisibleCount(8); }}
                    className="w-full lg:w-[160px] bg-[#1a050a] text-zinc-250 border border-luxury-gold/20 hover:border-luxury-gold/50 rounded-xl px-3 py-2.5 font-sans text-xs outline-none focus:ring-1 focus:ring-luxury-gold appearance-none cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#150307] text-white">
                        {cat === 'All' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-luxury-gold absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Age Filter */}
              <div className="space-y-1">
                <label className="block font-sans text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Age</label>
                <div className="relative">
                  <select
                    id="filter-age-select"
                    value={ageFilter}
                    onChange={(e) => { setAgeFilter(e.target.value); setVisibleCount(8); }}
                    className="w-full lg:w-[140px] bg-[#1a050a] text-zinc-250 border border-luxury-gold/20 hover:border-luxury-gold/50 rounded-xl px-3 py-2.5 font-sans text-xs outline-none focus:ring-1 focus:ring-luxury-gold appearance-none cursor-pointer"
                  >
                    <option value="All" className="bg-[#150307]">All Ages</option>
                    <option value="20-22" className="bg-[#150307]">20 - 22 Years</option>
                    <option value="23-25" className="bg-[#150307]">23 - 25 Years</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-luxury-gold absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Body Type Filter */}
              <div className="space-y-1">
                <label className="block font-sans text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Body Type</label>
                <div className="relative">
                  <select
                    id="filter-body-type-select"
                    value={bodyTypeFilter}
                    onChange={(e) => { setBodyTypeFilter(e.target.value); setVisibleCount(8); }}
                    className="w-full lg:w-[140px] bg-[#1a050a] text-zinc-250 border border-luxury-gold/20 hover:border-luxury-gold/50 rounded-xl px-3 py-2.5 font-sans text-xs outline-none focus:ring-1 focus:ring-luxury-gold appearance-none cursor-pointer"
                  >
                    {bodyTypes.map((bt) => (
                      <option key={bt} value={bt} className="bg-[#150307] text-white">
                        {bt === 'All' ? 'All Builds' : bt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-luxury-gold absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Location Filter */}
              <div className="space-y-1">
                <label className="block font-sans text-[9px] text-zinc-400 uppercase tracking-wider font-semibold">Location</label>
                <div className="relative">
                  <select
                    id="filter-location-select"
                    value={locationFilter}
                    onChange={(e) => { setLocationFilter(e.target.value); setVisibleCount(8); }}
                    className="w-full lg:w-[150px] bg-[#1a050a] text-zinc-250 border border-luxury-gold/20 hover:border-luxury-gold/50 rounded-xl px-3 py-2.5 font-sans text-xs outline-none focus:ring-1 focus:ring-luxury-gold appearance-none cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc} className="bg-[#150307] text-white">
                        {loc === 'All' ? 'All Locations' : loc}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-luxury-gold absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Clear Button if any active */}
            {(categoryFilter !== 'All' || ageFilter !== 'All' || bodyTypeFilter !== 'All' || locationFilter !== 'All') && (
              <button
                id="reset-filters-btn"
                onClick={handleResetFilters}
                className="text-xs font-black uppercase tracking-widest text-luxury-gold hover:text-white transition-colors py-2 px-4 border border-luxury-gold/20 hover:border-luxury-gold/60 rounded-xl cursor-pointer"
              >
                Clear
              </button>
            )}

          </div>
        </div>
      </section>

      {/* 3. Profile Grid: An 8-card grid (4 columns on desktop, 2 on mobile) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {visibleEscorts.length === 0 ? (
            <div className="text-center py-20 space-y-6">
              <HelpCircle className="w-12 h-12 text-luxury-gold mx-auto animate-bounce" />
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold">No Companions Found</h3>
                <p className="font-sans text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  We currently do not have matching profiles for this selective group. Please try clearing your filters.
                </p>
              </div>
              <button
                id="no-results-reset-btn"
                onClick={handleResetFilters}
                className="bg-luxury-gold text-black font-sans font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                {visibleEscorts.map((escort, index) => (
                  <motion.div
                    key={escort.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
                    className="group relative bg-[#130306] rounded-2xl overflow-hidden border border-luxury-gold/15 hover:border-luxury-gold/45 transition-all duration-300 shadow-2xl flex flex-col h-full cursor-pointer"
                    onClick={() => setSelectedCompanion(escort)}
                  >
                    {/* Grayscale hover layout image, aspect ratio 3/4 */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                      <img
                        src={escort.image}
                        alt={escort.name}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Top-left absolute badge ("Verified" or "Available Now") */}
                      <div className="absolute top-3.5 left-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-sans text-[8px] sm:text-[9px] font-black tracking-widest uppercase px-2 py-1 rounded shadow-md z-10">
                        {index % 2 === 0 ? 'Verified' : 'Available Now'}
                      </div>

                      {/* Top-right absolute rating badge */}
                      <div className="absolute top-3.5 right-3.5 bg-black/60 backdrop-blur-sm border border-luxury-gold/25 text-luxury-gold text-[9px] font-bold py-1 px-2.5 rounded flex items-center gap-1 z-10">
                        <Star className="w-3 h-3 fill-luxury-gold" />
                        <span>{escort.rating}</span>
                      </div>

                      {/* Bottom shade gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black via-black/40 to-transparent z-1" />

                      {/* Name, age, details positioned absolutely over image */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                        <h3 className="font-serif text-lg sm:text-2xl font-black text-white drop-shadow-md">
                          {escort.name}, {escort.age}
                        </h3>
                        <p className="font-sans text-[10px] text-zinc-300 font-light truncate drop-shadow-md mt-0.5">
                          {escort.height} • {escort.measurements} • {escort.location}
                        </p>
                      </div>
                    </div>

                    {/* Bottom border with "View Profile" link and WhatsApp icon */}
                    <div className="p-4 bg-[#1a050a] border-t border-luxury-gold/10 flex items-center justify-between mt-auto">
                      <span className="font-sans text-[11px] font-black text-luxury-gold uppercase tracking-widest group-hover:text-white transition-colors duration-200">
                        View Profile
                      </span>
                      <a
                        id={`gallery-item-wa-direct-${escort.id}`}
                        href={`https://wa.me/919996265679?text=Hi%20there%2C%20I%20am%20interested%20in%20arranging%20a%20private%20meeting%20with%20companion%20"${encodeURIComponent(escort.name)}%20(${escort.age}%29"%20in%20Dehradun.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Wait, prevent opening details modal
                        className="w-8 h-8 rounded-full bg-emerald-600/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-200"
                        title="Quick WhatsApp Booking"
                      >
                        <MessageCircle className="w-4 h-4 fill-current bg-transparent border-none p-0" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 4. Load More Button: A ghost button at bottom */}
              {filteredEscorts.length > 0 && (
                <div className="text-center pt-8">
                  <button
                    id="load-more-roster-btn"
                    onClick={handleLoadMore}
                    className="inline-flex items-center justify-center min-w-[200px] border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md cursor-pointer active:scale-98"
                  >
                    <span>Load More Companions</span>
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* DYNAMIC LIMIT ALERT TOAST */}
      <AnimatePresence>
        {isToastOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#1e070d] border border-luxury-gold text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider">All VIP Roster Loaded successfully.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROFILE DETAIL MODAL SCREEN */}
      <AnimatePresence>
        {selectedCompanion && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCompanion(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative bg-[#0a0d14] border border-luxury-gold/30 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              {/* Image Column */}
              <div className="relative h-72 md:h-full min-h-[320px] bg-zinc-950">
                <img
                  src={selectedCompanion.image}
                  alt={selectedCompanion.name}
                  className="absolute inset-0 w-full h-full object-cover object-center filter sepia-[0.1]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Close Button Mobile */}
                <button
                  onClick={() => setSelectedCompanion(null)}
                  className="md:hidden absolute top-4 right-4 bg-black/60 text-white p-2.5 rounded-full border border-white/20"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Attributes Column */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-[#0a0d14]">
                
                {/* Close Button Desktop */}
                <button
                  onClick={() => setSelectedCompanion(null)}
                  className="absolute top-6 right-6 bg-luxury-card hover:bg-[#20273a] text-zinc-400 p-2 rounded-full border border-luxury-gold/25 hover:text-luxury-gold transition-colors hidden md:block cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-6">
                  {/* Title block */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-sans text-[10px] tracking-widest text-emerald-400 font-bold uppercase block">ACTIVE OUT-CALL DEHRADUN</span>
                    </div>
                    <h3 className="font-serif text-3xl font-extrabold text-white">{selectedCompanion.name}</h3>
                    <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest">Selected Executive Roster</p>
                  </div>

                  {/* Attributes and specs block */}
                  <div className="grid grid-cols-2 gap-3.5 bg-luxury-card border border-luxury-gold/15 rounded-2xl p-4">
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Age</p>
                      <p className="font-serif text-base font-bold text-white">{selectedCompanion.age} Years</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">Height</p>
                      <p className="font-serif text-base font-bold text-white">{selectedCompanion.height}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                        <Ruler className="w-3 h-3 text-luxury-gold" /> Dimensions
                      </p>
                      <p className="font-sans text-xs font-bold text-zinc-150">{selectedCompanion.measurements}</p>
                    </div>
                    <div>
                      <p className="font-sans text-[9px] text-zinc-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                        <Languages className="w-3 h-3 text-luxury-gold" /> Languages
                      </p>
                      <p className="font-sans text-[10px] font-bold text-zinc-150 truncate">{selectedCompanion.languages.join(', ')}</p>
                    </div>
                  </div>

                  {/* About Block */}
                  <div className="space-y-1.5">
                    <h4 className="font-sans text-[10px] font-bold text-luxury-gold uppercase tracking-wider">Biography</h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {selectedCompanion.about}
                    </p>
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1 bg-luxury-card/30 p-2 rounded-xl border border-luxury-gold/5">
                    {selectedCompanion.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#220810]/60 text-luxury-gold py-1 px-2 text-[9px] font-medium border border-luxury-gold/15 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Links */}
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
                      href={`https://wa.me/919996265679?text=Hi%20there%2C%20I%20am%20interested%20in%20booking%20companion%20"${encodeURIComponent(selectedCompanion.name)}%20(${selectedCompanion.age}%29"%20for%20a%20private%20hotel%20session%20in%20Dehradun.`}
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