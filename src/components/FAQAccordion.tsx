import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { faqData } from '../data';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-luxury-bg relative overflow-hidden border-t border-luxury-gold/10">
      <div className="absolute left-1/3 top-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase">Discreet Help Center</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">Frequently Asked <span className="text-luxury-gold">Questions</span></h2>
          <div className="h-[1px] w-20 bg-luxury-gold mx-auto my-6" />
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={`bg-luxury-card rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-luxury-gold/40 shadow-xl shadow-luxury-gold/[0.04]' : 'border-luxury-gold/15 hover:border-luxury-gold/30'}`}>
                <button onClick={() => toggleFAQ(item.id)} className="w-full flex items-center justify-between text-left p-6 sm:p-7 font-sans focus:outline-none transition-colors group">
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? 'text-luxury-gold' : 'text-zinc-400'}`} />
                    <span className="font-serif text-base sm:text-lg font-bold text-zinc-102 group-hover:text-luxury-gold">{item.question}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-[#300f19] flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 bg-luxury-gold/10' : ''}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-luxury-gold' : 'text-zinc-400'}`} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light border-t border-luxury-gold/10 pt-4">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-luxury-card to-luxury-card-light border border-luxury-gold/25 rounded-3xl p-8 max-w-2xl mx-auto space-y-6 shadow-xl animate-fade-in">
          <p className="font-serif text-xl italic text-white font-medium">Have other private requests?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a href="tel:9996265679" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-luxury-gold to-yellow-600 hover:brightness-110 text-black font-sans font-black text-[10px] uppercase tracking-widest py-3.5 px-6 rounded-full transition-all duration-200"><Phone className="w-4 h-4 fill-black" /><span>Call Agency</span></a>
            <a href="https://wa.me/919996265679" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#300f19] hover:bg-[#300f19]/70 text-white font-sans font-black text-[10px] uppercase tracking-widest py-3.5 px-6 rounded-full border border-luxury-gold/20 hover:border-luxury-gold transition-colors"><MessageCircle className="w-4 h-4 text-emerald-500" /><span>Enquire Privately</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}