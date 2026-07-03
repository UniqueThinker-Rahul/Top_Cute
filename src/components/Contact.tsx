import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Mail, Clock, ShieldAlert, Sparkles, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [alias, setAlias] = useState('');
  const [secureEmail, setSecureEmail] = useState('');
  const [subject, setSubject] = useState('Confidential VIP Booking Request');
  const [message, setMessage] = useState('');
  const [isSuccessToast, setIsSuccessToast] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alias.trim() || !message.trim()) return;

    setIsSuccessToast(true);
    setTimeout(() => {
      const customWAText = `Hi! I sent an encrypted query through the secure Contact form.\nAlias/Name: ${alias}\nEmail: ${secureEmail || 'Anonymous'}\nSubject: ${subject}\nMessage: ${message}`;
      const waUrl = `https://wa.me/919996265679?text=${encodeURIComponent(customWAText)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      
      setAlias(''); setSecureEmail(''); setMessage(''); setIsSuccessToast(false);
    }, 1500);
  };

  return (
    <div className="bg-luxury-bg text-white">
      
      <section className="relative min-h-[250px] flex items-center justify-center border-y border-luxury-gold/15 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/image22.png" alt="Dehradun Elite Contact" className="w-full h-full object-cover object-bottom opacity-15 mix-blend-luminosity scale-102" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-3">
          <span className="font-sans text-[10px] font-black tracking-[0.3em] text-luxury-gold uppercase block">SECURE ACCESS DEHRADUN</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">Connect With Dispatch</h1>
          <p className="font-sans text-xs text-zinc-400 font-light max-w-lg mx-auto">Available 24 hours a day, 7 days a week. Our elite agency handles client requests with meticulous attention to detail and total client shielding.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-luxury-gold uppercase block">CONFIDENTIAL DISPATCH</span>
                <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-white leading-tight">Discreet & Secure Communication</h2>
                <div className="h-[2px] w-14 bg-luxury-gold rounded-full" />
                <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">Your identity remains unrecorded. All digital inquiries, messages, and calls are permanently purged and routed through high-grade private protocols. Zero traces are ever stored.</p>
              </div>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold"><Phone className="w-5 h-5 fill-luxury-gold/10" /></div>
                  <div><h4 className="font-serif text-sm font-black uppercase tracking-wider text-luxury-gold">Direct Hotlines</h4><a href="tel:+919996265679" className="font-sans text-lg font-bold text-white hover:text-luxury-gold transition-colors block mt-0.5">+91-9996265679</a></div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold"><MessageCircle className="w-5 h-5 fill-luxury-gold/10" /></div>
                  <div><h4 className="font-serif text-sm font-black uppercase tracking-wider text-luxury-gold">Confidential WhatsApp</h4><a href="https://wa.me/919996265679" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-bold text-white hover:text-luxury-gold transition-colors block mt-0.5">Instant Booking WhatsApp</a></div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold"><Clock className="w-5 h-5" /></div>
                  <div><h4 className="font-serif text-sm font-black uppercase tracking-wider text-luxury-gold">Operating Hours</h4><p className="font-sans text-sm font-bold text-white mt-0.5">24 Hours / 7 Days a week</p></div>
                </div>
              </div>

              <div className="bg-[#141925]/40 border border-luxury-gold/15 rounded-2xl p-5 flex items-center gap-4 mt-6">
                <ShieldAlert className="w-8 h-8 text-luxury-gold shrink-0" />
                <p className="font-sans text-[11px] text-zinc-400 leading-relaxed font-light"><strong>Verification Warning:</strong> We require zero deposits or registration fees before you meet a companion. Always protect your capital.</p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#141925]/80 border border-luxury-gold/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-4 right-4 text-luxury-gold/10"><Send className="w-24 h-24 stroke-[0.5]" /></div>
              <div className="space-y-2 mb-8 text-left relative z-10">
                <span className="font-sans text-[10px] font-bold text-luxury-gold tracking-[0.2em] uppercase block">SECURE TRANSMISSION</span>
                <h3 className="font-serif text-2xl font-black text-white">Send Encrypted message</h3>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6 text-left relative z-10">
                <div className="space-y-1.5"><label className="block font-sans text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Alias / Name *</label><input type="text" required placeholder="e.g. Host Gentleman" value={alias} onChange={(e) => setAlias(e.target.value)} className="w-full bg-[#0a0d14] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none" /></div>
                <div className="space-y-1.5"><label className="block font-sans text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Secure Email (Optional)</label><input type="email" placeholder="e.g. anonym@proton.me" value={secureEmail} onChange={(e) => setSecureEmail(e.target.value)} className="w-full bg-[#0a0d14] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none" /></div>
                <div className="space-y-1.5">
                  <label className="block font-sans text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Subject / Topic</label>
                  <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full bg-[#0a0d14] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none cursor-pointer">
                    <option value="Confidential VIP Booking Request">Confidential VIP Booking Request</option>
                    <option value="Model Collaboration Roster application">Model Collaboration (Become a Companion)</option>
                    <option value="Corporate Hosting Arrangement">Corporate Hosting / Gathering Arrangement</option>
                    <option value="Feedback & Dedicated Assistance">Feedback & Dedicated Assistance</option>
                  </select>
                </div>
                <div className="space-y-1.5"><label className="block font-sans text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">Confidential Message Content *</label><textarea required rows={4} placeholder="Enter details of your travel timing, preferred companion profiles, or event dates discreetly." value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-[#0a0d14] border border-zinc-700/60 focus:border-luxury-gold text-white font-sans text-sm rounded-xl px-4 py-3 outline-none resize-none" /></div>
                <button type="submit" className="w-full bg-luxury-gold hover:bg-rose-600 text-white font-sans font-black text-xs uppercase tracking-widest py-4 rounded-xl cursor-pointer transition-all duration-300 shadow-lg font-black flex items-center justify-center gap-2"><Sparkles className="w-4 h-4 fill-white text-white" /><span>Send Encrypted Message</span></button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Success Notification Alert Toast */}
      <AnimatePresence>
        {isSuccessToast && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.95 }} className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#141925] border border-luxury-gold text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider">Verifying transmission routing...</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}