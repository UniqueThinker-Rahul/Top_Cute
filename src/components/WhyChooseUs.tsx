import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, Star } from 'lucide-react';
import { featuresData } from '../data';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Star: Star,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-gradient-to-b from-luxury-bg to-luxury-card relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase">
            Signature Guarantee
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Why Discerning Gentlemen <br />
            <span className="text-luxury-gold italic">Choose Our Agency</span>
          </h2>
          <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
            We are dedicated to presenting unmatched companionship standards, prioritizing absolute security, 
            immaculate etiquette, and the most exquisite companion roster in Dehradun.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName];
            return (
              <motion.div
                id={`feature-card-${idx}`}
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative bg-luxury-card border border-luxury-gold/25 hover:border-luxury-gold/50 hover:bg-luxury-card-light transition-all duration-300 shadow-xl rounded-2xl p-8 overflow-hidden"
              >
                {/* Accent glow on card hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-luxury-gold/0 via-luxury-gold/[0.01] to-luxury-gold/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Styled Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/[0.04] rounded-xl flex items-center justify-center border border-luxury-gold/25 group-hover:border-luxury-gold mb-6 transition-colors duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-luxury-gold group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>

                {/* Titles & text */}
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
                  {feature.description}
                </p>

                {/* Card Corner Trim decoration */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-transparent group-hover:border-luxury-gold/10 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Footer bar */}
        <div className="mt-16 bg-luxury-card border border-luxury-gold/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg shrink-0">
              ✓
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-white">Full Privacy Shield Enforced</p>
              <p className="font-sans text-xs text-zinc-400">All data is instantly wiped standard after checkout completion.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              id="trust-cta-call"
              href="tel:000000000"
              className="font-sans text-xs font-black tracking-widest uppercase text-black bg-luxury-gold px-5 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300"
            >
              Verify Secure Dispatch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
