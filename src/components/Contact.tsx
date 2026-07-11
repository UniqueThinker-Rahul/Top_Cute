import { Phone, MessageCircle, Clock, ShieldAlert, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-luxury-bg text-white">
      
      {/* Top Banner Section */}
      <section className="relative min-h-[250px] flex items-center justify-center border-y border-luxury-gold/15 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Top Dehradun call girls.webp" 
            alt="Dehradun Elite Contact" 
            width="1920" 
            height="1080" 
            fetchPriority="high" 
            className="w-full h-full object-cover object-bottom opacity-15 mix-blend-luminosity scale-102" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/80 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-3">
          <span className="font-sans text-[10px] font-black tracking-[0.3em] text-luxury-gold uppercase block">
            SECURE ACCESS Dehradun
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
            Contact Us
          </h2>
          <p className="font-sans text-xs text-zinc-400 font-light max-w-lg mx-auto">
            If you are looking for a trusted escort service in Dehradun, we can help. We focus on being professional, keeping things private, and making sure you are happy.
          </p>
        </div>
      </section>

      {/* Contact Information Section (Centered layout) */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Luxury Card */}
          <div className="bg-[#141925]/80 border border-luxury-gold/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative space-y-10 text-left">
            
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase block">
                CONFIDENTIAL DISPATCH
              </span>
              <h2 className="font-serif text-3xl sm:text-4.5xl font-extrabold text-white leading-tight">
                Discreet & Secure Communication
              </h2>
              <div className="h-[2px] w-14 bg-luxury-gold rounded-full" />
              <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
                Contact us today to book an appointment or to learn more about our escort services. We look forward to providing you with a comfortable, discreet, and memorable experience.
              </p>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                Your identity remains unrecorded. All digital inquiries, messages, and calls are permanently purged and routed through high-grade private protocols. Zero traces are ever stored.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-luxury-gold/15">
              
              {/* Direct Hotlines */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold">
                  <Phone className="w-5 h-5 fill-luxury-gold/10" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-black uppercase tracking-wider text-amber-400">
                    Direct Hotlines
                  </h3>
                  <a href="tel:+91000000000" className="font-sans text-lg font-bold text-white hover:text-luxury-gold transition-colors block mt-0.5">
                    +91-000000000
                  </a>
                </div>
              </div>

              {/* Confidential WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold">
                  <MessageCircle className="w-5 h-5 fill-luxury-gold/10" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-black uppercase tracking-wider text-amber-400">
                    Confidential WhatsApp
                  </h3>
                  <a href="https://wa.me/91000000000" target="_blank" rel="noopener noreferrer" className="font-sans text-lg font-bold text-white hover:text-luxury-gold transition-colors block mt-0.5">
                    Instant Booking WhatsApp
                  </a>
                </div>
              </div>

              {/* Secure Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold">
                  <Mail className="w-5 h-5 fill-luxury-gold/10" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-black uppercase tracking-wider text-amber-400">
                    Secure Email
                  </h3>
                  <a href="mailto:topcute@topcutegirls.org" className="font-sans text-lg font-bold text-white hover:text-luxury-gold transition-colors block mt-0.5">
                    topcute@topcutegirls.org
                  </a>
                </div>
              </div>

              {/* Agency Headquarters */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold">
                  <MapPin className="w-5 h-5 fill-luxury-gold/10" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-black uppercase tracking-wider text-amber-400">
                    Agency Headquarters
                  </h3>
                  <p className="font-sans text-base font-bold text-white mt-0.5">
                    Rajpur Road, Dehradun
                  </p>
                  <p className="font-sans text-xs text-zinc-400 mt-0.5">
                    Uttarakhand 248001, India
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-luxury-card/60 border border-luxury-gold/30 rounded-xl flex items-center justify-center shrink-0 text-luxury-gold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-black uppercase tracking-wider text-amber-400">
                    Operating Hours
                  </h3>
                  <p className="font-sans text-base font-bold text-white mt-0.5">
                    24 Hours / 7 Days a week
                  </p>
                </div>
              </div>

            </div>

            {/* Warning Alert */}
            <div className="bg-[#0a0d14]/80 border border-luxury-gold/15 rounded-2xl p-5 flex items-center gap-4 mt-6">
              <ShieldAlert className="w-8 h-8 text-luxury-gold shrink-0" />
              <p className="font-sans text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-light">
                <strong className="text-zinc-200">Verification Warning:</strong> We require zero deposits or registration fees before you meet a companion. Always protect your capital.
              </p>
            </div>

            {/* Legal & Policy Links */}
            <div className="pt-6 mt-6 border-t border-luxury-gold/15 flex flex-wrap gap-4 items-center">
              <a href="/privacy-policy" className="font-sans text-xs text-zinc-400 hover:text-luxury-gold transition-colors">Privacy Policy</a>
              <span className="text-zinc-600 text-xs">•</span>
              <a href="/terms" className="font-sans text-xs text-zinc-400 hover:text-luxury-gold transition-colors">Terms of Service</a>
              <span className="text-zinc-600 text-xs">•</span>
              <a href="/disclaimer" className="font-sans text-xs text-zinc-400 hover:text-luxury-gold transition-colors">Disclaimer</a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}