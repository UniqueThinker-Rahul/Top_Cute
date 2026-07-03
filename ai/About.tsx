import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-luxury-bg relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-rose-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Interactive Photo Gallery */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-luxury-gold to-[#e6be75] rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-2xl border border-luxury-gold/20 bg-luxury-card aspect-[4/5] shadow-2xl">
                <img
                  src="/image13.png" // Updated to local .png image
                  alt="Elegant Luxury Model Portrait"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-750 ease-out scale-102 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Embedded Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <p className="font-serif text-lg text-luxury-gold font-bold">VIP Hospitality & Privacy</p>
                  <p className="font-sans text-xs text-zinc-300 mt-1">Carefully vetted models ensuring pristine standards of elegance.</p>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-luxury-gold to-[#e6be75] text-white font-sans text-xs font-black tracking-widest uppercase px-4 py-2.5 rounded-lg shadow-xl border border-white/10 transform rotate-3">
              100% Secure
            </div>
          </div>

          {/* Right Column: Premium Text Description and Structured Checkpoints */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-[0.3em] text-luxury-gold uppercase block">
                Exclusive Companionship
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Luxury Escort Service <br />
                <span className="text-zinc-400">in Dehradun</span>
              </h2>
            </div>

            <div className="h-[1px] w-20 bg-luxury-gold" />

            <div className="space-y-6 font-sans text-base text-zinc-300 font-light leading-relaxed">
              <p>
                Dehradun is one of the most peaceful and beautiful cities in Uttarakhand, 
                famous for its luxury hotels, cafes, and relaxing atmosphere. Our escort service offers 
                premium companionship for clients visiting for business, holidays, or personal enjoyment.
              </p>
              <p>
                We provide beautiful, intelligent, and stylish companions who are well-versed in high-society 
                etiquette. Whether you require an elegant companion for a quiet dinner in a boutique restaurant or 
                a friendly partner to explore Dehradun's luxurious mountain escapes, we serve your desires 
                with absolute refinement.
              </p>
            </div>

            {/* High-conversion credentials list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">Elite Standard Services</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">Hotel, private villa and resort visits.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">Bilingual Companions</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">Elegant spoken English and Hindi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">Easy Discrete Verification</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">Simplified steps keeping identity protected.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">24/7 Availability</h4>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">Dispatch services round the clock in Dehradun.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                id="about-explore-btn"
                href="#main-gallery"
                className="inline-flex items-center gap-1 text-sm font-bold tracking-wider text-luxury-gold hover:text-white transition-colors duration-200 group"
              >
                <span>View Elite Companions Roster</span>
                <span className="transform group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}