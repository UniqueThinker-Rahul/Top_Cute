import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Star, Sparkles, Languages, Minimize2, Check, X, Ruler } from 'lucide-react';
import { escortsData } from '../data';
import { EscortProfile } from '../types';

export default function EscortsSection() {
  const [selectedCompanion, setSelectedCompanion] = useState<EscortProfile | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Derive unique filter categories from keys/tags
  const filters = ['All', 'Super Model', 'VIP Selection', 'Elite Class', 'Sophisticated', 'Playful'];

  const filteredEscorts = activeFilter === 'All'
    ? escortsData
    : escortsData.filter(item => 
        item.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section
      id="escorts"
      className="py-24 bg-luxury-bg relative overflow-hidden"
    >
      {/* Absolute gold decorative backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase">
            Exclusive Roster
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Our Elite companions in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-[#ecc784] to-luxury-gold">
              Dehradun VIP Escorts
            </span>
          </h2>
          <div className="h-[1px] w-24 bg-luxury-gold mx-auto my-6" />
          <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            Review our premier collections of highly requested companions. Choose your ideal hostess and enjoy unmatched, highly discreet, and passionate sessions.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-full border transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-luxury-gold text-black border-luxury-gold shadow-md'
                  : 'bg-[#220810]/60 text-zinc-400 border-luxury-gold/20 hover:text-luxury-gold hover:border-luxury-gold/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Escorts Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEscorts.map((escort) => (
              <motion.div
                id={`escort-card-${escort.id}`}
                key={escort.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-luxury-card rounded-2xl overflow-hidden border border-luxury-gold/25 hover:border-luxury-gold/50 transition-all duration-300 shadow-xl flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedCompanion(escort)}
              >
                {/* Image Showcase with grayscale effect */}
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                  <img
                    src={escort.image}
                    alt={escort.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

                  {/* Top Badge: Age or Quick Info */}
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
                    <span className="font-sans text-[11px] font-extrabold text-white">{escort.rating.toFixed(1)} Rating</span>
                  </div>

                  {/* Hot Roster Tag */}
                  <div className="absolute top-4 right-4 bg-luxury-gold text-black font-sans text-[9px] font-black tracking-widest uppercase px-2.5 py-1.5 rounded-md shadow-md">
                    Verified
                  </div>

                  {/* Overlay text on image bottom */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-200">
                        {escort.name}, <span className="font-light text-zinc-350">{escort.age}</span>
                      </h3>
                      <span className="font-sans text-xs text-zinc-300 font-medium">Height: {escort.height}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {escort.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-0.5 text-[10px] font-medium text-luxury-gold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card brief stats footer */}
                <div className="p-5 flex items-center justify-between border-t border-luxury-gold/10 bg-luxury-card mt-auto">
                  <span className="font-sans text-xs text-zinc-400 truncate max-w-[200px]">
                    Languages: {escort.languages.join(', ')}
                  </span>
                  <span className="font-sans text-xs font-bold text-luxury-gold underline group-hover:text-white transition-colors duration-200">
                    View Profile
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Companion Detail Modal / Drawer Popup */}
        <AnimatePresence>
          {selectedCompanion && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark Overlay Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/75 backdrop-blur-md"
                onClick={() => setSelectedCompanion(null)}
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative bg-[#0a0d14] border border-luxury-gold/30 rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
              >
                {/* Image Section inside Modal */}
                <div className="relative h-72 md:h-full min-h-[300px] bg-zinc-950">
                  <img
                    src={selectedCompanion.image}
                    alt={selectedCompanion.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
                  
                  {/* Close icon for mobile */}
                  <button
                    id="close-modal-icon-overlay"
                    onClick={() => setSelectedCompanion(null)}
                    className="absolute top-4 left-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 hover:text-luxury-gold transition-colors block md:hidden"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Profile attributes description */}
                <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-[#0a0d14]">
                  {/* Close Button Desktop */}
                  <button
                    id="close-modal-icon-desktop"
                    onClick={() => setSelectedCompanion(null)}
                    className="absolute top-6 right-6 bg-luxury-card hover:bg-luxury-card-light text-zinc-400 p-2 rounded-full border border-luxury-gold/20 hover:text-luxury-gold transition-colors hidden md:block cursor-pointer animate-fade-in"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" /> Dedicated VIP
                        </span>
                        <div className="flex items-center gap-0.5 text-luxury-gold">
                          <Star className="w-3 h-3 fill-luxury-gold" />
                          <span className="font-sans text-[11px] font-bold">Verified</span>
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-3xl font-extrabold text-white">
                        {selectedCompanion.name}
                      </h3>
                      <p className="font-sans text-xs text-zinc-400 mt-0.5 uppercase tracking-wider">Serving luxury hotels in Dehradun</p>
                    </div>

                    {/* Stats List */}
                    <div className="grid grid-cols-2 gap-4 bg-luxury-card border border-luxury-gold/10 rounded-2xl p-4">
                      <div>
                        <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest">Age</p>
                        <p className="font-serif text-lg font-bold text-white">{selectedCompanion.age} Years</p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest">Height</p>
                        <p className="font-serif text-lg font-bold text-white">{selectedCompanion.height}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                          <Ruler className="w-3 h-3 text-luxury-gold" /> Measurements
                        </p>
                        <p className="font-sans text-sm font-bold text-zinc-150">{selectedCompanion.measurements}</p>
                      </div>
                      <div>
                        <p className="font-sans text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
                          <Languages className="w-3 h-3 text-luxury-gold" /> Languages
                        </p>
                        <p className="font-sans text-xs font-bold text-zinc-150 truncate">{selectedCompanion.languages.join(', ')}</p>
                      </div>
                    </div>

                    {/* About details */}
                    <div>
                      <h4 className="font-sans text-xs font-bold text-luxury-gold uppercase tracking-wider mb-2">My Biography</h4>
                      <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                        {selectedCompanion.about}
                      </p>
                    </div>

                    {/* tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCompanion.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-luxury-card text-luxury-gold py-1 px-2.5 rounded-md text-[10px] font-medium border border-luxury-gold/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Immediate Action Row */}
                  <div className="space-y-3 pt-6 mt-6 border-t border-luxury-gold/10">
                    <p className="font-sans text-[10px] text-center text-zinc-400 tracking-wider">Click below to inquire / dispatch instantly</p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        id="modal-call-btn"
                        href="tel:000000000"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-luxury-gold to-yellow-600 text-black font-sans font-black text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl shadow-md transition-all duration-200 active:scale-95"
                      >
                        <Phone className="w-4 h-4 fill-black" />
                        <span>Call Agent</span>
                      </a>

                      <a
                        id="modal-wa-btn"
                        href={`https://wa.me/91000000000?text=Hi%20there%2C%20I%20am%20interested%20in%20booking%20or%20knowing%20availability%2520for%20companion%20"${encodeURIComponent(selectedCompanion.name)}%20(${selectedCompanion.age}%29"%2520for%20my%2520meeting%20in%20Dehradun.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#220810]/75 hover:bg-[#220810] text-white font-sans font-black text-[10px] uppercase tracking-widest py-3 px-4 rounded-xl border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all active:scale-95 duration-205"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                        <span>WhatsApp Quick</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
