import { motion } from 'motion/react';
import { Phone, MessageCircle, Shield, Award, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-luxury-bg"
    >
      {/* Hidden Semantic SEO Anchor Block for Crawler Ranking Signals */}
      <div className="sr-only">
        <h2>Dehradun call girl service — Call girl dehradun — Dehradun escort service</h2>
        <p>Welcome to the ultimate hub for escort service dehradun. Discover premium Dehradun escort portfolios, featuring stunning escorts in dehradun, independent escort dehradun models, and your ideal Dehradun escort girl.</p>
        <p>We supply high profile Dehradun call girls, premium independent call girls dehradun, and a verified call girl service in dehradun. Browse verified profiles of call girls in dehradun and high class dehradun escort hostesses.</p>
        <p>Dial our direct Dehradun call girl number or call girls number in dehradun. Reach our team via Dehradun call girl WhatsApp number or use our active Dehradun call girl mobile number to book beautiful Dehradun call girls near me. We offer elite Russian call girls dehradun, local Dehradun bhabhi call girl selections, top Dehradun call girls, and exclusive VIP dehradun call girl hospitality.</p>
      </div>

      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Dehradun call girl number.webp" 
          alt="Dehradun call girl number - Premium Dehradun call girl service and luxury escort service dehradun hospitality lounge"
          className="w-full h-full object-cover object-center scale-105 filter brightness-25 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Soft Gold Ambient Glow circles behind text */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-luxury-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-bg/90 via-transparent to-luxury-bg/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        {/* Top Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-wrap items-center justify-center gap-4 mb-8 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-luxury-gold/30"
        >
          <span className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-luxury-gold uppercase">
            <Shield className="w-3.5 h-3.5" />
            100% Discreet
          </span>
          <span className="w-1.5 h-1.5 bg-luxury-gold/50 rounded-full" />
          <span className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-luxury-gold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            Dehradun Exclusive
          </span>
          <span className="w-1.5 h-1.5 bg-luxury-gold/50 rounded-full" />
          <span className="flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-luxury-gold uppercase">
            <Award className="w-3.5 h-3.5" />
            Elite Companions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Premium Dehradun <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-[#ecc784] to-luxury-gold drop-shadow-[0_2px_10px_rgba(197,160,89,0.3)]">
            Call Girls & Escort Service
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans text-lg sm:text-xl text-zinc-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Welcome to the most trusted and luxurious companionship service in Dehradun, 
          where elegance, privacy, and premium experiences come together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            id="hero-call-cta"
            href="tel:000000000"
            className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] bg-gradient-to-r from-luxury-gold to-yellow-600 text-black font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full shadow-xl shadow-luxury-gold/10 hover:shadow-luxury-gold/30 hover:-translate-y-0.5 transition-all duration-350"
          >
            <Phone className="w-5 h-5 fill-black" />
            <span>Direct Booking</span>
          </a>

          <a
            id="hero-whatsapp-cta"
            href="https://wa.me/91000000000?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20premium%20companion%20from%20Top%20Cute%20Girls%20in%20Dehradun.%20Please%20share%20the%20available%20roster."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto min-w-[200px] bg-[#220810]/60 backdrop-blur-md hover:bg-[#220810]/90 text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full border border-luxury-gold/20 hover:border-luxury-gold/50 shadow-lg hover:-translate-y-0.5 transition-all duration-350"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>

        {/* Bottom Location Focus */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-zinc-500 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2"
        >
          <span className="w-8 h-[1px] bg-zinc-800" />
          <span>Serving All Luxury Hotels & Resorts in Dehradun</span>
          <span className="w-8 h-[1px] bg-zinc-800" />
        </motion.div>
      </div>

      {/* Elegant Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />
    </section>
  );
}