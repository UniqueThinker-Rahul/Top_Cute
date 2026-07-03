import React from 'react';
import { Phone, Mail, MapPin, ShieldAlert, Heart, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      id="contact"
      className="bg-luxury-bg border-t border-luxury-gold/20 pt-20 pb-10 relative overflow-hidden"
    >
      {/* Decorative Blur and grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(214,175,55,0.02),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact block - Prominent Headline */}
        <div className="bg-gradient-to-r from-luxury-card via-luxury-card-light to-luxury-card border border-luxury-gold/30 rounded-3xl p-8 md:p-12 mb-16 text-center shadow-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/[0.02] rounded-full filter blur-xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-luxury-gold/[0.01] rounded-full filter blur-xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] text-luxury-gold uppercase flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
              Direct Escort Dispatch
            </span>
            
            <h3 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-white leading-tight">
              Book Dehradun <br className="sm:hidden" />
              <span className="text-luxury-gold">Call Girls Today</span>
            </h3>
            
            <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
              We look forward to transforming your trip into an unforgettable dream session. 
              Our lines are completely safe and monitored by senior dispatch agents. Simply click below to call.
            </p>

            <div className="pt-4 flex flex-col items-center justify-center gap-4">
              <a
                id="footer-phone-dispatch-link"
                href="tel:9996265679"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-luxury-gold to-rose-500 hover:brightness-110 text-white font-sans font-black text-xl sm:text-2xl py-4.5 px-8 sm:px-12 rounded-full shadow-lg hover:scale-102 transition-transform duration-300"
              >
                <Phone className="w-6 h-6 fill-white text-white" />
                <span>+91-9996265679</span>
              </a>
              
              <p className="font-sans text-[11px] text-zinc-400 uppercase tracking-widest">
                No credit card required • Cash on dispatch standard
              </p>
            </div>
          </div>
        </div>

        {/* Footer grid information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-luxury-gold/15">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-6">
            <a
              id="footer-brand-logo-link"
              href="#main-home"
              onClick={(e) => handleSmoothScroll(e, '#main-home')}
              className="inline-flex items-center gap-3 group"
            >
              {/* Updated Logo Image */}
              <img 
                src="/TCG logo.png" 
                alt="Top Cute Girls Logo" 
                className="w-[54px] h-[54px] shrink-0 object-contain" 
              />
              <div className="flex flex-col items-start gap-0">
                <span className="font-serif text-2xl font-black tracking-wider text-luxury-gold group-hover:opacity-90 transition-opacity">
                  TOP CUTE GIRLS
                </span>
                <p className="font-sans text-[9px] tracking-[0.25em] text-zinc-400 uppercase mt-0.5 whitespace-nowrap">
                  Dehradun Premium
                </p>
              </div>
            </a>
            
            <p className="font-sans text-sm text-zinc-350 font-light leading-relaxed max-w-sm">
              Trusted Escort Agency in Dehradun. Offering selected models, superb 5-star hotel visits, 
              and tailored companionship for elite gentlemen across Uttarakhand.
            </p>

            {/* Custom high fidelity DMCA badge */}
            <div className="inline-flex items-center gap-2 bg-[#141925] border border-luxury-gold/20 rounded-lg p-2.5">
              <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center text-white shrink-0 font-bold text-xs uppercase shadow-sm">
                DMCA
              </div>
              <div className="font-sans text-[10px] text-left">
                <p className="text-zinc-200 font-bold leading-none tracking-tight">SECURED & PROTECTED</p>
                <p className="text-zinc-400 leading-none mt-0.5 font-light">REG#: DEHR-TCG-5779</p>
              </div>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Quick Navigations
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-400">
              <li>
                <a
                  href="#main-home"
                  onClick={(e) => handleSmoothScroll(e, '#main-home')}
                  className="hover:text-luxury-gold transition-colors"
                >
                  Home Lobby
                </a>
              </li>
              <li>
                <a
                  href="#main-about"
                  onClick={(e) => handleSmoothScroll(e, '#main-about')}
                  className="hover:text-luxury-gold transition-colors"
                >
                  About Dehradun Service
                </a>
              </li>
              <li>
                <a
                  href="#main-services"
                  onClick={(e) => handleSmoothScroll(e, '#main-services')}
                  className="hover:text-luxury-gold transition-colors"
                >
                  Offered Hospitality
                </a>
              </li>
              <li>
                <a
                  href="#main-gallery"
                  onClick={(e) => handleSmoothScroll(e, '#main-gallery')}
                  className="hover:text-luxury-gold transition-colors"
                >
                  VIP Companions Roster
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, '#faq')}
                  className="hover:text-luxury-gold transition-colors"
                >
                  Support FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Guidelines/Legal block */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Client Protection
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-zinc-400">
              <li>
                <span className="hover:text-luxury-gold transition-colors cursor-pointer block">
                  100% Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-luxury-gold transition-colors cursor-pointer block">
                  Terms of Companionship
                </span>
              </li>
              <li>
                <span className="hover:text-luxury-gold transition-colors cursor-pointer block">
                  Discreet Booking Code
                </span>
              </li>
              <li>
                <span className="hover:text-luxury-gold transition-colors cursor-pointer block">
                  Photo Verification Steps
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright information */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-zinc-400">
          <p>© {currentYear} Top Cute Girls Dehradun agency. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Built for exclusive hotel tours in Uttarakhand</span>
            <Heart className="w-3.5 h-3.5 text-luxury-gold fill-luxury-gold" />
          </div>
        </div>

      </div>
    </footer>
  );
}