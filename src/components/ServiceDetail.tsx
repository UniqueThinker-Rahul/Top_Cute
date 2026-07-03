import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ShieldCheck, Sparkles, Star, Clock, UserCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  
  // State for Secure Booking Form
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Rajpur Road');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find the service by id, fallback to a robust default VIP service if not found
  const service = servicesData.find(s => s.id === id) || {
    id: 'premium-service',
    title: 'Executive VIP Companionship Service',
    description: 'The highest standard of companion services in Uttarakhand. Tailored specifically for modern gentlemen staying at selected luxury boutique resorts and 5-star mountain suites.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    features: ['Absolute visual excellence', 'Highest standard of etiquette', 'Comprehensive client anonymity guarantees']
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      // Build a premium text message formatting the client's booking inquiry
      const textMessage = `Hi! I would like to secure a confidential booking for Service: "${service.title}".\nName: ${userName}\nEmail: ${userEmail || 'N/A'}\nPreferred Area: ${selectedLocation}.\nKindly verify active model availability.`;
      const waUrl = `https://wa.me/91000000000?text=${encodeURIComponent(textMessage)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-luxury-bg text-white pt-20">
      
      {/* 1. Hero Banner: Compact banner (min-h-[350px]) with a dark overlay and a small gold badge */}
      <section className="relative min-h-[350px] flex items-center justify-center bg-luxury-bg border-b border-luxury-gold/15 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-102"
            referrerPolicy="no-referrer"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/75 to-transparent" />
        </div>

        {/* Floating gradient glow lights */}
        <div className="absolute bottom-5 left-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 bg-[#2a2110]/50 border border-luxury-gold/30 text-luxury-gold px-3 py-1.5 rounded-full shadow-md backdrop-blur-md"
          >
            <Star className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
            <span className="font-sans text-[10px] font-black tracking-widest uppercase">Premium VIP Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            {service.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs text-zinc-400 font-sans"
          >
            <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <a href="/#main-gallery" className="hover:text-luxury-gold transition-colors">Roster</a>
            <ChevronRight className="w-3 h-3" />
            <span className="text-luxury-gold font-light truncate max-w-[140px] sm:max-w-none">{service.title}</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Layout: A standard container with a 2-column layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 3. Left Column (Information) - 70% width */}
            <div className="lg:col-span-8 space-y-12 text-left">
              
              <div className="space-y-6">
                <span className="font-sans text-xs font-bold text-luxury-gold tracking-[0.2em] uppercase block">
                  SERVICE SYNOPSIS
                </span>
                
                <h2 className="font-serif text-2xl sm:text-4.5xl font-extrabold text-white leading-tight">
                  Elegance & Dedicated Companion Choice
                </h2>
                
                <div className="h-1 w-16 bg-luxury-gold rounded-full" />
                
                {/* Elegant typography,light gray paragraphs with leading-relaxed */}
                <div className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed space-y-6">
                  <p>
                    Each Companion service session we coordinate represents a commitment to high-society leisure and private hospitality standards. 
                    We understand that an dynamic gentleman seeks more than standard entertainment—he appreciates visual grace, conversational agility, 
                    and true connection in five-star settings.
                  </p>
                  
                  <p>
                    Whether you are arranging a celebratory event, attending executive meetings at premium heritage lounges on Rajpur Road, 
                    or taking a quiet travel retreat near Mussoorie hills, our models adapt flawlessly to your specific environment. They arrive with immaculate 
                    personal grooming, pristine attire selection, and absolute dedication to your absolute comfort.
                  </p>

                  <p>
                    Secure bookings are managed with complete secrecy, bypassing standard logs. Your privacy is protected with dedicated local dispatch procedures.
                  </p>
                </div>
              </div>

              {/* Service Highlights bullet list */}
              <div className="bg-[#0a0d14]/50 border border-luxury-gold/10 rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="font-serif text-xl font-bold text-white">Included Signature Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 font-sans text-sm text-zinc-350">
                      <div className="w-5 h-5 bg-luxury-gold/15 rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/30">
                        <span className="text-luxury-gold text-xs font-black">✓</span>
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 font-sans text-sm text-zinc-350">
                    <div className="w-5 h-5 bg-luxury-gold/15 rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/30">
                      <span className="text-luxury-gold text-xs font-black">✓</span>
                    </div>
                    <span>No pre-payment processing</span>
                  </div>
                  <div className="flex items-center gap-3 font-sans text-sm text-zinc-350">
                    <div className="w-5 h-5 bg-luxury-gold/15 rounded-full flex items-center justify-center shrink-0 border border-luxury-gold/30">
                      <span className="text-luxury-gold text-xs font-black">✓</span>
                    </div>
                    <span>24/7 Premium out-call service</span>
                  </div>
                </div>
              </div>

              {/* Add a section with a 3-column feature grid */}
              <div className="space-y-6 pt-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Why Gentlemen Prefer Our Outcalls
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Grid Box 1: On-Time Arrival */}
                  <div className="bg-luxury-card/30 p-6 rounded-2xl border border-luxury-gold/10 space-y-3.5">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">On-Time Arrival</h4>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                      Time is precious. Our dedicated escort dispatch networks ensure prompt, discreet arrival directly to your room suite.
                    </p>
                  </div>

                  {/* Grid Box 2: Verified Photos */}
                  <div className="bg-luxury-card/30 p-6 rounded-2xl border border-luxury-gold/10 space-y-3.5">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">Verified Photos</h4>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                      What you see is who you meet. All featured models are 100% verified to match their photos, eliminating surprises.
                    </p>
                  </div>

                  {/* Grid Box 3: Elite Privacy */}
                  <div className="bg-luxury-card/30 p-6 rounded-2xl border border-luxury-gold/10 space-y-3.5">
                    <div className="w-10 h-10 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">Elite Privacy</h4>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                      Your identity is sacred. We enforce complete, residual security that deletes booking trails automatically.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* 4. Right Column (Sticky Booking Sidebar) - 30% width */}
            <div className="lg:col-span-4 lg:sticky lg:top-[96px] w-full">
              
              <div 
                id="sticky-booking-sidebar"
                className="bg-[#1a1d24] border-t-2 border-luxury-gold rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-left"
              >
                <div className="space-y-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-white">
                    Secure Your Booking
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                    Reserve companionship instantly. No payment details are captured online.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label id="booking-name-label" htmlFor="booking-name-input" className="block font-sans text-[10px] text-zinc-450 uppercase tracking-widest font-semibold">
                      Your Name *
                    </label>
                    <input
                      id="booking-name-input"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-[#111319] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-luxury-gold transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label id="booking-email-label" htmlFor="booking-email-input" className="block font-sans text-[10px] text-zinc-450 uppercase tracking-widest font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      id="booking-email-input"
                      type="email"
                      placeholder="e.g. discreet@domain.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-[#111319] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-luxury-gold transition-colors"
                    />
                  </div>

                  {/* Location Select */}
                  <div className="space-y-1">
                    <label id="booking-location-label" htmlFor="booking-location-select" className="block font-sans text-[10px] text-zinc-450 uppercase tracking-widest font-semibold">
                      Preferred Area
                    </label>
                    <select
                      id="booking-location-select"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-[#111319] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-luxury-gold transition-colors cursor-pointer appearance-none"
                    >
                      <option value="Rajpur Road">Rajpur Road, Dehradun</option>
                      <option value="Jakhan">Jakhan Sector</option>
                      <option value="GMS Road">GMS Road Area</option>
                      <option value="Mussoorie Road">Mussoorie Resort Belt</option>
                      <option value="Paltan Bazaar">Paltan Bazaar</option>
                    </select>
                  </div>

                  {/* Submit Secure Verification button */}
                  <button
                    id="submit-secure-booking-btn"
                    type="submit"
                    className="w-full bg-[#220810] hover:bg-[#300f19] border border-luxury-gold/30 text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 rounded-xl cursor-pointer transition-all duration-200 mt-2 hover:border-luxury-gold flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-luxury-gold animate-pulse" />
                    <span>{isSubmitted ? 'Verifying...' : 'Request Availability'}</span>
                  </button>
                </form>

                <div className="h-[1px] bg-zinc-800 my-4" />

                {/* Two prominent CTA buttons: "Call Now" and "WhatsApp Us" linking to 000000000 */}
                <div className="space-y-2.5">
                  <a
                    id="sidebar-call-cta"
                    href="tel:000000000"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-105 text-black font-sans font-black text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md cursor-pointer transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 fill-black" />
                    <span>Call Now: +91 99962 65679</span>
                  </a>

                  <a
                    id="sidebar-whatsapp-cta"
                    href={`https://wa.me/91000000000?text=Hi!%20I%20am%20looking%20to%20confidentially%20book%20a%20VIP%20companion%20for%20service%20"${encodeURIComponent(service.title)}"%20in%20Dehradun.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md cursor-pointer transition-all duration-200"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Booking Us</span>
                  </a>
                </div>

                {/* A small text note: "Zero records shared. 100% encrypted." */}
                <p className="font-sans text-[10px] text-zinc-500 text-center font-semibold uppercase tracking-wider">
                  🔒 Zero records shared. 100% encrypted.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SUCCESS SUBMISSION STATE TOAST */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#0a0d14] border border-luxury-gold text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider">Opening secure WhatsApp dispatcher...</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}